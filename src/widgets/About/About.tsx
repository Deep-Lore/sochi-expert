import { AnimatedBox } from "@/shared/AnimatedBox";

export const About = () => {
  return (
    <div id="about" className="w-full mt-25 md:mt-35 container mx-auto px-5 flex justify-center items-center text-primary-dark-blue/87">
      <div className="grid grid-cols-12 gap-y-10 font-light">
        <AnimatedBox animationType='slideInUp' className="hidden size-63 border-3 border-primary-dark-blue text-[120px] justify-center items-center font-black
          lg:flex lg:col-span-3
          xl:col-start-1
        ">№1</AnimatedBox>
        <div className="col-span-12 flex flex-col gap-y-10
          lg:col-start-5 lg:col-span-8 lg:gap-y-8
          xl:gap-y-10 xl:col-start-5 xl:col-span-8
        ">
          <h2 className="hidden text-primary-dark-blue/70
            md:block md:text-4xl/10 md:text-center md:font-light md:tracking-[5px] md:[word-spacing:10px]
            lg:text-left lg:uppercase lg:block lg:text-[22px] lg:tracking-[7px]
          ">
            <AnimatedBox animationType='slideInUp'>Коротко о нас</AnimatedBox>
          </h2>
          <div className="grid grid-cols-12 gap-y-20
            md:flex-row
          ">
            <div className="hidden
              md:block md:col-span-6 md:text-3xl/11.5
              lg:col-span-5 lg:text-3xl/12
              xl:text-4xl/11.5
            ">
              <AnimatedBox animationType='slideInUp'>ЛУЧШИЕ В СВОЕМ ДЕЛЕ БЛАГОДАРЯ <span className="font-black">КОМПЛЕКСНОМУ ПОДХОДУ</span></AnimatedBox>
            </div>
            <div className="col-span-12 text-lg/8 text-justify
              md:col-span-6
              lg:col-start-7 lg:text-lg/6
              xl:text-lg/7.5
            ">
              <AnimatedBox animationType='slideInUp'>
                Мы – это больше, чем просто система сейсмоизоляции. Мы предлагаем полный цикл услуг – от проектирования и расчётов до монтажа и обслуживания. 
                Мы обеспечиваем комплексный подход и экспертную поддержку на каждом этапе.
              </AnimatedBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}