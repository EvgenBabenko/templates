import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import UserList from '../UserList/UserList';

const App = (props) => {
  const {
    users,
    getUsersRequest,
  } = props;

  function handleClick() {
    getUsersRequest();
  }

  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to React</Text>
      </View>

      <Button
        onPress={handleClick}
        title="Get users"
      />

      <UserList users={users} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    alignItems: 'center',

  },
  header: {
    backgroundColor: '#222',
    height: 150,
    padding: 20,
    color: 'white',
    alignSelf: 'stretch',
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
