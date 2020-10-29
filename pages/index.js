import Head from "next/head";
import FondoHome from "../components/fondos/fondo-home";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import styles from "../css/home.module.css";

const Animated = ({ message }) => {
  return <span className="transition-opacity"> {message} </span>;
};

export default function Home() {
  return (
    <FondoHome>
      <div>

      </div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -90%)",
          width: '100%'
        }}
        className="p-4"
      >
        <div className="md:mx-20">
          <nav className="my-3 md:my-4">
            <ul className="flex flex-wrap">
              <li className="leading-none uppercase text-xs cursor-pointer font-normal text-primary hover:font-semibold my-1 mx-1 md:mx-2 md:text-sm">
                Home
              </li>
              <li className="leading-none uppercase text-xs cursor-pointer font-normal text-primary hover:font-semibold my-1 mx-1 md:mx-2 md:text-sm">
                Caracteristicas
              </li>
              <li className="leading-none uppercase text-xs cursor-pointer font-normal text-primary hover:font-semibold my-1 mx-1 md:mx-2 md:text-sm">
                Productos
              </li>
              <li className="leading-none uppercase text-xs cursor-pointer font-normal text-primary hover:font-semibold my-1 mx-1 md:mx-2 md:text-sm">
                Industrias
              </li>
              <li className="leading-none uppercase text-xs cursor-pointer font-normal text-primary hover:font-semibold my-1 mx-1 md:mx-2 md:text-sm">
                Novedades
              </li>
              <li className="leading-none uppercase text-xs cursor-pointer font-normal text-primary hover:font-semibold my-1 mx-1 md:mx-2 md:text-sm">
                Contactos
              </li>
              
            </ul>
          </nav>
          <div className="mx-1">
            <span className="block text-primary uppercase text-xl font-black md:text-6xl leading-none">
              SAL FERROL
            </span>
            <span className="block text-primary md:text-xl">
              Su origen marino aporta un sabor único y distintivo.
            </span>
          </div>
        </div>
        {/* <div className={styles.animated}> */}
        {/* <div>
          <div>
            <span className="block text-primary uppercase text-4xl font-black">
              SAL FERROL
            </span>
            <span className="block text-primary">
              Su origen marino aporta un sabor único y distintivo.
            </span>
          </div>
          <div>
            <span className="block text-primary uppercase text-4xl font-black">
              SAL DE MAR
            </span>
            <span className="block text-primary">
              Naturalmente contiene micronutrientes esenciales
            </span>
            <span className="block text-primary font-black">
              100% Producto Peruano
            </span>
          </div>
        </div> */}
      </div>
    </FondoHome>
  );
}
