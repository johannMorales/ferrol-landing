import React from "react";

const Item = ({ name, image, onClick }) => {
  return (
    <article className="relative transform transition-all ease-in-out duration-300 hover:scale-105 cursor-pointer select-none hover:shadow-xl" onClick={onClick}>
      <img className="w-full" src={image} />
      <div
        className="absolute w-full text-center bg-primary inset-x-0 py-1 text-white"
        style={{ bottom: "15px" }}
      >
        {name}
      </div>
    </article>
  );
};

export default Item;
