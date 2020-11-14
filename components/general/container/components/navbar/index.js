import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar({ items }) {
  return (
    <ul className={styles.navbar}>
      {items.map(({ path, name, children }) => (
        <li className={styles.navbarItem}>
          <Link href={path}>
            <a>{name}</a>
          </Link>
          {children && (
            <React.Fragment>
              <ul className={styles.submenu}>
                {children.map(({ path, name }) => (
                  <li className={styles.submenuItem}>
                    <Link href={path}>
                      <a>{name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          )}
        </li>
      ))}
    </ul>
  );
}
