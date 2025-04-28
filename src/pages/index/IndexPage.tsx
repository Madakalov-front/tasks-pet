import { RootState, useAppSelector } from "@/app/store";
import { CardList } from "@/entities";
import { TaskCard } from "@/features/TaskManagement/ui/TaskCard";

export const IndexPage = () => {
  const { tasks } = useAppSelector((state: RootState) => state.tasks);

  return (
    <>
      <CardList
        tasks={tasks}
        taskCard={(task) => <TaskCard key={task.id} {...task} />}
      />
    </>
  );
};
