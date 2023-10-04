import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.min.css";

import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import {
  BsCircle,
  BsCircleFill,
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
} from "react-icons/bs";
import WorksProjectCard from "./WorksProjectCard";
import { SectionWrapper } from "../hoc";
import WorksTags from "./WorksTags";

SwiperCore.use([Navigation]);

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState([]);

  const projectsPerPage = 6;
  const filteredProjects =
    selectedTags.length > 0
      ? projects.filter((project) =>
          selectedTags.every((selectedTag) =>
            project.tags.some(
              (projectTag) => projectTag.name === selectedTag.name
            )
          )
        )
      : projects;

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      viewport={{ once: true, amount: 0.25 }}
      animate="show"
      className={` relative z-0 `}
      id="work"
    >
      <span className="hash-span">&nbsp;</span>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>My work.</h2>
        <p className={`${styles.sectionSubText} `}>Projects</p>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="bg-tertiary rounded-[20px] p-5 mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described and
          has github link and if available, live website link. Some work are
          done solo and some were done in a team.
        </motion.p>
      </div>
      <WorksTags
        projects={projects}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      {isMobile ? (
        <div className="mt-20 w-100 relative">
          <div className="swiper-button-prev  cursor-pointer hover:scale-105 ">
            <BsFillCaretLeftFill />
          </div>
          <div className="swiper-button-next  cursor-pointer hover:scale-105 h-[24px] w-[24px]">
            <BsFillCaretRightFill />
          </div>
          <Swiper
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            slidesPerView={"auto"}
            centeredSlides={true}
            className="swiper-gallery"
          >
            {currentProjects.map((project, index) => (
              <SwiperSlide
                key={index}
                style={{ display: "inline-block", minWidth: "300px" }}
              >
                <div className="someClassName">
                  <WorksProjectCard index={index} {...project} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <>
          <div className="mt-20 w-100 flex flex-row flex-wrap gap-7 justify-center">
            {currentProjects.map((project, index) => (
              <WorksProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
          <div className="flex justify-center space-x-4 mt-8 ">
            {Array.from({ length: totalPages }, (_, index) =>
              currentPage === index + 1 ? (
                <BsCircleFill
                  key={index}
                  className="cursor-pointer w-8 h-8 text-[#257cf0]"
                  onClick={() => setCurrentPage(index + 1)}
                />
              ) : (
                <BsCircle
                  key={index}
                  className="cursor-pointer w-8 h-8 text-[#257cf0]"
                  onClick={() => setCurrentPage(index + 1)}
                />
              )
            )}
          </div>
        </>
      )}
    </motion.section>
  );
};

export default SectionWrapper(Works, "");
