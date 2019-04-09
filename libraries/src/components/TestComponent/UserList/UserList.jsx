import React from 'react';

import User from './User/User';

const UserList = ({
  users,
}) => (
  users.map(user => <User key={user.id} {...user} />)
);

export default UserList;
