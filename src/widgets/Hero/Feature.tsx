'use client'

import { useState, useEffect } from "react";
import { Shield, CircleDollarSign, Lock, Clock8 } from "lucide-react";

import type { ReactNode } from 'react'

interface IFeature {
  icon: ReactNode
  tittle: string,
  description: string
}

const FADE_DURATION = 800
const FADE_INTERVAL = 5000

const featureConfig: IFeature[] = [
  {
    icon: <Shield size={25} strokeWidth={3} />,
    tittle: "Сейсмозащита",
    description: "Гарантированная защита даже при 9-балльном землетрясении"
  },
  {
    icon: <CircleDollarSign size={25} strokeWidth={2} />,
    tittle: "Экономия",
    description: "Снижение расходов на строительство до 20% без потери качества."
  },
  {
    icon: <Lock size={23} strokeWidth={3} />,
    tittle: "Долговечность",
    description: "100+ лет службы. Надежная инвестиция в ваше будущее."
  },
  {
    icon: <Clock8 size={24} strokeWidth={3} />,
    tittle: "Стабильность",
    description: "Стабилизация после толчка - за считанные минуты!"
  },
]

export const Feature = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false)
      setTimeout(() => {
        setCurrentSlide((prewSlide) => (prewSlide + 1) % featureConfig.length);
      }, FADE_DURATION)
    }, FADE_INTERVAL)
  }, [currentSlide])

  return (
    <div className="absolute bottom-0 left-0 right-0 z-1 container mx-auto px-2 sm:px-5 mb-5 grid grid-cols-12">
      <div className={`col-span-12 flex flex-col gap-1 justify-between p-3 bg-gradient-to-r from-primary-dark-blue/75 from-50% to-primary-dark-blue/10
          md:col-start-6 md:ml-5
          transition-opacity duration-600 ${animate ? 'opacity-100' : 'opacity-0'}
        `}>
        <div className="flex items-center gap-3">
          {featureConfig[currentSlide].icon}
          <h4 className="text-xl/6 md:text-2xl/5 tracking-wide">{featureConfig[currentSlide].tittle}</h4>
        </div>
        <p className="text-lg/6 md:text-xl/6 tracking-wide font-light mt-2">
          {featureConfig[currentSlide].description}
        </p>
      </div>
    </div>
  )
}