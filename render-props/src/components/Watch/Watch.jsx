import React, { Component } from 'react';
import T from 'prop-types';
import moment from 'moment';
// import moment from 'dayjs';
// import { format, formatDistance, formatRelative, subDays } from 'date-fns'

import Face from '../styles/Face/Face';
import Strap from '../styles/Strap/Strap';
import Screen from '../styles/Screen/Screen';
import Bezel from '../styles/Bezel/Bezel';
import DefaultFace from '../DefaultFace/DefaultFace'

const propTypes = {
  face: T.func,
};

class Watch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
    };

    this.update = this.update.bind(this);
  }

  static defaultProps = {
    face: date => <DefaultFace date={date} />,
  }

  componentDidMount() {
    this.TICK = setInterval(this.update, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.TICK);
  }

  update() {
    this.setState({ date: moment() });
  }

  render() {
    return (
      <Strap>
        <Bezel>
          <Screen>
            <Face>{this.props.face(this.state.date)}</Face>
          </Screen>
        </Bezel>
      </Strap>
    );
  }
}

Watch.propTypes = propTypes;

export default Watch;
