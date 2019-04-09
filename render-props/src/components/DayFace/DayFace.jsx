import React from 'react';
import T from 'prop-types';

import Value from '../styles/Value/Value';

const propTypes = {
  date: T.object,
};

const DayFace = ({
  date,
}) => {
  return (
    <>
      <Value small>{date.format('HH')}</Value>
      <Value small>{date.format('mm')}</Value>
      <Value small opaque>{date.format('dd')}</Value>
      <Value small opaque>{date.format('DD')}</Value>
    </>
  );
}

DayFace.propTypes = propTypes;

export default DayFace;
