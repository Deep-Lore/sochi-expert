'use client'

import Image from 'next/image';

import { HamburgerMenu } from "./HamburgerMenu";
import { Phone } from "lucide-react";
import { useState, useLayoutEffect, Dispatch, SetStateAction } from 'react';
import { ScrollLink } from '@/shared/ScrollLink';

export interface ILinks {
  text: string,
  id: string
}

const links: ILinks[] = [
  { text: 'О нас', id: 'about' },
  { text: 'Технология', id: 'features' },
  { text: 'Проекты', id: 'projects' },
  { text: 'FAQ', id: 'faq' }
];

export const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className={`fixed z-10 top-0 h-20 lg:h-25 w-full border-b border-white/25 transition-all duration-500
      ${isScroll || isOpen ? 'bg-primary-blue backdrop-blur-xs' : 'bg-transparent'}`
    }>
      <div className='border-b border-black/25 h-full'>
        <HeaderMobile className='block lg:hidden' isOpen={isOpen} setOpen={setOpen} />
        <HeaderDesktop className='hidden lg:grid' />
      </div>
    </header>
  );
};

interface IHeaderMobile {
  isOpen: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
  className?: string
}

function HeaderMobile({ isOpen, setOpen, className }: IHeaderMobile) {
  return (
    <div className={`container mx-auto px-2 size-full flex justify-between items-center sm:px-5 ${className}`}>
      <ScrollLink id='hero' className="flex items-center gap-2 cursor-pointer">
        <Image
          src="./logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="bg-cover bg-center"
        />
        <h2 className="text-2xl font-bold">
          Сейсмоизоляция
        </h2>
      </ScrollLink>
      <HamburgerMenu links={links} isOpen={isOpen} setOpen={setOpen} />
    </div>
  )
}

function HeaderDesktop({ className }: { className: string }) {
  return (
    <div className={`container mx-auto px-5 size-full grid-cols-12 ${className}`}>
      <ScrollLink id='hero' className='col-span-5 flex items-center gap-4 cursor-pointer'>
        <Image
          src="./logo.png"
          alt="Logo"
          width={56}
          height={56}
          className="bg-cover bg-center"
        />
        <h2 className="text-3xl font-bold">
          Сейсмоизоляция
        </h2>
      </ScrollLink>

      <nav className="col-span-5 px-2 flex items-center xl:ml-5">
        <ul className="flex w-full justify-around">
          {links.map(link => (
            <ScrollLink key={link.text} id={link.id}>
              <li className="text-lg xl:text-xl font-semibold cursor-pointer hover:text-primary-orange transition-colors">
                {link.text}
              </li>
            </ScrollLink>
          ))}
        </ul>
        <div className="h-8 flex xl:hidden">
          <div className="border-l border-white/25" />
          <div className="border-l border-black/25" />
        </div>
      </nav>

      <PhoneComponent />
    </div>
  )
}

const PhoneComponent = () => {
  const [isCopied, setIsCopied] = useState(false);
  const phoneNumber = '8-928-850-82-19';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="col-span-2 flex justify-end items-center xl:col-span-2">
      <p
        className="cursor-pointer flex gap-1 items-center"
        onClick={copyToClipboard}
        title={isCopied ? "Номер скопирован!" : "Нажмите, чтобы скопировать"} 
      >
        <Phone size={21} strokeWidth={3} />
        <span className='border-b border-dashed border-primary-orange/100 text-lg tracking-normal font-semibold xl:text-xl'>
          {phoneNumber}
        </span>
      </p>
    </div>
  );
}