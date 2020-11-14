import Navbar from '../navbar';
import styles from './header.module.css';


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

  
export default function Header() {
    return (
        <React.Fragment>
        <header className={styles.header}>
            <Navbar items={items}/>
        </header>
        <div className={styles.headerHidden}/>
        </React.Fragment>
    )
}