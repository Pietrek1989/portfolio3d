import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Workicons = (props) => {
  const style = {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 2px 50px 20px -20px, rgb(0, 0, 10) 5px 50px 60px -30px, rgb(0, 10, 38) 3px 3px 11px 0px inset;",
  };

  const constraintsRef = useRef(null);

  return (
    <motion.div className="container " ref={constraintsRef}>
      <motion.img
        variants={fadeIn("up", "spring", props.index * 0.1, 0.75)}
        src={props.icon}
        className="item h-24 w-24 bg-secondary rounded-full p-1 tech-ball"
        drag
        dragConstraints={constraintsRef}
        dragTransition={{ power: 0.2, damping: 10, timeConstant: 1000 }}
      />
    </motion.div>
  );
};

export default Workicons;
