import React, { Component } from 'react';

const monokai = {
  keyword: '#f92672',
  def: '#fd971f',
  string: '#94AB22'
}

const Monokai = ({ type, children }) =>
  <span style={{color: monokai[type]}}>
    {children}
  </span>

export default Monokai
