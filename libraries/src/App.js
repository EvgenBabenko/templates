import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import TestComponents from 'components/TestComponent/TestComponents.container';
import FinalForm from 'components/Form/FinalForm.container';
// import Formik from 'components/Form/Formik.container';
import ReduxForm from 'components/Form/ReduxForm.container';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const Section = ({
  content,
}) => (
  <div className="section">
    {content}
  </div>
);

const anchors = ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'];

const FullPageWrapper = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    // sectionsColor={['#ff5f45', '#ff5f45', '#ff5f45', '#0798ec']}
    onLeave={(origin, destination, direction) => {
      console.log('onLeave event', { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log('render prop change', state, fullpageApi);

      return (
        <div>
          <Section content={<FinalForm />} />
          {/* <Section content={<Formik />} /> */}
          <Section content={<ReduxForm />} />
          <Section content={<App />} />
          <Section content={<TestComponents />} />
          <Section content={<h3>Slide up!</h3>} />
        </div>
      );
    }}
  />
);

export default FullPageWrapper;

