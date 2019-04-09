import React from 'react';
import T from 'prop-types';

import Value from '../styles/Value/Value';

const propTypes = {
  date: T.object,
};

const DefaultFace = ({
  date,
}) => {
  return (
    <>
      <Value>{date.format('HH')}</Value>
      <Value>{date.format('mm')}</Value>
    </>
  );
}

DefaultFace.propTypes = propTypes;

export default DefaultFace;
