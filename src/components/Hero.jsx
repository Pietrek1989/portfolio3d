import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Cube from "./Cube";

const Hero = () => {
  return (
    <section className=" relative w-full h-screen mx-auto hero">
      <div
        className={`${styles.paddingX}  absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
      >
        <h1 className={`${styles.heroHeadText} w-3/4`}>
          Hey there, I'm <br />
          <span className="text-[#257cf0] z-10">Piotr Rodzen</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100 z-10`}>
          I'm a Full stack Web Developer~<br className="sm:block hidden"></br>{" "}
          With the passion for front end
        </p>
      </div>
      {/* <Canvas /> */}
      <Cube className="-z-1" />

      <div className=" absolute xs-bottom w-full flex justify-center items-center bottom-10 z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-lg border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 "
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
