import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import logo from "../../assets/img/logo.png";
import LanguageSwitch from "../Ui/LanguageSwitch";

function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <img src={logo} className="h-16 w-auto" alt="Logo" />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#0057a3] hover:text-[#003f7f] focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <div className="md:flex items-center gap-4 cursor-pointer">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
              <li className="relative">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  activeClass="after:scale-x-50"
                  className="block py-2 px-4 rounded-md text-[#0057a3] hover:text-[#003f7f] transition-all duration-300 
                    relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#003f7f] 
                    after:scale-x-0 after:transition-all after:duration-300 hover:after:scale-x-50"
                >
                  {t("home")}
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  activeClass="after:scale-x-50"
                  className="block py-2 px-4 rounded-md text-[#0057a3] hover:text-[#003f7f] transition-all duration-300 
                    relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#003f7f] 
                    after:scale-x-0 after:transition-all after:duration-300 hover:after:scale-x-50"
                >
                  {t("about")}
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  activeClass="after:scale-x-50"
                  className="block py-2 px-4 rounded-md text-[#0057a3] hover:text-[#003f7f] transition-all duration-300 
                    relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#003f7f] 
                    after:scale-x-0 after:transition-all after:duration-300 hover:after:scale-x-50"
                >
                  {t("services")}
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  activeClass="after:scale-x-50"
                  className="block py-2 px-4 rounded-md text-[#0057a3] hover:text-[#003f7f] transition-all duration-300 
                    relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#003f7f] 
                    after:scale-x-0 after:transition-all after:duration-300 hover:after:scale-x-50"
                >
                  {t("projects")}
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  activeClass="after:scale-x-50"
                  className="block py-2 px-4 rounded-md text-[#0057a3] hover:text-[#003f7f] transition-all duration-300 
                    relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#003f7f] 
                    after:scale-x-0 after:transition-all after:duration-300 hover:after:scale-x-50"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
            <div className="md:pt-0 pt-2">
              <LanguageSwitch />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
