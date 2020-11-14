import styles from "./card.styles.module.css";

export default function Card({ image, name, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <img src={image} />
        <h2>{name}</h2>
      </div>
      <div className={styles.cardBottom}>{description}</div>
    </article>
  );
}
