import React from 'react';
import T from 'prop-types';

import Value from '../styles/Value/Value';

const propTypes = {
  date: T.object,
};

const DateFace = ({
  date,
}) => {
  return (
    <>
      <Value small>{date.format('HH')}</Value>
      <Value small opaque>{date.format('MMM DD')}</Value>
      <Value small>{date.format('mm')}</Value>
    </>
  );
}

DateFace.propTypes = propTypes;

export default DateFace;
