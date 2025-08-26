import React, { useState } from 'react';
import GooeyNav from './reactbits/gooeynav/GooeyNav';
import logo from '/Logo3D.png';
import { IoMenu, IoClose } from "react-icons/io5";

const items = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experiences", href: "#experiences" },
  { label: "Contacts", href: "#contacts" },
];

const GooeyNavWrapper = () => (
  <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <div className="backdrop-blur-sm h-24 w-full flex justify-center items-center fixed top-0 z-50">
        <div className="w-full flex justify-between items-center xxs:px-4 lg:px-24 transition-all duration-300">

          {/* Logo */}
          <div className="flex justify-center items-center gap-2">
            <img src={logo} alt="Logo" className="size-10 bg-[#00BD95] rounded-lg" />
            <h1 className="text-3xl font-semibold text-[#00BD95]">Portfolio</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <GooeyNavWrapper />
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="block lg:hidden">
            <IoMenu
              className="text-3xl cursor-pointer hover:scale-125 text-[#00BD95]"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Modal (separate from header) */}
      {isOpen && (
        <div className="pt-24 fixed inset-0 bg-black/80 bg-opacity-70 flex justify-center items-center z-[999] lg:hidden"
          onClick={() => setIsOpen(false)}>
            <nav className="flex flex-col items-center">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="m-1 text-xl text-gray-300 hover:text-[#00BD95] transition-transform duration-300 cursor-pointer hover:scale-105"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          
        </div>
      )}
    </>
  );
};

export default Header;
