import React, { useState } from 'react';
import { UnsplashImg } from './UnsplashArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const SlidesShow = ({ slides }) => {
  // hook 'useState' = compteur démarrant de zéro
  const [counter, setCounter] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    //pour setCounter = condition ternaire : si mon compteur est strictement égal à 'length-1' (soit ma dernière slide)
    // alors je remets le compteur à zéro, sinon mon compteur avance toujours d'une slide
    setCounter(counter === length - 1 ? 0 : counter +1);
  };

  const prevSlide = () => {
    // condition ternaire : idem que ci-dessus mais en décrémentant
    setCounter(counter === 0 ? length - 1 : counter - 1);
  };

  // pour confirmer que mes datas sont un tableau et qu'elles existent, sinon n'affiche rien
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  // if (Array.isArray(slides) && !slides.length) {
  //   return null;
  // }

  return (
    <section className='slider'>

      <h1>Mon Carousel</h1>

      <FontAwesomeIcon className='previous-slide' icon={faAngleLeft} onClick={prevSlide} />
  
      {UnsplashImg.map((slide, index) => {
        return (
          <div
            className={index === counter ? 'slide active' : 'slide'}
            key={index}
          >
            {index === counter && (
              <img src={slide.image} alt='landscape image' className='image' />
            )}
          </div>
        );
      })}

      <FontAwesomeIcon className='next-slide' icon={faAngleRight} onClick={nextSlide} />
    
    </section>
  );
};

export default SlidesShow;