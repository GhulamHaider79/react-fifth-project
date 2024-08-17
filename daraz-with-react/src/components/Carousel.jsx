import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './Carousel.css';
import { Navigation, Autoplay } from 'swiper/modules';
import { RecipeContext } from './RecipeContext';
import { Link } from 'react-router-dom';

export default function Carousel() {
  const recipes = useContext(RecipeContext);

  

  if (!recipes || recipes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="carousel">
        <Swiper 
        navigation={true} modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
         className="mySwiper">
          {recipes.slice(0, 6).map((recipe, index) => (
            <SwiperSlide
              key={recipe.id}
              className={`slide slide${index + 1}`}
              style={{ backgroundImage: `url(${recipe.image})`, backgroundSize: 'cover' }}
            >
             <Link to={`/recipe/${recipe.id}`} className="carousel-content">
                <h3>{recipe.name}</h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}