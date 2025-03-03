import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import imgSrc from "../../assets/img/Artboard 1.png";

import UnderlineSkew from "../Ui/UnderlineSkew ";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Hero() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section
      id="hero"
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full flex flex-col items-center text-center px-4 sm:px-6 lg:px-12 mt-28 md:mt-2"
    >
      <div className="min-h-screen mx-auto flex items-center justify-center bg-white px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl flex flex-wrap md:flex-nowrap items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to="about"
                  smooth={true}
                  duration={1500}
                  offset={-50}
                  className="cursor-pointer relative group bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-500 transition-all flex items-center gap-2"
                >
                  {t("discoverMore")}
                  <FaChevronDown className="text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to="contact"
                  smooth={true}
                  duration={1500}
                  offset={-50}
                  className="relative group cursor-pointer bg-blue-300 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition-all flex items-center gap-2"
                >
                  {t("contactUs")}
                  <FaChevronDown className="text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
          >
            <img src={imgSrc} alt="Logo Finest Touch" className="w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
