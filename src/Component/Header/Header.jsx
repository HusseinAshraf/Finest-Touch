import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/img/logo.png";
import LanguageSwitch from "../Ui/LanguageSwitch";

const NavLink = ({ id, label, activeSection, onClick }) => (
  <li className="relative">
    <a
      href={`#${id}`}
      onClick={(e) => onClick(e, id)}
      className={`block py-2 px-4 rounded-md md:p-0 transition-all duration-300 font-medium relative
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:transition-all after:duration-300
        ${
          activeSection === id
            ? "text-[#0057a3] after:bg-[#0057a3] after:scale-x-100"
            : "text-[#0057a3] hover:text-[#003f7f] after:bg-[#003f7f] after:scale-x-0 hover:after:scale-x-100"
        }`}
    >
      {label}
    </a>
  </li>
);

function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const NAV_LINKS = [
    { id: "home", label: t("home") },
    { id: "about", label: t("about") },
    { id: "services", label: t("services") },
    { id: "projects", label: t("projects") },
    { id: "contact", label: t("contact") },
  ];

  const handleScroll = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `#${id}`);
    setActiveSection(id);
    setIsOpen(false); // إغلاق القائمة بعد الضغط على عنصر
  };

  useEffect(() => {
    setActiveSection(window.location.hash.substring(1));

    const handleScrollEvent = () => {
      for (const { id } of NAV_LINKS) {
        const element = document.getElementById(id);
        if (
          element &&
          element.getBoundingClientRect().top >= 0 &&
          element.getBoundingClientRect().top < window.innerHeight / 2
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* الشعار */}
        <a
          onClick={(e) => handleScroll(e, "home")}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <img src={logo} className="h-16 w-auto" alt="Logo" />
        </a>

        {/* زر التبديل (Toggle) للجوال */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#0057a3] hover:text-[#003f7f] focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* قائمة التنقل */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
        >
          <div className="md:flex items-center gap-4 ">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8  md:flex-row md:mt-0 md:border-0">
            {NAV_LINKS.map(({ id, label }) => (
              <NavLink
                key={id}
                id={id}
                label={label}
                activeSection={activeSection}
                onClick={handleScroll}
              />
            ))}
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
