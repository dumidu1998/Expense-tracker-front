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
import { atom } from 'jotai'
import EditModal from './components/EditModal';

export const modalopen = atom(false);
export const editModal = atom(false);
export const editId = atom(1);

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AddModal />
        <EditModal />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/expenses" exact component={Expenses} />
        </Switch >
      </Router >
    </div>
  );
}

export default App;
