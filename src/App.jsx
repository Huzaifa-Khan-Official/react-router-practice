import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <h1>Home Page</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul> */}
      <Navbar />
    </div>
  );
}

export default App;
