import React, { Component } from 'react';

import unselectable from './unselectable'

// http://unicode-table.com/en/sets/arrows-symbols/
export const upArrow = '▲'
export const downArrow = '▼'
export const rightArrow = '▶'

const styles = {
  expandGlyph: {
    color: '#6e6e6e',
    fontSize: '10px',
    marginRight: '3px',
    whiteSpace: 'pre',
  }
}

// if placeholder is defined return placeholder, else return an arrow according to the expanded prop
const ExpandGlyph = ({ expanded, empty }) => {
  if(empty)
    // a placeholder (space char) before keys
    return <span style={{...styles.expandGlyph, ...unselectable}}>{' '}</span>
  else
    return <span style={{...styles.expandGlyph, ...unselectable}}>{expanded ? downArrow : rightArrow}</span>
}

export { ExpandGlyph }
