import { useHistory } from "react-router";
import { useState } from "react";

const Create = () => {
    const [todo, setTodo] = useState('');
    const [details, setDetails] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {todo, details};
        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
        .then(() => {
            history.push('/');
        })
    }

    return (
        <div className="add">
            <form onSubmit={handleSubmit}>
                <label>Task:</label>
                <input
                type="text"
                required
                value={todo}
                onChange={e => setTodo(e.target.value)}>
                </input>
                <label>Task Details:</label>
                <textarea
                required
                value={details}
                onChange={e => setDetails(e.target.value)}
                ></textarea>
                <button>Add Task</button>
            </form>
        </div>
    );
};

export default Create;