import React from 'react';

import UserList from './UserList/UserList';

const App = ({
  users,
  handleLoadUsers,
}) => (
  <div>
    <header>
      <h1>Welcome to React</h1>
    </header>

    <button type="button" onClick={() => handleLoadUsers('string')}>
      Get users
    </button>

    <UserList users={users} />
  </div>
);

export default App;
