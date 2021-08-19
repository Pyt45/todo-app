import { Link } from "react-router-dom";

const TaskTemplate = ({ tasks, ...props }) => {
    return (
        <div className="task-list">
            <h2>{props.title}</h2>
            {tasks.map((task) => (
                <div className="task-preview" key={task.id}>
                    <Link to={`/tasks/${task.id}`}>
                        <h2>{task.todo}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default TaskTemplate;