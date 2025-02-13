import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";
import videoSrc from "../../assets/img/video/finest video.mp4";
import imgSrc from "../../assets/img/Artboard 1.png";

import UnderlineSkew from "../Ui/UnderlineSkew ";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Home() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section
      id="home"
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full flex flex-col items-center text-center px-4 sm:px-6 lg:px-12 mt-28 md:mt-2"
    >
      <div className="min-h-screen mx-auto flex items-center justify-center bg-white px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl flex  flex-wrap md:flex-nowrap items-center">
          <div
            className={`w-full md:w-1/2 space-y-8 ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <div className="relative inline-block">
              <h1 className="text-5xl font-extrabold text-gray-900 relative z-10">
                {t("finestTouch")}
              </h1>
              <div
                className={`absolute ${isArabic ? "right-0" : "left-0"} w-full`}
              >
                <UnderlineSkew />
              </div>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {t("homeDescription")}
            </p>
            <div
              className={`flex md:flex-wrap justify-center ${
                isArabic ? "md:justify-end" : "md:justify-start"
              } space-x-4`}
            >
              <Link
                to="about"
                smooth={true}
                duration={1500}
                offset={-50}
                className="cursor-pointer relative group bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-500 transition-all flex items-center gap-2 transform hover:scale-105"
              >
                {t("discoverMore")}
                <FaChevronDown className="text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300" />
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={1500}
                offset={-50}
                className="relative group cursor-pointer bg-blue-300 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition-all flex items-center gap-2 transform hover:scale-105"
              >
                {t("contactUs")}
                <FaChevronDown className="text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300" />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img src={imgSrc} alt="Logo Finest Touch" className="w-full" />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center pb-5">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          controls
          className="w-full max-w-3xl h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

export default Home;
