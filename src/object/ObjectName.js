import React, { Component } from 'react';

// Styles
import objectStyles from './objectStyles';

const ObjectName = ({ name }) =>
  <span style={objectStyles.name}>{ name }</span>

export default ObjectName
