import React from "react";

export default function FondoGradiente({ children }) {
  return (
    <div
      style={{ background: "linear-gradient(to right, #001F43, #002F61)", minHeight: 'calc(100vh - 4rem)' }}
    >
      {children}
    </div>
  );
}
