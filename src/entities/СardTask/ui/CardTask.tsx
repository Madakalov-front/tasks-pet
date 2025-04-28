import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "../style/card-task.module.css";
import { Button } from "@/shared/Button";
import { CardTaskProps } from "@/entities/СardTask/model/type-card-task";
import CardTaskInfo from "@/entities/СardTask/ui/CardTaskInfo";

export const CardTask = ({
  id,
  title,
  description,
  completed = false,
  actionCompleted,
  actionDelete,
}: CardTaskProps) => {
  return (
    <article
      className={clsx(
        styles["card-task"],
        completed && styles["card-task--completed"]
      )}
    >
      <Button
        title={(completed && "\u2714") || " "}
        onClick={actionCompleted}
        classUpdate={styles.btn}
      />
      <CardTaskInfo title={title} description={description} />
      <div className={styles["card-task__actions"]}>
        <Link to={`/edit-task/${id}`} className={styles.a}>
          <Button title={"\u270E"} classUpdate={styles.btn} />
        </Link>
        <Button
          title={"\u2716"}
          onClick={actionDelete}
          classUpdate={styles.btn}
        />
      </div>
    </article>
  );
};
