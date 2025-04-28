import { Route, Routes } from "react-router-dom";
import { EditTask, CreateTask, IndexPage, NotFound } from "../pages";
import { Layout } from "./Layout";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/edit-task/:id" element={<EditTask />}>
          {" "}
        </Route>
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
