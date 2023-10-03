import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="about">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4  text-secondary text-[17px] max-w-3xl leading-[30px] overview-text "
      >
        With a passion for creating dynamic and engaging web applications, I'm
        always looking for new challenges and opportunities to improve my
        skills. I have experience working with a range of programming languages
        and technologies, including HTML, CSS, JavaScript, React, Node.js,
        Express JS, Typescript, MongoDB . I enjoy working on both front-end and
        back-end development! In my free time, I love tinkering with new
        technologies and experimenting with different web development
        techniques. If you're looking for a dedicated and motivated team member
        who's ready to jump in and start contributing from day one, I'd love to
        connect!
      </motion.p>

      <div className="mt-20 flex flex-wrap flex-row  gap-10 justify-end items-end">
        {/* {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))} */}
        <div>
          <motion.div
            variants={slideIn("left", "spring", 0.7, 1)}
            className="text-6xl my-5 text-gradient white-glassmorphism blue-glassmorphism"
          >
            <div className="text-6xl text-gradient p-3 px-10">
              Web Developer
            </div>
          </motion.div>
          <motion.div
            variants={slideIn("left", "spring", 0.9, 1)}
            className="text-6xl my-5 text-gradient white-glassmorphism blue-glassmorphism"
          >
            <div className="text-6xl text-gradient p-3 px-10">
              Software Engineer{" "}
            </div>
          </motion.div>
          <motion.div
            variants={slideIn("left", "spring", 1.1, 1)}
            className="text-6xl my-5 text-gradient white-glassmorphism blue-glassmorphism"
          >
            <div className="text-6xl text-gradient p-3 px-10">
              Content Creator{" "}
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#257cf0]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
