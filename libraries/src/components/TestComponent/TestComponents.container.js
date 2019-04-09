import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  compose,
  withHandlers,
} from 'recompose';

import { actions as testModuleActions } from 'redux/modules/testModule';
import TestComponents from './TestComponents';

const mapStateToProps = state => ({
  users: state.testModule.users,
});

const mapDispatchToProps = dispatch => ({
  testModuleActions: bindActionCreators({ ...testModuleActions }, dispatch),
});

const enchance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleLoadUsers: props => (value) => {
      props.testModuleActions.getUsersRequest(value);
    },
  }),
);

export default enchance(TestComponents);
