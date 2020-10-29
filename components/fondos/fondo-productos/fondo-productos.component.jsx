import React from "react";
import FondoImagen from "../components/fondo-imagen";

export default function FondoProductos({ children }) {
  return (
    <FondoImagen image="/img/productos/fondo-detalle.jpg" position="right bottom" size="auto 100%">
      {children}
    </FondoImagen>
  );
}
