import styles from "../style/form-task.module.css";
type InputTitleProps = {
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputTitle = ({ onChange, title }: InputTitleProps) => {
  return (
    <div>
      <label className={styles["form-task__label"]}>
        Title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          required
          className={styles["form-task__input"]}
        />
      </label>
    </div>
  );
};
