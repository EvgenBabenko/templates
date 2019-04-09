import {
  compose,
} from 'recompose';
import { reduxForm } from 'redux-form'

import withOnSubmit from './withOnSubmit';
import ReduxForm from './ReduxForm';

const enchance = compose(
  withOnSubmit,
  reduxForm({
    form: 'simple' // a unique identifier for this form
  })
);

export default enchance(ReduxForm);
