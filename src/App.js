//Components
import Homepage from "./screens/Homepage";
import Architecture from "./screens/Architecture";
import Gallery from "./screens/Gallery";

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
          {/* <Architecture /> */}
          <Gallery />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
