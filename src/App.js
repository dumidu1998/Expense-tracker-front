import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          {/* <Route path="/" exact component={Landing} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/bar" exact component={DoughnutChart} />
          <Route path="/pie" exact component={BarChart} />
          <Route path="/invoice" exact component={Invoice} />
          <Route path="/error" exact component={Error} /> */}
        </Switch >
      </Router >
    </div>
  );
}

export default App;
