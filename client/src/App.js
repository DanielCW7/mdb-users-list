import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const getUsers = async () => {    
      try {
        fetch("/api")
        .then(res => res.json())
        .then(data => setUserData(data)) 
      } catch(err) {
        console.error(err)
      }
    }
    getUsers()
  }, [])

  function populate(data) {
    const list = data.users.map(user => <p key={user}>{user}</p>)
    return list
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {userData ? populate(userData) : <p>err</p>}
        {/* display users here */}
      </header>
    </div>
  );
}

export default App;
