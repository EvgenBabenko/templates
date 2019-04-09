import React from 'react';

import './App.css';
import UserList from 'components/UserList/UserList';
import logo from 'logo.svg';

const App = (props) => {
  const {
    users,
    getUsersRequest,
  } = props;

  function handleClick() {
    getUsersRequest("dgfsdgfsd");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>

      <button onClick={handleClick}>
        Get users
      </button>

      <UserList users={users} />
    </div>
  );
}

export default App;
