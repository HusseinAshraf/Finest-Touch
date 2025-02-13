import React from "react";
import { FaGlobe, FaUsers, FaLightbulb } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import UnderlineSkew from "../Ui/UnderlineSkew ";


const About = () => {
  const { t } = useTranslation();

  const data = [
    {
      icon: <FaGlobe className="text-blue-600 text-6xl mx-auto mb-4" />, 
      title: t("missionTitle"),
      description: t("missionDesc")
    },
    {
      icon: <FaUsers className="text-green-600 text-6xl mx-auto mb-4" />,
      title: t("teamTitle"),
      description: t("teamDesc")
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-6xl mx-auto mb-4" />,
      title: t("visionTitle"),
      description: t("visionDesc")
    }
  ];

  return (
    <section id="about" className="bg-gray-100 py-16 rtl text-right">
      <div className="max-w-6xl mx-auto text-center px-6">
        <div className="relative inline-block mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 relative z-10">
            {t("title")}
          </h1>
          <div className="absolute right-0 w-full">
            <UnderlineSkew />
          </div>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {t("subtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center transform hover:-translate-y-2"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-3 text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
