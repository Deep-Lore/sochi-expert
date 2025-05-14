'use client'

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedBox } from '@/shared/AnimatedBox';
import { ScrollLink } from '@/shared/ScrollLink';

interface ISlides {
  imageUrl: string;
  title: string;
  description: string;
}

const slides: ISlides[] = [
  {
    imageUrl: './project_1.jpg',
    title: 'г. Сочи, пер. Грузинский 1',
    description: '120-ти квартирный 17-ти этажный жилой дом. Пространство сейсмоизолированного фундамента используется под магазин, парикмахерскую и кафе.',
  },
  {
    imageUrl: './project_2.jpg',
    title: 'г. Сочи, Адлер, ул. Троицкая, 66',
    description: 'Трехэтажный,  трех блочный жилой дом с двухуровневым подвалом и мансардой. Пространство сейсмоизолированного фундамента используется в качестве парковки на 30 м/мест.',
  },
  {
    imageUrl: './project_3.jpg',
    title: 'г. Сочи, ул. Туапсинская',
    description: ' 10-ти этажный жилой дом. Пространство сейсмоизолированного фундамента используется в качестве парковки на 18 м/мест.',
  },
  {
    imageUrl: './project_4.jpg',
    title: 'г. Сочи, п. Лазаревское, ул. Калараш, литер 5',
    description: '11-ти этажный жилой дом. Пространство сейсмоизолированного фундамента используется в качестве парковки. ',
  },
  {
    imageUrl: './project_5.jpg',
    title: 'г. Сочи, ул. Красноармейская',
    description: 'Жилой дом со встроенными общественными помещениями. Пространство сейсмоизолированного фундамента используется под магазин. ',
  },
  {
    imageUrl: './project_6.jpg',
    title: 'г. Сочи, п. Хоста ул. Октября',
    description: '14-ти этажный дом. Пространство сейсмоизолированного фундамента используется в качестве парковки на 36 м/мест.',
  },
  {
    imageUrl: './project_7.jpg',
    title: 'г. Грозный, Ахматовский район, ул. Шейха Али Митаева, 2 «а»',
    description: '«Высотный жилой комплекс со встроено – пристроенными помещениями общественного назначения и двухуровневым подземным паркингом».',
  },
  {
    imageUrl: './project_8.jpg',
    title: 'Кемеровская область-Кузбасс, г. Новокузнецк, Новоильинский район, квартал В, жилой дом №10»',
    description: 'Три 15-ти этажных жилых дома.',
  },
];

export const Projects = () => {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const handleSlideClick = (index: number) => {
    setSelectedSlide(index);
  };

  const scrollNext = () => setSelectedSlide((prevSelectedSlide) => (prevSelectedSlide + 1) % slides.length);
  const scrollPrev = () => setSelectedSlide((prevSelectedSlide) => (prevSelectedSlide - 1 + slides.length) % slides.length);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    setTouchStartX(e.type === 'touchstart' ? (e as React.TouchEvent<HTMLDivElement>).touches[0].clientX : (e as React.MouseEvent<HTMLDivElement>).clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    if (touchStartX === null || !slideRef.current) return;

    const currentX = e.type === 'touchmove' ? (e as React.TouchEvent<HTMLDivElement>).touches[0].clientX : (e as React.MouseEvent<HTMLDivElement>).clientX;
    const diffX = touchStartX - currentX;

    const swipeThreshold = 50;

    if (Math.abs(diffX) > swipeThreshold) {
      if (diffX > 0) {

        scrollNext();
      } else {
        scrollPrev();
      }
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };


  return (
    <div id="projects" className="w-full mt-25 container mx-auto px-5 text-primary-dark-blue/87 drag-none
      md:mt-35 lg:mt-40
    ">
      <h2 className="text-4xl/10 text-center font-light tracking-[1px]
        sm:tracking-[7px] sm:[word-spacing:10px]
      ">
        <AnimatedBox animationType='slideInUp'>
          Наши проекты
        </AnimatedBox>
      </h2>

      <AnimatedBox animationType='slideInUp' className="bg-white mt-10 lg:mt-25 shadow-lg">
        <div
          id='projects_main_image'
          className="relative h-140 lg:h-150 xl:h-180 cursor-grab active:cursor-grabbing"
          ref={slideRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
        >
          <Image
            src={slides[selectedSlide].imageUrl}
            alt={slides[selectedSlide].title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300 ease-in-out hover:opacity-90 select-none"
          />
          <div className="absolute top-0 left-0 size-full flex justify-between items-center">
            <button
              className="p-2 rounded-full transition-colors bg-white/60 text-gray-800 disabled:opacity-50 cursor-pointer -translate-x-1/3
              hover:bg-white/70"
              onClick={scrollPrev}
            >
              <ChevronLeft size={34} />
            </button>
            <button
              className="p-2 rounded-full transition-colors bg-white/60 text-gray-800 disabled:opacity-50 cursor-pointer translate-x-1/3
              hover:bg-white/70"
              onClick={scrollNext}
            >
              <ChevronRight size={34} />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-primary-dark-blue/70 text-white">
            <h3 className="text-xl font-semibold">{slides[selectedSlide].title}</h3>
            <p className="text-sm md:text-base">{slides[selectedSlide].description}</p>
          </div>
        </div>
      </AnimatedBox>

      <div className="grid grid-cols-2 md:hidden gap-5 mt-5">
        <CardsGalery
          cardQuanity={2}
          slides={slides}
          selectedSlide={selectedSlide}
          handleSlideClick={handleSlideClick}
        />
      </div>

      <div className="hidden md:grid grid-cols-3 lg:hidden gap-5 mt-5">
        <CardsGalery
          cardQuanity={3}
          slides={slides}
          selectedSlide={selectedSlide}
          handleSlideClick={handleSlideClick}
        />
      </div>

      <div className="hidden lg:grid grid-cols-4 gap-5 mt-5">
        <CardsGalery
          cardQuanity={4}
          slides={slides}
          selectedSlide={selectedSlide}
          handleSlideClick={handleSlideClick}
        />
      </div>

    </div>
  );
};

interface CardsGalleryProps {
  cardQuanity: number,
  slides: ISlides[],
  selectedSlide: number,
  handleSlideClick: (index: number) => void
}

const CardsGalery = ({ cardQuanity, slides, selectedSlide, handleSlideClick }: CardsGalleryProps) => {
  return (
    <>
      {slides.map((slide, index) => (
        <AnimatedBox animationType='slideInUp' delay={index % cardQuanity * 200} key={index}>
          <ScrollLink id='projects_main_image'>
            <div
              className={`cursor-pointer transition-transform duration-300 shadow-lg
                hover:ring-2 hover:ring-primary-dark-blue/50 hover:shadow-xl hover:scale-105
                ${index === selectedSlide ? 'ring-2 ring-primary-dark-blue/87' : ''}
              `}
              onClick={() => handleSlideClick(index)}
            >
              <div className="relative h-40">
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 ease-in-out hover:opacity-90"
                />
              </div>
              <div className="p-2">
                <h4 className="text-sm font-medium truncate">{slide.title}</h4>
              </div>
            </div>
          </ScrollLink>
        </AnimatedBox>
      ))}
    </>
  )
}