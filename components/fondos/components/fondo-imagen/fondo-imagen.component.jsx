import React from "react";
import styles from './fondo-imagen.styles.module.css';


export default function FondoImagen({ image, position, size, children }) {
  return (
    <div
      className={styles.fondo}
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
