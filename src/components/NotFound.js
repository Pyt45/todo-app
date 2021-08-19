import { Link } from  'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <center>
                <div>
                    <h1>404 Not Found</h1>
                </div>
                <Link to="/" className="back">
                        Back to home...
                </Link>
            </center>
        </div>
    );
};

export default NotFound;