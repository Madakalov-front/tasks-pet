import { useAppDispatch } from "@/app/store";
import { FormTask } from "@/features/FormTask";
import { addTask } from "@/features/TaskManagement/store/store-task";
import { useNavigate } from "react-router-dom";

export const CreateTask = () => {
  const dispath = useAppDispatch();
  const navigate = useNavigate();

  const handleDispatch = (title: string, description: string) => {
    dispath(addTask(title, description));
    navigate(-1);
  };

  return (
    <div className="container">
      <FormTask handleDispatch={handleDispatch} />
    </div>
  );
};
