import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import AddModal from './components/AddModal';


function App() {
  return (
    <div className="App">
      <Router>
        <AddModal />
        <Navbar />
        <Switch>

          <Route path="/" exact component={Dashboard} />
          <Route path="/expenses" exact component={Expenses} />
          {/* <Route path="/signup" exact component={Signup} />
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
