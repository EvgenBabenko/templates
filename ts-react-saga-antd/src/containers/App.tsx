import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import App from 'src/components/App/App';
import { IUser } from 'src/models/User';
import * as actions from 'src/store/users/actions';
import IAppState from 'src/models/IAppState';

interface IProps {
  getUsersRequest: () => void;
  users: IUser[];
}

class AppContainer extends React.Component<IProps> {
  public render() {
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

const mapStateToProps = (state: IAppState) => ({
  users: state.users.users
});

const mapDispatchToProps = (dispatch: Dispatch<actions.UsersAction>) => ({
  getUsersRequest: () => dispatch(actions.getUsersRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
