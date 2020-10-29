import React from "react";

export default function FondoImagen({ image, position, size, children }) {
  return (
    <div
      className="fixed w-full h-full"
      style={{
          overflow: 'scroll',
        background: `url(${image}) no-repeat`,
        backgroundPosition: position || 'center center',
        backgroundSize: size || "cover",
      }}
    >
      {children}
    </div>
  );
}
