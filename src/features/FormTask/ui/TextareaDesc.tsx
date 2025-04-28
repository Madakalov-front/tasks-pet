import styles from "../style/form-task.module.css";
type TextareaProps = {
  description: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
export const TextareaDesc = ({ description, onChange }: TextareaProps) => {
  return (
    <label className={styles["form-task__label"]}>
      Description:
      <textarea
        name="description"
        value={description}
        onChange={onChange}
        required
        className={styles["form-task__textarea"]}
      />
    </label>
  );
};
