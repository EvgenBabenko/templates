import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from 'components/App/App';
import * as actions from 'store/users/actions';

class AppContainer extends Component {
  render() {
    const {
      users,
      getUsers,
    } = this.props;
    
    return (
      <App
        users={users}
        getUsers={getUsers}
       />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(actions.getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
