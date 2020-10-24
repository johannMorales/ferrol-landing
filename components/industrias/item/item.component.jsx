import React from "react";

const Item = ({ name, image }) => {
  return (
    <article className="relative">
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
