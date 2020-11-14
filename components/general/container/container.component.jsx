import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/header";

const items = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Características",
    path: "/caracteristicas",
  },
  {
    name: "Productos",
    path: "/productos",
    children: [
      {
        name: "10/30",
        path: "/productos/1030",
      },
      {
        name: "30/80",
        path: "/productos/3080",
      },
      {
        name: "Impalpable",
        path: "/productos/impalpable",
      },
      {
        name: "KD",
        path: "/productos/kd",
      },
      {
        name: "Molida Fina",
        path: "/productos/molida-fina",
      },
      {
        name: "Molida Gruesa",
        path: "/productos/molida-gruesa",
      },
      {
        name: "Refinada Fina",
        path: "/productos/refinada-fina",
      },
      {
        name: "Refinada Gruesa",
        path: "/productos/refinada-gruesa",
      },
    ],
  },
  {
    name: "Industrias",
    path: "/industrias",
  },
  {
    name: "Novedades",
    path: "/novedades",
  },
  {
    name: "Contacto",
    path: "/contacto",
  },
];

function NavbarItemMobile({ path, name, children }) {
  return (
    <li className="text-white relative">
      <Link href={path}>
        <a className="mx-4 leading-10 uppercase box-border">{name}</a>
      </Link>
      {children && (
        <React.Fragment>
          <ul className="bg-white p-4">
            {children.map(({ path, name }) => (
              <li className="text-muted">
                <Link className="text-white" href={path}>
                  <a className="px-4 leading-8 text-sm appearance-none bg-transparent">
                    {name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <span
            className="absolute"
            style={{ right: "10px", padding: "10px", top: "3px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-down"
              height="14px"
              role="img"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
              />
            </svg>
          </span>
        </React.Fragment>
      )}
    </li>
  );
}

export default function Container({ children }) {
  return (
    <AnimatePresence>
      <motion.div
        className="w-full h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 1 }}
      >
        {/* <header className="block top-0 bg-white shadow-md z-10">
          <div className="h-16 flex justify-between mx-4 flex-wrap md:mx-20">
            <Navbar items={items} />
            <div className="inline-block h-full py-3">
              <img
                className="h-full cursor-pointer inline-block"
                src="/img/_logos/logo-negro.png"
              />
              </div>
          </div>
        <div className="inline-block bg-white w-full">
            <ul className="bg-primary relative py-4">
              {items.map((item) => (
                <NavbarItemMobile key={item.path} {...item} />
              ))}
            </ul>
          </div> 
        </header> */}
        <Header/>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
