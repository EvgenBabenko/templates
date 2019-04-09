import React, { Component } from 'react';

import Watch from './components/Watch/Watch';
import DayFace from './components/DayFace/DayFace';
import AnalogFace from './components/AnalogFace/AnalogFace';
import DateFace from './components/DateFace/DateFace';
import SecondaryFace from './components/SecondaryFace/SecondaryFace';

class App extends Component {
  render() {

    return (
      <>
        <Watch face={date => <DayFace date={date} />} />
        <Watch />
        <Watch face={date => <AnalogFace date={date} />} />
        <Watch face={date => <DateFace date={date} />} />
        <Watch face={date => <SecondaryFace date={date} />} />
      </>
    );
  }
}

export default App;
