import React, { Component } from 'react';

// Styles
import objectStyles from './objectStyles';

const ObjectName = ({ name, query }) => {
    if (query.includes(name)){
        return (<span style={objectStyles.query}> { name} </span>)
    } else {
        return (<span style={objectStyles.name}>{ name }</span>)
    }

}


export default ObjectName
