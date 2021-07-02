import Home from '../pages/Home'
import MovieDetailPage from '../pages/MovieDetailPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetailPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
