'use client'

import { AnimatedBox } from "@/shared/AnimatedBox";
import { Button } from "@/shared/Button";
import { Modal } from "@/shared/Modal";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Card {
  title: string,
  miniText: string,
  text: string,
  contentType: 'video' | 'image'
  src: string
  imageWidth?: number
  imageHeigth?: number
}

const featureConfig: Card[] = [
  {
    title: 'Инновационная технология',
    miniText: 'Наш секрет в использовании инновационной технологии сейсмоизоляции «МИКС – Стандарт СП», разработанной для строительства безопасных\
      и долговечных зданий в сейсмоопасных регионах.\nТехнология, сформированная за счет совокупного применения трубобетонных\
      сейсмоизолирующих опор и сейсмостойкого сборно-монолитного железобетонного рамно-связевого каркаса.',
    text: 'Представляем вам революционное решение для строительства в сейсмоопасных регионах – систему «МИКС – Стандарт СП». Эта инновационная технология представляет собой комплексный подход, сочетающий передовые разработки в области сейсмоизоляции с проверенными конструктивными решениями и высококачественным производством.  «МИКС – Стандарт СП» — это результат многолетних исследований и опыта, созданный для обеспечения максимальной безопасности и долговечности ваших зданий.  Мы предлагаем не просто строить, а создавать надежное и долговечное будущее, где каждый объект будет спроектирован с учетом всех аспектов – от фундамента до крыши.',
    contentType: 'video',
    src: "https://rutube.ru/play/embed/eadc4ac1f726f87dae9d87b7c4d99d64/",
    imageWidth: 600,
    imageHeigth: 90
  },
  {
    title: 'Динамичные опоры',
    miniText: 'Эти специальные опоры, разработанные на основе патента №RU2477353 C1, устанавливаются между фундаментом и зданием,\
      играя роль амортизаторов. \nОни поглощают энергию землетрясения, позволяя зданию плавно качаться и значительно снижая нагрузку\
      на несущие конструкции. \nБлагодаря трубобетонным опорам, ваше здание выдержит даже самые сильные толчки, сохраняя жизни и имущество в безопасности.',
    text: 'В основе системы «МИКС – Стандарт СП» лежит инновационная «Комплексная система сейсмической изоляции здания» с кинематическим принципом действия. Ключевым элементом этой системы являются «трубобетонные сейсмоизолирующие опоры», разработанные на основе патента №RU2477353 C1.  Эти опоры устанавливаются между фундаментом (или одним из нижних перекрытий) и остальной частью здания, выполняя роль мощных динамических амортизаторов. Принцип их работы основан на эффективном поглощении энергии землетрясения, позволяя зданию совершать плавные колебания, а не испытывать разрушительные нагрузки. До достижения порогового значения воздействия, пояс работает как жесткая конструкция. При превышении этого значения, опоры активируются, разделяя здание на изолированный объем и нижнюю часть. Благодаря этому, снижаются горизонтальные динамические воздействия от ускорений, что минимизирует повреждения в здании и повышает безопасность людей. Благодаря особой конструкции,  обеспечивается эффективность даже при сильных землетрясениях.  Использование  дополнительных демпфирующих приспособлений позволяет увеличить степень рассеивания энергии и сократить время затухания колебаний. "Многоразовость",  «Пороговая включаемость»,  «Нелинейность жесткости в горизонтальной плоскости»  и  «Экономичность» - вот основные преимущества нашей системы, обеспечивающие надежность и долговечность зданий в сейсмически активных регионах.',
    contentType: 'image',
    src: './column2.jpg',
    imageWidth: 600,
    imageHeigth: 80
  },
  {
    title: 'Сейсмостойкий каркас',
    miniText: 'Наш железобетонный каркас, разработанный на основе патента №RU 190607U1 предназначен для строительства в сейсмически\
      опасных районов.\n Он сочетает в себе прочность сборных элементов и гибкость монолитного строительства. Благодаря продуманной\
      конструкции и использованию передовых технологий, каркас рамно-связевой(РАСК) обеспечивает устойчивость здания к землетрясениям,\
      гарантируя безопасность и долговечность.',
    text: 'Для обеспечения максимальной надежности и устойчивости зданий в сейсмоопасных районах, мы используем сейсмостойкий железобетонный каркас РАСК (С), разработанный на основе патента №RU 190607U1. Этот каркас представляет собой сборно-монолитную конструкцию, сочетающую в себе преимущества сборных элементов и монолитного строительства.  Использование сборного железобетона дает ряд неоспоримых преимуществ. Прежде всего, это более высокое качество материалов и контроль качества на каждом этапе производства.  Также, сборные элементы позволяют значительно сократить сроки строительства за счет ускоренного монтажа. Еще одним важным преимуществом является снижение трудозатрат на строительной площадке.  Благодаря простоте установки и использованию современных технологий, сборный железобетон становится более экономичным решением, особенно для крупномасштабных и типовых проектов.  Заводское изготовление элементов также обеспечивает большую независимость от погодных условий, что позволяет строить круглый год.  Сейсмостойкий каркас, изготовленный с использованием сборного железобетона, гарантирует прочность, надежность и долговечность здания, обеспечивая безопасность его обитателей и сохранность имущества.',
    contentType: 'image',
    src: './rask2.jpg',
    imageWidth: 600,
    imageHeigth: 40
  },
]

export const Features = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setModalOpen] = useState<boolean[]>(featureConfig.map(() => false));

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = (index: number) => {
    const newModalOpen = [...isModalOpen];
    newModalOpen[index] = true;
    setModalOpen(newModalOpen);
  };

  const closeModal = (index: number) => {
    const newModalOpen = [...isModalOpen];
    newModalOpen[index] = false;
    setModalOpen(newModalOpen);
  };

  return (
    <div id="features" className="w-full mt-25 md:mt-35 container mx-auto px-5 text-primary-dark-blue/87">
      <h2 className="text-4xl/10 text-center font-light tracking-[1px]
        sm:tracking-[7px] sm:[word-spacing:10px]
      ">
        <AnimatedBox animationType='slideInUp'>
          В чем наш секрет?
        </AnimatedBox>
      </h2>

      {isMobile ? (
        <CardListMobile
          config={featureConfig}
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
      ) : (
        <CardListDesktop
          config={featureConfig}
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

interface CardList {
  config: Card[],
  isModalOpen: boolean[]
  openModal: (index: number) => void,
  closeModal: (index: number) => void,
}

const CardListMobile = ({ config, isModalOpen, openModal, closeModal }: CardList) => {
  return (
    <div className="flex flex-col gap-15 mt-10">
      {config.map((element, i) => (
        <div key={element.src} className="flex flex-col ">
          <div className="flex flex-col gap-5">

            <AnimatedBox animationType='slideInUp'>
              <h2 className="text-[30px] sm:text-4xl font-black">
                {i + 1 + ". " + element.title}
              </h2>
            </AnimatedBox>

            <AnimatedBox animationType='slideInUp' className={`relative min-h-${element.imageHeigth} flex justify-center`}>
              {element.contentType === 'image' && (
                <Image src={element.src} alt='' width={element.imageWidth} height={element.imageWidth} style={{objectFit:"contain"}}/>
              )}
              {element.contentType === 'video' && (
                <iframe
                  className="absolute left-0 top-0 right-0 bottom-0 w-full h-full"
                  src={element.src}
                  allow="clipboard-write; autoplay"
                  allowFullScreen
                  title={element.title}
                />
              )}
            </AnimatedBox>

            <AnimatedBox animationType='slideInUp'>
              <p className="font-light whitespace-pre-line">{element.miniText}</p>
            </AnimatedBox>

            <AnimatedBox animationType='slideInUp'>
              <Button onClick={() => openModal(i)}>Подробнее</Button>
            </AnimatedBox>
          </div>

          <Modal
            isOpen={isModalOpen[i]}
            onClose={() => closeModal(i)}
            title={element.title}
            text={element.text}
            contentType={element.contentType}
            src={element.src}
            imageWidth={element.imageWidth}
          />
        </div>
      ))}
    </div>
  );
};

const CardListDesktop = ({ config, isModalOpen, openModal, closeModal }: CardList) => {
  return (
    <div className="flex flex-col gap-y-10 mt-25">
      {config.map((element: Card, i: number) =>
        <div key={element.src}>
          {
            i % 2 === 0 ?
              <div className="flex gap-x-10 min-h-110
                xl:min-h-130
              ">
                <AnimatedBox animationType='slideInLeft' className="flex-1 flex flex-col gap-y-5">
                  <h2 className="text-4xl font-black tracking-normal">{i + 1 + ". " + element.title}</h2>
                  <p className="text-lg/7 text-justify font-light whitespace-pre-line
                    xl:text-xl/9 
                  ">{element.miniText}</p>
                  <Button onClick={() => openModal(i)}>Подробнее</Button>
                </AnimatedBox>

                <AnimatedBox animationType='slideInRight' className="flex-1 relative min-h-90 flex justify-center items-start">
                  {element.contentType == 'image' && 
                    <Image src={element.src} alt='' width={element.imageWidth} height={element.imageWidth} style={{objectFit:"contain"}}/>
                  }
                  {element.contentType == 'video' &&
                    <iframe className="absolute left-0 top-0 right-0 bottom-0 size-full"
                      src={element.src}
                      allow="clipboard-write; autoplay"
                      allowFullScreen>
                    </iframe>
                  }
                </AnimatedBox>

                <Modal
                  isOpen={isModalOpen[i]}
                  onClose={() => closeModal(i)}
                  title={element.title}
                  text={element.text}
                  contentType={element.contentType}
                  src={element.src}
                  imageWidth={element.imageWidth}
                  animation="showRight"
                />
              </div>
              :
              <div className="flex gap-x-10 min-h-110 
                xl:min-h-130
              ">
                <AnimatedBox animationType='slideInLeft' className="flex-1 relative min-h-90 flex justify-center">
                  {element.contentType == 'image' && 
                    <Image src={element.src} alt='' width={element.imageWidth} height={element.imageWidth} style={{objectFit:"contain"}}/>
                  }
                  {element.contentType == 'video' &&
                    <iframe className="absolute left-0 top-0 right-0 bottom-0 size-full"
                      src={element.src}
                      allow="clipboard-write; autoplay"
                      allowFullScreen>
                    </iframe>
                  }
                </AnimatedBox>

                <AnimatedBox animationType='slideInRight' className="flex-1 flex flex-col gap-y-5">
                  <h2 className="text-4xl font-black">{i + 1 + ". " + element.title}</h2>
                  <p className="text-lg/7 text-justify font-light whitespace-pre-line
                    xl:text-xl/9 
                  ">{element.miniText}</p>
                  <Button onClick={() => openModal(i)}>Подробнее</Button>
                </AnimatedBox>

                <Modal
                  isOpen={isModalOpen[i]}
                  onClose={() => closeModal(i)}
                  title={element.title}
                  text={element.text}
                  contentType={element.contentType}
                  src={element.src}
                  imageWidth={element.imageWidth}
                  animation="showLeft"
                />
              </div>
          }
        </div>
      )}
    </div>
  )
}