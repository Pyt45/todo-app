import { useParams, useHistory } from "react-router-dom"
import useFetch from "./useFetch";

const TaskDetails = () => {
    const { id } = useParams();
    const { data: task, error, isLoading } = useFetch(`http://localhost:8000/tasks/${id}`);
    const history = useHistory();

    const deleteTask = () => {
        fetch(`http://localhost:8000/tasks/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/');
        })
    }

    return (
        <div className="task-details">
            {error && <div>{error}</div>}
            {isLoading && <div>isLoading...</div>}
            {task && (
                <article>
                    <h2>{task.todo}</h2>
                    <div>{task.details}</div>
                    <button onClick={deleteTask}>delete</button>
                </article>
            )}
        </div>
    );
};

export default TaskDetails;