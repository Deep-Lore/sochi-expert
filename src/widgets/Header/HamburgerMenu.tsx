'use client'

import { MouseEvent } from "react";
import { Phone, Type } from "lucide-react";
import { Squash as Hamburger } from "hamburger-react";
import { ScrollLink } from "@/shared/ScrollLink";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

export interface ILinks {
  text: string,
  id: string
}

export const HamburgerMenu = ({ links, isOpen, setOpen }: { links: ILinks[], isOpen: boolean, setOpen: any }) => {
  const [isMounted, setIsMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    const handleClickOutside = (event: globalThis.MouseEvent) => {
      const target = event.target as Node;

      if (
        menuRef.current && !menuRef.current.contains(target) &&
        hamburgerRef.current && !hamburgerRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);

  if (!isMounted) return null;

  const handleMenuItemClick = () => setOpen(false)

  return (
    <>
      <div className="relative z-1" ref={hamburgerRef}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>
      {createPortal(
        <div
          className={`fixed left-[40%] right-0 bottom-0 h-full z-10 top-20 overflow-hidden bg-primary-blue duration-500 p-5 backdrop-blur-xs
            md:left-[60%]
            transition-all ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
          ref={menuRef}
        >
          <ul className="flex flex-col justify-between items-start gap-3 mt-2">
            {links.map(link => (
              <ScrollLink key={link.id} id={link.id}>
                <li
                  className="text-xl font-semibold cursor-pointer text-shadow-2xs hover:text-primary-orange"
                  onClick={handleMenuItemClick}
                >
                  {link.text}
                </li>
              </ScrollLink>
            ))}
            <li className="cursor-pointer flex gap-2 items-center mt-5">
              <Phone size={21} strokeWidth={3} />
              <span className='border-b border-dashed border-primary-orange/100 text-xl font-semibold'>8-928-850-82-19</span>
            </li>
          </ul>
        </div>,
        document.body)}
    </>
  );
};