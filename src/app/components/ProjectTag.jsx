import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 border-primary-500 px-6 py-6 text-xl cursor-pointer`}
      style={{ minWidth: "100px" }} // Set the minWidth property here
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
