import React from "react";
import FondoImagen from "../components/fondo-imagen";

export default function FondoProductos({ children }) {
  return (
    <FondoImagen image="/img/_fondos/home.jpg" position="center center" size="auto 100%">
      {children}
    </FondoImagen>
  );
}
