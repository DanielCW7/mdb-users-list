import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import getUsers from './hooks/getUser';

function App() {

  const [isUsers, setUsers] = useState(null)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={getUsers}> GET data </button>
        { isUsers ? isUsers : <p> *** no users *** </p> }

      </header>
    </div>
  );
}

export default App;
