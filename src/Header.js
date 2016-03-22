import CodeEditor from './CodeEditor'
import React, { Component } from 'react';

import Monokai from './Monokai'


const Title = () =>
  <h3 className="title" style={{
                                textAlign: 'center',
                                // marginTop: '10rem',
                                letterSpacing: '0.2em',
                                // textTransform: 'uppercase'
                                // transform: 'scale(1.5,1)'
                              }}>
      <Monokai type="keyword"> import</Monokai>
      <span> Inspector </span>
      <Monokai type="keyword"> from</Monokai>
      <Monokai type="string"> 'react-inspector'</Monokai>
  </h3>

const headerMargin = 70
const Header = ({ title }) =>
  <div className="container">
    <section className="header" style={{
                                        marginTop: headerMargin + 40,
                                        marginBottom: headerMargin - 10
                                      }}>
              <Title />
    </section>
  </div>


export default Header
