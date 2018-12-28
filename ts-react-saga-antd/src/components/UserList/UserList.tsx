import * as React from 'react';

import { IUser } from 'src/models/User';
import User from 'src/components/User/User';

interface IProps {
  users: IUser[];
}

const UserList = (props: IProps) => {
  const {
    users,
  } = props;

  return (
    <>
      {users.map((user: IUser) => <User key={user.id} {...user} />)}
    </>
  );
}

export default UserList;
