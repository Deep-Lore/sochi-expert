import { Phone, Mail } from "lucide-react";
import React, { ReactNode } from "react";
import { FaTelegramPlane, FaYoutube, FaWhatsapp } from "react-icons/fa";

type link = {
  name: string
  href: string
  icon: ReactNode
}

const links: link[] = [
  {
    name: 'Telegram',
    href: "https://t.me/seismicisolations",
    icon: <FaTelegramPlane size={30} />
  },
  {
    name: 'Rutube',
    href: "https://rutube.ru/channel/47915234/",
    icon: <FaYoutube size={30} />
  },
  {
    name: 'Whatsapp',
    href: "https://wa.me/79288508219",
    icon: <FaWhatsapp size={30} />
  }
]

export const Footer = () => {
  return (
    <div className="w-full py-15  px-5 bg-primary-dark-blue text-xl transition-colors">
      <div className="container mx-auto flex flex-col gap-5
        md:flex-row
      ">
        <div className="flex-1 cursor-pointer flex justify-center items-center gap-2 hover:text-white">
          <Phone size={21} strokeWidth={2} />
          <p>8-928-850-82-19</p>
        </div>
        <div className="flex-1 cursor-pointer flex justify-center items-center gap-2 hover:text-white">
          <Mail size={21} strokeWidth={2} />
          <p>sochi_expert_project@mail.ru</p>
        </div>
        <div className="flex-1 flex justify-center items-center gap-2">
          {links.map((link) =>
            <div className="rounded-full size-12 bg-white/5  hover:bg-white/10 cursor-pointer flex justify-center items-center" key={link.name}>
              <a href={link.href} target="_blank">
                {link.icon}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};