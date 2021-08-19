import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Todo-App</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/add" style={{
                    color: 'white',
                    backgroundColor: '#18A5A7',
                    borderRadius: '3px'
                }}>Add task</Link>
            </div>
        </nav>
    );
};

export default Navbar;