import clsx from "clsx";
import styles from "../style/button.module.css";

export interface ButtonProps {
  title?: string;
  modificator?: "default" | "primary" | "secondary" | "edit" | "delete";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  classUpdate?: string;
}

export const Button = ({
  title,
  modificator = "default",
  type = "button",
  onClick,
  classUpdate,
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.btn, styles[`btn--${modificator}`], classUpdate)}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
