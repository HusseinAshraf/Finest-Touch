import React from "react";
import UnderlineSkew from "../Ui/UnderlineSkew ";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import {
  FaPhone,
  FaFax,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const locations = [
    {
      country: t("Saudi Arabia"),
      address: t("Riyadh, P.O.Box 305666-Riyadh 11361"),
    },
    { country: t("UAE"), address: t("Dubai, Business Bay") },
    { country: t("Egypt"), address: t("Cairo, Dokki") },
    { country: t("Qatar"), address: t("Doha, West Bay") },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-12">
          <div className="relative inline-block">
            <h1 className="text-5xl font-extrabold text-gray-900 relative z-10">
              {t("contactTitle")}
            </h1>
            <div className="absolute left-0 w-full">
              <UnderlineSkew />
            </div>
          </div>
          <p className="text-gray-600 mt-4 text-lg">
            {t("contactDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div
            className={`text-${
              isArabic ? "right" : "left"
            } order-last md:order-first space-y-6 md:space-y-8`}
          >
            <div className="mt-4 bg-white p-8 rounded-2xl shadow-lg">
              <div className="relative inline-block">
                <h3 className="text-2xl font-semibold">{t("getInTouch")}</h3>
                <div className="absolute left-0 w-full">
                  <UnderlineSkew />
                </div>
              </div>

              <p className="text-gray-700 mt-5">{t("contactMessage")}</p>

              <div className="text-gray-600 text-lg space-y-4 mt-7">
                <p>
                  <FaPhone className="inline-block text-blue-600 text-2xl mr-2" />
                  +966 56 766 3000
                </p>

                <p>
                  <FaPhone className="inline-block text-blue-600 text-2xl mr-2" />
                  +966 11 464 9777
                </p>

                <p>
                  <FaFax className="inline-block text-blue-600 text-2xl mr-2" />
                  +966 11 203 3735
                </p>

                <p>
                  <FaEnvelope className="inline-block text-blue-600 text-2xl mr-2" />
                  info@finesttouch.com.sa
                </p>

                <p>
                  <FaGlobe className="inline-block text-blue-600 text-2xl mr-2" />
                  www.finesttouch.com.sa
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="relative inline-block mb-4">
                <h3 className="text-2xl font-semibold ">
                  {t("ourLocations")}{" "}
                </h3>
                <div className="absolute left-0 w-full">
                  <UnderlineSkew />
                </div>
              </div>

              <ul className="space-y-3">
                {locations.map((location, index) => (
                  <li key={index} className="text-gray-700 flex items-center">
                    <FaMapMarkerAlt className="text-red-500 text-xl mr-2" />
                    <span>
                      {location.country}: {location.address}{" "}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
            <div className="w-full h-64 bg-gray-300 rounded-2xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.805544476632!2d31.2039079!3d30.0505177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840b5b5b5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2zMzDCsDAzJzAxLjkiTiAzMcKwMTInMTQuMSJF!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <form className="bg-white p-8 shadow-xl rounded-2xl space-y-6">
              <div>
                <label
                  className={`block text-gray-700 text-${
                    isArabic ? "right" : "left"
                  } font-medium`}
                >
                  {t("name")}
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder={t("namePlaceholder")}
                  required
                />
              </div>
              <div>
                <label
                  className={`block text-gray-700 text-${
                    isArabic ? "right" : "left"
                  } font-medium`}
                >
                  {t("email")}
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder={t("emailPlaceholder")}
                  required
                />
              </div>
              <div>
                <label
                  className={`block text-gray-700 text-${
                    isArabic ? "right" : "left"
                  } font-medium`}
                >
                  {t("message")}
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows="4"
                  placeholder={t("messagePlaceholder")}
                  required
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow-md">
                {t("sendMessage")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
