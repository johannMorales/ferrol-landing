import styles from "./modal.styles.module.css";
export default function Modal({ isVisible, children }) {
  return isVisible ? (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>{children}</div>
    </div>
  ) : null;
}
