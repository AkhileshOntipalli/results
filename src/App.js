
import './App.css';
import ShowResults from './component/results';
import Login from './component/login';
import { Router, Route, Switch } from 'react-router-dom';
import  { createBrowserHistory } from 'history'
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/home' component={ShowResults} />
      </Switch>

    </Router>
  );
}

export default App;
