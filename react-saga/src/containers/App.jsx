import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from 'components/App/App';
import * as actions from 'store/users/actions';

class AppContainer extends Component {
  render() {
    const {
      users,
      getUsersRequest,
    } = this.props;

    return (
      <App
        users={users}
        getUsersRequest={getUsersRequest}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users
});

const mapDispatchToProps = (dispatch) => ({
  getUsersRequest: (rr) => dispatch(actions.getUsersRequest(rr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
