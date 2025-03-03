import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import UnderlineSkew from "../Ui/UnderlineSkew ";
import img1 from "../../assets/img/قيصرية للكتاب.jpg";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 right-[-25px] transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-700 hover:bg-opacity-80 transition"
      onClick={onClick}
    >
      <FaArrowRight size={15} />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 left-[-25px] transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-700 hover:bg-opacity-80 transition"
      onClick={onClick}
    >
      <FaArrowLeft size={15} />
    </button>
  );
}

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t("luxuryWeddingTitle"),
      image: "https://images.unsplash.com/photo-1545912453-082d02dcf3ed",
      description: t("luxuryWeddingDesc"),
    },
    {
      id: 2,
      title: t("corporateConferenceTitle"),
      image: "https://images.unsplash.com/photo-1510070009289-b5bc34383727",
      description: t("corporateConferenceDesc"),
    },
    {
      id: 3,
      title: t("musicFestivalTitle"),
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
      description: t("musicFestivalDesc"),
    },
    {
      id: 4,
      title: t("fashionShowTitle"),
      image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d",
      description: t("fashionShowDesc"),
    },
    {
      id: 5,
      title: "مشروع قيصرية الكتاب",
      image:  img1 ,
      description: "حفل افتتاح مشروع قيصرية الكتاب والفعاليات المصاحبة له.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section id="projects" className="py-14 bg-gray-100 rtl text-right">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="mb-6">
          <div className="relative inline-block">
            <h1 className="text-5xl font-extrabold text-gray-900 relative z-10">
              {t("titleProject")}
            </h1>
            <div className="absolute right-0 w-full pt-0.5">
              <UnderlineSkew />
            </div>
          </div>
          <p className="text-gray-600 mt-4 text-lg">{t("subtitleProject")}</p>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                <p className="text-gray-700 text-sm mt-2">
                  {project.description}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Projects;
