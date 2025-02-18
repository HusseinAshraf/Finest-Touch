import React from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-scroll";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSnapchat,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Footer() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid gap-10 row-gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 w-full">
            <Link
              to="home"
              smooth={true}
              duration={1500}
              offset={-50}
              className="inline-flex items-center w-full"
            >
              <img src={logo} className="h-16 w-auto" alt="Logo" />
            </Link>
            <p className="mt-4 text-sm">{t("footerDescription")}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-white">{t("contactUs")}</p>
            <div
              className={`mt-3 space-y-2 text-${isArabic ? "right" : "left"}`}
            >
              <p>
                <span className="font-medium">{t("phone")}:</span>{" "}
                <a href="tel:850-123-5021" className="hover:text-blue-400">
                  850-123-5021
                </a>
              </p>
              <p>
                <span className="font-medium">{t("email")}:</span>{" "}
                <a
                  href="mailto:info@lorem.mail"
                  className="hover:text-blue-400"
                >
                  info@lorem.mail
                </a>
              </p>
              <p>
                <span className="font-medium">{t("address")}:</span>{" "}
                <a
                  href="https://maps.app.goo.gl/9mUYVJmqLgcUuJox5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  
                  {t('location')}
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold text-white">{t("followUs")}</p>
            <div className="flex space-x-4 mt-3">
              <a href="/" className="text-gray-400 hover:text-blue-400 text-xl">
                <FaFacebookF />
              </a>
              <a href="/" className="text-gray-400 hover:text-blue-400 text-xl">
                <FaTwitter />
              </a>
              <a href="/" className="text-gray-400 hover:text-blue-400 text-xl">
                <FaInstagram />
              </a>
              <a href="/" className="text-gray-400 hover:text-blue-400 text-xl">
                <FaSnapchat />
              </a>
              <a href="/" className="text-gray-400 hover:text-blue-400 text-xl">
                <FaYoutube />
              </a>
              <a href="/" className="text-gray-400 hover:text-blue-400 text-xl">
                <FaTiktok />
              </a>
              <a href="/" className="text-gray-400 hover:text-blue-400 text-xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 mt-6 border-t border-gray-700 lg:flex-row">
          <p className="text-sm">© 2025 Finest Touch. {t("allRightsReserved")}</p>
          <ul className="flex space-x-5 text-sm">
            <li>
              <a href="/" className="hover:text-blue-400">
                {t("faq")}
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-400">
                {t("privacyPolicy")}
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-400">
                {t("termsConditions")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
