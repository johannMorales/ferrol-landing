import React from "react";

export default function Item({ name, image, onClick }) {
  return (
    <article className="p-2 flex flex-col items-center border-solid border-white border-2 select-none cursor-pointer hover:shadow-xl transition-all duration-200 ease-in-out" style={{ backgroundColor: "#023360" }} onClick={onClick}>
      <img  className="block w-full" alt={name} src={image} />
      <div className="text-white uppercase font-bold mt-2 mb-1">{name}</div>
    </article>
  );
}
