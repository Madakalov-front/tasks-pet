import { useState } from "react";
import CancelButton from "../../CancelButton/CancelButton";
import { Task } from "../../TaskManagement/types/types-task";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared/Button";
import styles from "../style/form-task.module.css";
import { InputTitle } from "@/features/FormTask/ui/InputTitle";
import { TextareaDesc } from "@/features/FormTask/ui/TextareaDesc";

export interface FormTaskProps {
  handleDispatch: (title: string, description: string) => void;
  task?: Task;
}
export const FormTask = ({ handleDispatch, task }: FormTaskProps) => {
  const [title, setTitle] = useState<string>(task?.title || "");
  const [description, setDescription] = useState<string>(
    task?.description || ""
  );
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    else if (name === "description") setDescription(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleDispatch(title, description);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className={styles["form-task"]}>
      <InputTitle title={title} onChange={handleChange} />
      <TextareaDesc description={description} onChange={handleChange} />
      <div className={styles["form-task__actions"]}>
        <Button type="submit" title="Save" />
        <CancelButton />
      </div>
    </form>
  );
};
