import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../../features/TaskManagement/store/store-task";
import { RootState } from "@/app/store";
import { throttle } from "lodash";

const saveStateTasks = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state.tasks);
    localStorage.setItem("tasks", serializedState);
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

store.subscribe(
  throttle(() => {
    saveStateTasks(store.getState());
  }, 2000)
);
