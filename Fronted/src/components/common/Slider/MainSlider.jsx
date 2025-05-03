// src/components/MainSlider.jsx
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "./slider.css";
import banner1Desktop from "../../../assets/img/Slider/banner-01-desktop.webp";
import banner1Mobile from "../../../assets/img/Slider/banner-01-mobile.webp";
import banner2Desktop from "../../../assets/img/Slider/banner-02-desktop.webp";
import banner2Mobile from "../../../assets/img/Slider/banner-02-mobile.webp";
import banner3Desktop from "../../../assets/img/Slider/banner-03-desktop.webp";
import banner3Mobile from "../../../assets/img/Slider/banner-03-mobile.webp";
import banner4Desktop from "../../../assets/img/Slider/banner-04-desktop.webp";
import banner4Mobile from "../../../assets/img/Slider/banner-04-mobile.webp";
import banner5Desktop from "../../../assets/img/Slider/banner-05-desktop.webp";
import banner5Mobile from "../../../assets/img/Slider/banner-05-mobile.webp";
import banner6Desktop from "../../../assets/img/Slider/banner-06-desktop.webp";
import banner6Mobile from "../../../assets/img/Slider/banner-06-mobile.webp";
import banner7Desktop from "../../../assets/img/Slider/banner-07-desktop.webp";
import banner7Mobile from "../../../assets/img/Slider/banner-07-mobile.webp";
import banner8Desktop from "../../../assets/img/Slider/banner-08-desktop.webp";
import banner8Mobile from "../../../assets/img/Slider/banner-08-mobile.webp";
import banner9Desktop from "../../../assets/img/Slider/banner-09-desktop.webp";
import banner9Mobile from "../../../assets/img/Slider/banner-09-mobile.webp";

const slides = [
  {
    desktop: banner1Desktop,
    mobile: banner1Mobile,
    alt: "Oferta 1",
    link: "/ofertas/Oferta-1",
  },
  {
    desktop: banner2Desktop,
    mobile: banner2Mobile,
    alt: "Oferta 2",
    link: "/ofertas/Oferta-2",
  },
  {
    desktop: banner3Desktop,
    mobile: banner3Mobile,
    alt: "Oferta 3",
    link: "/ofertas/Oferta-3",
  },
  {
    desktop: banner4Desktop,
    mobile: banner4Mobile,
    alt: "Oferta 4",
    link: "/ofertas/Oferta-4",
  },
  {
    desktop: banner5Desktop,
    mobile: banner5Mobile,
    alt: "Oferta 5",
    link: "/ofertas/Oferta-5",
  },
  {
    desktop: banner6Desktop,
    mobile: banner6Mobile,
    alt: "Oferta 6",
    link: "/ofertas/Oferta-6",
  },
  {
    desktop: banner7Desktop,
    mobile: banner7Mobile,
    alt: "Oferta 7",
    link: "/ofertas/Oferta-7",
  },
  {
    desktop: banner8Desktop,
    mobile: banner8Mobile,
    alt: "Oferta 8",
    link: "/ofertas/Oferta-8",
  },
  {
    desktop: banner9Desktop,
    mobile: banner9Mobile,
    alt: "Oferta 9",
    link: "/ofertas/Oferta-9",
  },
];

export default function MainSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Swiper ahora maneja los refs al renderizar
  }, []);
  return (
    <div className="main-slider-container">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="main-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <a href={slide.link}>
              <picture>
                <source srcSet={slide.desktop} media="(min-width: 768px)" />
                <img
                  src={slide.mobile}
                  alt={slide.alt}
                  className="slider-image"
                  loading="lazy"
                />
              </picture>
            </a>
          </SwiperSlide>
        ))}
        {/* Botones de navegación personalizados */}
        <div
          ref={prevRef}
          className="custom-button prev-button"
          aria-label="Anterior"
        >
          ‹
        </div>
        <div
          ref={nextRef}
          className="custom-button next-button"
          aria-label="Siguiente"
        >
          ›
        </div>
      </Swiper>
    </div>
  );
}
