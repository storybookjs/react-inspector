import React, { Component } from 'react';

// Styles
import objectStyles from './objectStyles';

const ObjectName = ({ name, dimmed }) =>
  <span style={dimmed ?  objectStyles.nameDimmed : objectStyles.name}>{ name }</span>

export default ObjectName
