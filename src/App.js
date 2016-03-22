import React, { Component } from 'react';

import CodePlaygroundContainer from './CodePlayground';

// import '../css/react-object-inspector.css';
import GithubCorner from './GithubCorner';

import Header from './Header'
import defaultData from './fakeData'

// const headerTitle = "import Inspector from 'react-inspector'"

export class App extends Component {
  render() {
    return (
      <div>
        <GithubCorner url="https://github.com/xyc/react-inspector" />

        <Header>
        </Header>
        <CodePlaygroundContainer codeText={JSON.stringify(defaultData, null, 2)}>
        </CodePlaygroundContainer>

      </div>
    );
  }
}
