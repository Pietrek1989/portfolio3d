import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Workicons from "./Workicons";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <h2 className={`${styles.sectionHeadText}`}>My tech stack.</h2>
        <p className={`${styles.sectionSubText} `}>Try draggin the icons!</p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 z-10 p-5">
        {technologies.map((technology) => {
          console.log(technology);

          return (
            <div className="w-28 h-28" key={technology.name}>
              <Workicons icon={technology.icon} />
              {/* <BallCanvas icon={technology.icon} /> */}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default SectionWrapper(Tech, "");
