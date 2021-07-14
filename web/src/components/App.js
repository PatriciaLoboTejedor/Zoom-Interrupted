import "../stylesheets/App.scss";
import Card from "./Card";
import Landing from "./Landing";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/card" component={Card} />
    </Switch>
  );
}

export default App;
