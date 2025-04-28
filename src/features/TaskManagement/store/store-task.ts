import { v4 as uuidv4 } from "uuid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "@/features/TaskManagement/types/types-task";

export interface TasksState {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const initialState: TasksState = {
  tasks: [
    {
      id: uuidv4(),
      title: "Изучить Redux",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem maxime vero obcaecati?",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Написать тесты",
      description: "Lorem ipsum dolor sit amet.",
      completed: true,
    },
  ],
  isLoading: false,
  error: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: loadState() || initialState,
  reducers: {
    completedTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task: Task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    addTask: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.tasks.push(action.payload);
      },
      prepare: (title: string, description: string) => ({
        payload: {
          id: uuidv4(),
          title,
          description,
          completed: false,
        },
      }),
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(
        (task: Task) => task.id !== action.payload
      );
    },
    editTask: {
      reducer: (
        state,
        action: PayloadAction<Partial<Task> & { id: string }>
      ) => {
        const taskFindIdx = state.tasks.findIndex(
          (task: Task) => task.id === action.payload.id
        );
        if (taskFindIdx === -1) return;
        state.tasks[taskFindIdx] = {
          ...state.tasks[taskFindIdx],
          ...action.payload,
        };
      },
      prepare: (id: string, title: string, description: string) => ({
        payload: {
          id,
          title,
          description,
        },
      }),
    },
  },
});

export const { completedTask, addTask, removeTask, editTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
