import { Link } from "react-router-dom";
import { Logo } from "../../../shared/Logo";
import { Button } from "../../../shared/Button";
import styles from "../style/header.module.css";

export const Header = () => {
  return (
    <header className={styles["header-task"]}>
      <div className={styles["header-task__inner"]}>
        <Logo />
        <Link to="/create-task" className="create-task">
          <Button title={"create task"} />
        </Link>
      </div>
    </header>
  );
};
