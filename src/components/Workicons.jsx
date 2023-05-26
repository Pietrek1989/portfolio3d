import React, { useRef } from "react";
import { motion } from "framer-motion";

const Workicons = (props) => {
  const constraintsRef = useRef(null);

  return (
    // <motion.div
    //   className="container z-10 bg-secondary"
    //   whileHover={{ scale: 1.2, rotate: 90 }}
    //   whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
    // >
    //   <img src={props.icon} alt="icon" />
    // </motion.div>
    <motion.div className="container" ref={constraintsRef}>
      <motion.img
        src={props.icon}
        className="item h-24 w-24 bg-secondary rounded-full p-1"
        drag
        dragConstraints={constraintsRef}
        dragTransition={{ power: 0.2, damping: 10, timeConstant: 1000 }}
      />
    </motion.div>
  );
};

export default Workicons;
