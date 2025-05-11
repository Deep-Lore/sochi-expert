'use client'

import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, ArrowRight } from "lucide-react";

interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string;
  contentType: 'video' | 'image'
  src: string;
  imageWidth?: number;
  animation?: 'showLeft' | 'showRight'
}


export const Modal = ({ children, isOpen, onClose, title, text, src, imageWidth, animation = 'showRight', contentType }: ModalProps) => {
  const transitionStartPosition = animation == 'showLeft' ? '-translate-x-full' : animation == 'showRight' ? 'translate-x-full' : ''

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen]);

  if (!isMounted) return null;

  const closeModal = (e: React.MouseEvent) => {
    e.target === e.currentTarget && onClose();
  }

  return createPortal(
    <div
      className={`fixed top-0 left-0 size-full z-50
        lg:p-10 lg:bg-primary-dark-blue/80
        transition-transform lg:transition-opacity duration-400 lg:backdrop-blur-sm
        ${isOpen ? 'translate-x-0 lg:opacity-100' : `${transitionStartPosition} lg:opacity-0`}`
      }
      onClick={closeModal}
    >
      <div className={`flex flex-col h-full lg:container mx-auto lg:px-5 lg:transition-transform duration-400
        ${isOpen ? 'translate-x-0 lg:scale-100' : `${transitionStartPosition} lg:scale-50`}`
      }>
        <div className="h-25 px-5 flex-shrink-0 bg-primary-dark-blue border-b border-black/25 shadow-2xs shadow-white/25 z-1">
          <div className="h-full flex justify-between items-center gap-5">
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="flex items-center cursor-pointer group" onClick={onClose}>
              <p className="text-sm group-hover:text-white uppercase">Закрыть</p>
              <ArrowRight size={36} className="transition-colors text-red-500/70 group-hover:text-red-500 block lg:hidden" />
              <X size={36} className="transition-colors text-red-500/70 group-hover:text-red-500 hidden lg:block" />
            </div>
          </div>
        </div>

        <div className="h-full px-5 bg-primary-dark-blue lg:bg-primary-dark-blue/87 overflow-auto">
          <div className="flex flex-col">
            <div className="flex-1">
              <div className={`relative min-h-90 flex justify-center mt-5`}>
                {src && contentType == 'image' && <Image src={src} alt='' objectFit='contain' height={imageWidth} width={imageWidth} className="mx-auto" />}
                {src && contentType == 'video' &&
                  <iframe
                    className="absolute left-0 top-0 right-0 bottom-0 w-full h-full"
                    src={src}
                    allow="clipboard-write; autoplay"
                    allowFullScreen>
                  </iframe>
                }
              </div>
              <p className="mt-5 text-justify">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};