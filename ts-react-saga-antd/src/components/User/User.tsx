import * as React from 'react';

interface IProps {
  name: string;
}

const User = (props: IProps) => {
  const {
    name,
  } = props;

  return (
    <div>
      {name}
    </div>
  );
}

export default User;
