import { Link } from "react-router-dom";
import styles from "../style/logo.module.css";

export const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img src="/icon/logo.svg" alt="#!" className={styles["logo__img"]} />
    </Link>
  );
};
