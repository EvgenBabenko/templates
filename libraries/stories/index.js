import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import 'antd/dist/antd.css';

import Buttons from '../src/Button/Button';

storiesOf('Button', module)
  .add('with text', () => <Buttons type="primary" />)
  .add('with text2', () => <Buttons type="danger" />)
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));   