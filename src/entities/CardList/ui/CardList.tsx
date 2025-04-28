import { ReactElement } from "react";
import { Task } from "@/features/TaskManagement/types/types-task";
import styles from "../style/card-list.module.css";

export const CardList = ({
  tasks,
  taskCard,
}: {
  tasks: Task[];
  taskCard: (task: Task) => ReactElement;
}) => {
  return tasks.length > 0 ? (
    <div className={styles["card-list"]}>{tasks.map(taskCard)}</div>
  ) : (
    "empty"
  );
};
