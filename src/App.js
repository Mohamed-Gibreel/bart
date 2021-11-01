//Components
import Homepage from "./screens/Homepage";
import Architecture from "./screens/Architecture";

// SASS
import "./styles/style.scss";

//CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/architecture">
          <Architecture />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
