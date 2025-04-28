import { RootState, useAppDispatch, useAppSelector } from "@/app/store";
import { FormTask } from "@/features/FormTask";
import { editTask } from "@/features/TaskManagement/store/store-task";
import { Task } from "@/features/TaskManagement/types/types-task";
import { useParams } from "react-router-dom";

export const EditTask = () => {
  const { id } = useParams<{ id: string }>();
  const task = useAppSelector((state: RootState) =>
    id ? state.tasks.tasks.find((task: Task) => task.id === id) : undefined
  );

  const dispatch = useAppDispatch();

  if (!id) {
    return <div>Error: Task ID is missing</div>;
  }

  if (!task) {
    return <div>Task not found</div>;
  }

  const handleDispatch = (title: string, description: string) => {
    dispatch(editTask(task.id, title, description));
  };

  return (
    <div className="edit-task">
      <h1>Edit Task: {task.title}</h1>
      <FormTask handleDispatch={handleDispatch} task={task} />
    </div>
  );
};
