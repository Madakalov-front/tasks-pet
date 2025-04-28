import { CardTask } from "../../../entities";
import { Task } from "../types/types-task";
import { completedTask, removeTask } from "../store/store-task";
import { memo } from "react";
import { useAppDispatch } from "@/app/store";

export const TaskCard = memo(({ id, title, description, completed }: Task) => {
  const dispatch = useAppDispatch();

  const handleCompleteTask = () => dispatch(completedTask(id));
  const handleRemoveTask = () => dispatch(removeTask(id));

  return (
    <CardTask
      id={id}
      title={title}
      description={description}
      completed={completed}
      actionCompleted={handleCompleteTask}
      actionDelete={handleRemoveTask}
    />
  );
});
