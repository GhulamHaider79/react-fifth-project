// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import './Carousel.css';
// import { Navigation } from 'swiper/modules';

// export default function Carousel() {
//   const [slides, setSlides] = useState([]);

//   useEffect(() => {
//     //
//     fetch('https://dummyjson.com/recipes')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Fetched data:', data); 
//         const limitedData = data.recipes.slice(0, 6); 
//         setSlides(limitedData);
//       })
//       .catch(error => console.error('Error fetching data:', error.message));
//   }, []);

//   return (
//     <>
//       <div className="container">
//         <div className="carousel">
//           <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//             {slides.map((slide, index) => (
//               <SwiperSlide key={index} className={`slide slide${index + 1}`}>
               
//                 <img src={slide.image} alt={slide.name} className="carousel-image" />
                
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </>
//   );
// }




import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css';
import { Navigation } from 'swiper/modules';

export default function Carousel() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        console.log('Fetched data:', data);

        const limitedData = data.recipes.slice(0, 6);
        setSlides(limitedData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="carousel">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {slides.map((slide, index) => (
              <SwiperSlide
                key={slide.id}
                className={`slide slide${index + 1}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="carousel-content">
                  <h3>{slide.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

