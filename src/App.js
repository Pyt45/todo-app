import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './Create';
import TaskDetails from './TaskDetails';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {

  return (
    <Router>
      <div className="home">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add">
              <Create />
            </Route>
            <Route path="/tasks/:id">
              <TaskDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
