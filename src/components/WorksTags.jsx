import React from "react";
import { BsCircleFill } from "react-icons/bs";

const WorksTags = ({ projects, selectedTags, setSelectedTags }) => {
  const toggleTag = (tag) => {
    setSelectedTags((prevTags) => {
      const tagExists = prevTags.some((prevTag) => prevTag.name === tag.name);

      if (tagExists) {
        return prevTags.filter((prevTag) => prevTag.name !== tag.name);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  const uniqueTags = Array.from(
    new Map(
      projects
        .flatMap((project) => project.tags)
        .map((tag) => [tag["name"], tag])
    ).values()
  );
  return (
    <div className="tag-section  mt-5 flex flex-wrap">
      {uniqueTags.map((tag, index) => (
        <span
          key={index}
          className={`tag tag-select text-md my-1 font-medium mr-2 px-3 mx-1 py-1  rounded-full cursor-pointer  ${
            tag.color
          } ${tag.bg} ${
            selectedTags.some((t) => t.name === tag.name) ? "active-tag" : ""
          }`}
          onClick={() => toggleTag(tag)}
        >
          {selectedTags.some((t) => t.name === tag.name) && (
            <BsCircleFill className="text-green-500 inline-block" />
          )}
          #{tag.name} {""}
        </span>
      ))}
    </div>
  );
};

export default WorksTags;
