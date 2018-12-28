import React from 'react';

import User from 'components/User/User';

const UserList = (props) => {
  const {
    users,
  } = props;

  return (
    <>
      {users.map((user) => <User key={user.id} {...user} />)}
    </>
  );
}

export default UserList;
