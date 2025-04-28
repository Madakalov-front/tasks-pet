import styles from "../style/card-task.module.css";

interface CardTaskInfoProps {
  title: string;
  description: string;
}

const CardTaskInfo = ({ title, description }: CardTaskInfoProps) => {
  return (
    <div className={styles["card-task__content"]}>
      <h5 className={styles.h5}>{title}</h5>
      <p className={styles.p}>{description}</p>
    </div>
  );
};

export default CardTaskInfo;
