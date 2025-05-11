'use client'

import React from "react";

export const ScrollLink = ({ children, id, className }: { children: React.ReactNode, id: string, className?: string }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = rect.top + window.scrollY - 130;

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className={className}
      onClick={() => scrollToSection(id)}
    >
      {children}
    </div>
  )
}