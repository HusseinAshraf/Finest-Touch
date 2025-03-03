import React from "react";
import { useTranslation } from "react-i18next";
import UnderlineSkew from "../Ui/UnderlineSkew ";

function GoalsSection() {
  const { t } = useTranslation();

  const goals = [
    {
      icon: "🚀",
      title: t("goal_1_title"),
      description: t("goal_1_description"),
    },
    {
      icon: "🤝",
      title: t("goal_2_title"),
      description: t("goal_2_description"),
    },
    {
      icon: "🧠",
      title: t("goal_3_title"),
      description: t("goal_3_description"),
    },
    {
      icon: "📈",
      title: t("goal_4_title"),
      description: t("goal_4_description"),
    },
    {
      icon: "📅",
      title: t("goal_5_title"),
      description: t("goal_5_description"),
    },
    {
      icon: "❤️",
      title: t("goal_6_title"),
      description: t("goal_6_description"),
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="relative inline-block mb-12">
          <h1 className="text-5xl font-extrabold text-white relative z-10">
            {t("goals")}
          </h1>
          <div className="absolute right-0 w-full">
            <UnderlineSkew />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-4xl mb-4">{goal.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
              <p className="text-gray-400">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GoalsSection;
