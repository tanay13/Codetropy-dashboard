import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./page/dashboard";
import Home from "./page/Home";

function App() {
  return (
    // basename="/tut" - prop passed to BrowserRouter so that it takes us to the page /tut/routes.
    <BrowserRouter>
      <div className="App"></div>
      <Switch>
        {/* switch goes to the path which matches first.Exact is used so that routing is done exactly as the path mentioned */}
        <Route path="/" component={Home} exact />
        <Route path="/dashboard/:teamname" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
