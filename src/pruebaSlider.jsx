import React, { useState, useEffect } from 'react';
import {
  ArrowBack,
  ArrowForward,
} from '@mui/icons-material';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const MySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    { id: 1, nombre: "Estados Financieros Operacionales", modalidad: "Presencial" },
    { id: 2, nombre: "Estados Financieros Operacionales", modalidad: "Presencial" },
    { id: 3, nombre: "Estados Financieros Operacionales", modalidad: "Presencial" },
    { id: 4, nombre: "Estados Financieros Operacionales", modalidad: "Presencial" },
    { id: 5, nombre: "Estados Financieros Operacionales", modalidad: "Presencial" },
    { id: 6, nombre: "Estados Financieros Operacionales", modalidad: "Presencial" }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Avanzar a la siguiente diapositiva
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, 3000); // Cambiar de diapositiva cada 3000 milisegundos (3 segundos)

    return () => {
      // Limpiar el intervalo al desmontar el componente
      clearInterval(intervalId);
    };
  }, [data.length]);

  return (
    <CarouselProvider
      naturalSlideWidth={20}
      naturalSlideHeight={20}
      totalSlides={data.length}
      visibleSlides={3}
      currentSlide={currentSlide}
      

    >

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '4rem' }}>
      <ButtonBack
          onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length)}
          style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}
        >
          <ArrowBack />
        </ButtonBack>
      <ButtonNext
          onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length)}
          style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}
        >
          <ArrowForward />
        </ButtonNext>
      </div>
      
      <div style={{ }}>
     

      <Slider style={{}}>
        {data.map((item, index) => (

          
          <Slide key={item.id} index={index}>
            <div style={{ width: '20rem', height: '20rem', display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <div>
          <h3>{item.nombre}</h3>
              <strong>
                <p>{item.modalidad}</p>
              </strong>

          </div>
            
            </div>
          </Slide>
        
        ))}
        
      </Slider>
     

      </div>
    
    </CarouselProvider>
  );
};

export default MySlider;
