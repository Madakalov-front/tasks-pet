import { useAppDispatch } from "@/app/store";
import { FormTask } from "@/features/FormTask";
import { addTask } from "@/features/TaskManagement/store/store-task";
import { useNavigate } from "react-router-dom";

export const CreateTask = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleDispatch = (title: string, description: string) => {
        dispatch(addTask(title, description));
        navigate('/');
    };

    return (
        <div className="container">
            <FormTask handleDispatch={handleDispatch} />
        </div>
    );
};
