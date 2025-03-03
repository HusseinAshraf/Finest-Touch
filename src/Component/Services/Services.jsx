import React from "react";
import {
  FaCalendarAlt,
  FaUsers,
  FaLightbulb,
  FaMusic,
  FaBriefcase,
  FaHandshake,
  FaTools,
  FaPenFancy,
  FaBus,
  FaUtensils,
  FaHotel,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import UnderlineSkew from "../Ui/UnderlineSkew ";

const Services = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      icon: <FaCalendarAlt className="text-blue-600 text-6xl mx-auto mb-4" />,
      title: t("corporateTitle"),
      description: t("corporateDesc"),
    },
    {
      icon: <FaMusic className="text-green-600 text-6xl mx-auto mb-4" />,
      title: t("concertsTitle"),
      description: t("concertsDesc"),
    },
    {
      icon: <FaUsers className="text-purple-600 text-6xl mx-auto mb-4" />,
      title: t("privateTitle"),
      description: t("privateDesc"),
    },
    {
      icon: <FaBriefcase className="text-red-600 text-6xl mx-auto mb-4" />,
      title: t("exhibitionsTitle"),
      description: t("exhibitionsDesc"),
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-6xl mx-auto mb-4" />,
      title: t("creativeTitle"),
      description: t("creativeDesc"),
    },
    {
      icon: <FaHandshake className="text-indigo-600 text-6xl mx-auto mb-4" />,
      title: t("partnershipTitle"),
      description: t("partnershipDesc"),
    },
    {
      icon: <FaTools className="text-gray-600 text-6xl mx-auto mb-4" />,
      title: t("eventSetupTitle"),
      description: t("eventSetupDesc"),
    },
    {
      icon: <FaPenFancy className="text-orange-600 text-6xl mx-auto mb-4" />,
      title: t("creativeDesignTitle"),
      description: t("creativeDesignDesc"),
    },
    {
      icon: <FaBus className="text-blue-400 text-6xl mx-auto mb-4" />,
      title: t("transportationTitle"),
      description: t("transportationDesc"),
    },
    {
      icon: <FaUtensils className="text-green-500 text-6xl mx-auto mb-4" />,
      title: t("hospitalityTitle"),
      description: t("hospitalityDesc"),
    },
    {
      icon: <FaHotel className="text-brown-500 text-6xl mx-auto mb-4" />,
      title: t("accommodationTitle"),
      description: t("accommodationDesc"),
    },
  ];

  return (
    <section id="services" className="bg-white py-16 rtl text-right">
      <div className="max-w-6xl mx-auto text-center px-6">
        <div className="relative inline-block mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 relative z-10">
            {t("titleServices")}
          </h1>
          <div className="absolute right-0 w-full">
            <UnderlineSkew />
          </div>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {t("subtitleServices")}
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center transform hover:-translate-y-2"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-3 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
