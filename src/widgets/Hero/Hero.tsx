
import { Feature } from './Feature';
import { Button } from "@/shared/Button";
import { ScrollLink } from '@/shared/ScrollLink';
import { AnimatedBox } from '@/shared/AnimatedBox';

export const Hero = () => {
  return (
    <div id='hero' className="relative w-full h-svh bg-primary-dark-blue">
      <BackgroundBanner />
      <MainBanner />
      <Feature />
    </div>
  );
}

const BackgroundBanner = () => {
  return (
    <div className="absolute top-0 left-0 size-full z-0 overflow-hidden">
      <div className="hidde top-0 size-full container mx-auto px-5 z-2 grid grid-cols-12
        md:relative
      ">
        <div className="col-span-5 h-full bg-primary-dark-blue"></div>
      </div>

      <div className="absolute top-0 size-full z-1 grid grid-cols-12">
        <video
          src="/video.mp4"
          className="absolute min-w-full min-h-full w-auto h-auto object-cover
            md:col-start-6 md:col-span-7
          "
          autoPlay
          muted
          loop
        />
        <div className="absolute size-full z-0 bg-primary-dark-blue/75 md:bg-primary-dark-blue/20" />
      </div>
    </div>
  )
}

const MainBanner = () => {
  return (
    <div className='absolute top-0 left-0 size-full z-2 flex flex-col justify-center'>
      <div className='container mx-auto px-2 sm:px-5 grid grid-cols-12 gap-y-6'>
        <h1 className="col-span-12 text-4xl/9 tracking-wide
          sm:text-4xl/9
          md:text-5xl/12
          lg:col-span-10 lg:text-6xl/15
          xl:col-span-10 xl:text-7xl/18
        ">
          <AnimatedBox animationType='slideInLeft'>
            <b>Инновационные</b> решения <br /> для <b>сейсмостойкого</b> строительства
          </AnimatedBox>
        </h1>

        <h3 className="row-start-2 col-span-10 col-start-1 text-base/6 tracking-wide
          sm:col-span-9 
          md:col-span-7 
          lg:col-span-5 lg:text-lg/7
          xl:col-span-4
        ">
          <AnimatedBox animationType='slideInLeft' delay={200}>
            <span className="text-base md:text-lg">Предлагаем современные решения для защиты зданий от землетрясений.</span>
            <span className="hidden sm:inline"> Наши технологии обеспечивают безопасность и долговечность конструкций в сейсмоопасных регионах.</span>
          </AnimatedBox>
        </h3>
        <div className="col-span-9">
          <ScrollLink id='features'>
            <AnimatedBox animationType='slideInLeft' delay={400}>
              <Button>Подробнее</Button>
            </AnimatedBox>
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}

