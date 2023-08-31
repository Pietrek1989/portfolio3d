import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { TbWorldWww } from "react-icons/tb";

const WorksProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_page,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full "
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain hover:scale-150"
              />
            </div>
            {live_page && (
              <div
                onClick={() => window.open(live_page, "_blank")}
                className="bg-white text-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <p
                  alt="source code"
                  className="w-full h-full object-contain hover:scale-125 mx-auto "
                >
                  <TbWorldWww className="h-6 w-6 ml-2 mt-2" />
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`tag text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${tag.color} ${tag.bg}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default WorksProjectCard;
