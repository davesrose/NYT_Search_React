import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NYTContainer from "./components/NYTContainer";
import NoMatch from "./pages/NoMatch";

const App = () =>
  <Router>
    <div>
      <Switch>
      	<Route exact path="/" component={NYTContainer} />
        <Route exact path="/saved" component={NYTContainer} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;


export default App;