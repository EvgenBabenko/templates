import React from 'react';
import T from 'prop-types';

import Hand from '../styles/Hand/Hand';

const propTypes = {
  date: T.object,
};

const AnalogFace = ({
  date,
}) => {
  return (
    <>
      <Hand type="seconds" value={(360 / 60) * date.seconds()} />
      <Hand type="minutes" value={(360 / 60) * date.minutes()} />
      <Hand value={(360 / 12) * date.format('h')} />
    </>
  );
}

AnalogFace.propTypes = propTypes;

export default AnalogFace;
