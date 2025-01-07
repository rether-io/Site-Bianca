import React, { useState, useRef } from 'react';
import { enablePageScroll, disablePageScroll } from 'scroll-lock';
import { Menu } from 'lucide-react';
import Button from '../shared/Button';
import { useLocation } from 'react-router-dom';

// Design elements for visual interest
const Rings = () => (
  <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
    <div className="absolute top-1/2 left-1/2 w-[25.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[13rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  </div>
);

const Sidelines = () => (
  <>
    <div className="absolute top-0 right-7.5 w-0.25 h-full bg-n-6 pointer-events-none hidden lg:block"></div>
    <div className="absolute top-0 left-7.5 w-0.25 h-full bg-n-6 pointer-events-none hidden lg:block"></div>
  </>
);

const BackgroundCircles = () => (
  <div className="absolute top-0 left-1/4 w-full aspect-square bg-gradient-to-b from-n-1/15 to-n-1/5 rounded-full blur-3xl pointer-events-none"></div>
);

// Main Header component
const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const pathname = useLocation().pathname;
  const parallaxRef = useRef(null);

  const handleClick = () => {
    if (openNavigation) enablePageScroll();
    setOpenNavigation(false);
  };

  const toggleNavigation = () => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    } else {
      disablePageScroll();
      setOpenNavigation(true);
    }
  };

  const navigation = [
    { id: "0", title: "Recursos", url: "#features" },
    { id: "1", title: "Preços", url: "#pricing" },
    { id: "2", title: "Como Usar", url: "#how-to-use" },
    { id: "3", title: "Roadmap", url: "#roadmap" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 py-4 max-w-[96rem] mx-auto">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src="/logo.svg" width={190} height={40} alt="Bianca" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <a
          href="#signup"
          className="button hidden lg:block ml-auto text-n-1/50 transition-colors hover:text-n-1"
        >
          Nova Conta
        </a>

        <Button className="hidden lg:flex" href="#login">
          Entrar
        </Button>

        <button
          className="ml-auto lg:hidden"
          onClick={toggleNavigation}
        >
          <Menu className={openNavigation ? "text-n-1" : "text-n-1/50"} />
        </button>
      </div>

      <Rings />
      <Sidelines />
      <BackgroundCircles />
    </div>
  );
};

export default Header;