import React from 'react';
import T from 'prop-types';

import Value from '../styles/Value/Value';

const propTypes = {
  date: T.object,
};

const SecondaryFace = ({
  date,
}) => {
  return (
    <>
      <Value small>{date.format('HH')}</Value>
      <Value small>{date.format('mm')}</Value>
      <Value small>{date.format('ss')}</Value>
    </>
  );
}

SecondaryFace.propTypes = propTypes;

export default SecondaryFace;
