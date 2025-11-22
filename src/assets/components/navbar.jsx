import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 flex items-center justify-around z-999 py-5 lg:px-10 px-5 backdrop-blur-md">
      <img
        src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66d2ed2937b0c44d925aebbd_webee3.svg"
        alt=""
        className="md:w-50 w-40"
      />

      {/* NAV ITEMS WRAPPER */}
      <div className="hidden md:flex items-center gap-6">
        <span className="text-lg text-amber-400">Home</span>
        <span className="text-lg">About</span>
        <NavigationMenu>
          <ul>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white text-lg focus:bg-transparent">
                Pages
              </NavigationMenuTrigger>
              <NavigationMenuContent className=" bg-[#111] border border-[#111] text-white">
                <ul className="grid w-[200px] gap-4 p-4  rounded-md ">
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">Home</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">About</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a href="#">Feature</a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </ul>
        </NavigationMenu>

        <span className="text-lg">Pricing</span>
        <span className="py-3 px-5 rounded-full border text-lg border-gradient">
          CONTACT →
        </span>
      </div>

      {/* MOBILE MENU */}
      <ul
        className={` md:hidden fixed left-0 w-full flex flex-col gap-5 items-center justify-start pt-10 transition-all duration-500 bg-black/95 backdrop-blur-lg z-50
            ${
              open
                ? "top-20 opacity-100 h-[calc(100vh-80px)]"
                : "-top-[500px] opacity-0"
            }
        `}
      >
        {/* HOME */}
        <span className="text-lg">Home</span>

        {/* ABOUT */}
        <span className="text-lg">About</span>

        {/* PAGES DROPDOWN (ACCORDION) */}
        <details className="w-full max-w-[200px] text-center">
          <summary className="cursor-pointer text-lg">Pages</summary>
          <ul className="flex flex-col gap-3 mt-3  pl-15 rounded-md">
            <li>
              <a href="#" className="block">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block">
                Feature
              </a>
            </li>
          </ul>
        </details>

        {/* PRICING */}
        <span className="text-lg">Pricing</span>

        {/* CONTACT BUTTON */}
        <button className="py-3 px-5 rounded-full border text-lg">
          CONTACT
        </button>
      </ul>

      <div
        className="text-amber-400 md:hidden w-fit "
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-menu-button"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z" />
          <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
