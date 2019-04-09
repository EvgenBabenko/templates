import {
  compose,
  withHandlers,
  defaultProps,
  withProps,
} from 'recompose';

import validate from './validate';

const enchance = compose(
  defaultProps({
    validate,
    initialValues: {
      firstName: '33',
      email: 'admin@gmail.com',
      favoriteColor: 'ff0000'
    }
  }),
  withHandlers({
    onSubmit: () => (value) => {
      console.log(value)
    },
  }),
);

export default enchance;
