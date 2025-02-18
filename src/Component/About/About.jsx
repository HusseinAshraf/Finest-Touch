import React from "react";
import { FaGlobe, FaUsers, FaLightbulb, FaVideo, FaHandshake, FaRing } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import UnderlineSkew from "../Ui/UnderlineSkew ";

const About = () => {
  const { t } = useTranslation();

  const data = [
    {
      icon: <FaVideo className="text-red-600 text-6xl mx-auto mb-4" />, 
      title: t("mediaProductionTitle"),
      description: t("mediaProductionDesc")
    },
    {
      icon: <FaGlobe className="text-blue-600 text-6xl mx-auto mb-4" />, 
      title: t("eventManagementTitle"),
      description: t("eventManagementDesc")
    },
    {
      icon: <FaUsers className="text-green-600 text-6xl mx-auto mb-4" />,
      title: t("crowdManagementTitle"),
      description: t("crowdManagementDesc")
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-6xl mx-auto mb-4" />,
      title: t("digitalEventsTitle"),
      description: t("digitalEventsDesc")
    },
    {
      icon: <FaHandshake className="text-purple-600 text-6xl mx-auto mb-4" />,
      title: t("marketingServicesTitle"),
      description: t("marketingServicesDesc")
    },
    {
      icon: <FaRing className="text-pink-600 text-6xl mx-auto mb-4" />,
      title: t("weddingEventsTitle"),
      description: t("weddingEventsDesc")
    }
  ];

  return (
    <motion.section 
      id="about" 
      className="bg-gray-100 py-16 rtl text-right"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
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
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center transform hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {item.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-3 text-base leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;