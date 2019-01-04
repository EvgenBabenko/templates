import React from 'react';
import { View, Text } from 'react-native';

const User = (props) => {
  const {
    name,
  } = props;

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

export default User;
