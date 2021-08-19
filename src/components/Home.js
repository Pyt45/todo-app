import useFetch from '../useFetch';
import TaskTemplate from './TaskTemplate';

const Home = () => {
    const {data: tasks, error, isLoading} = useFetch('http://localhost:8000/tasks');
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>isLoading...</div>}
            {tasks && <TaskTemplate tasks={tasks} title="All tasks"/>}
        </div>
    );
};

export default Home;