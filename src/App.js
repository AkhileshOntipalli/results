
import './App.css';
import ShowResults from './component/results';
import { Router, Route, Switch } from 'react-router-dom';
import  { createBrowserHistory } from 'history'
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={ShowResults} />
      </Switch>

    </Router>
  );
}

export default App;
