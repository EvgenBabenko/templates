import React from 'react';

const User = (props) => {
  const {
    name,
  } = props;

  return (
    <div>
      {name}
    </div>
  );
};

export default User;
