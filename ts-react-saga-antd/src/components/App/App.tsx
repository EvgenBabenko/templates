import { Button } from 'antd'
import * as React from 'react';

import './App.css';
import UserList from 'src/components/UserList/UserList';
import logo from '../../logo.svg';
import { IUser } from 'src/models/User';

interface IProps {
  getUsersRequest: () => void;
  users: IUser[];
}

const App = (props: IProps) => {
  const {
    users,
    getUsersRequest,
  } = props;

  function handleClick() {
    getUsersRequest();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>

      <Button onClick={handleClick}>
        Get users
      </Button>

      <UserList users={users} />
    </div>
  );
}

export default App;
