import React, { Component } from 'react';

import Inspector from '../../src/index'

import './tooltip.css';


/**
 * Declarative:
 * can be reused and tested
 *
 * {
 *   "code text displays correct":{
 *     	"path": "props.codeText"
 * 	    "inspector": "tree" | "object",
 * 	 }
 * }
 *
 *  // container components
 *  fetch()
 *    .then
 *    .then(data) => {
 *  	 	this.props.handleDebuggerEvent(data)
 *  }
 *
 *
 * showDebug: always | onHover | onClick
 *
 * handleEvent(e) {
 *
 * }
 */

// wrapper
// renderer = (data) => (<span>{JSON.stringify(data)}</span>
//
// debug(Button, (data) => <Inspector data={data} path="codeText" /> /* getDataRenderer */, boundaryWrapper)
//
//
//    show = "always" | ":hover" | ":click"

//    //  curried function
//    debug(Button) -> needs a renderer (for data)

// when hovered change overlay color
const overlayColorer = (ComposedComponent, backgroundColor = 'rgba(214, 144, 243, 0.13)' ) => {
  const ColorEnhancer = class extends Component {
   // handleHover
   constructor(props) {
     super(props)
     this.state = {
       hovered: false
     }
   }

   toggleHovered(e){
     this.setState({hovered: !this.state.hovered})
   }

   render() {
      const composedComponentProps = Object.assign({}, this.props)
      let styles = { }
      if(this.state.hovered){
        // styles = { boxShadow: "inset 0px 0px 0 2000px rgba(0,0,0,0.1)" }
        styles = {
          border: "red 2px solid",
          borderSizing: 'borderBox',
          boxShadow: "inset 0 0 0 50vmax rgba(0,0,0,0.1)"
        }
      }

    //  console.log(ComposedComponent.constructor)
    //  console.log(ComposedComponent.constructor.displayName) // undefined
    //  console.log(this.constructor) //
    //  console.log(this.constructor.displayName) // undefined
    //  console.log(this.name) // undefined

     // doesn't work for input, table
     return <div style={ styles }
                 onMouseEnter={ this.toggleHovered.bind(this) }
                 onMouseLeave={ this.toggleHovered.bind(this) } >
               {/*undefined<span>{this.constructor.displayName}</span>*/}
               {/*<Inspector data={this.props} />*/}

               {(()=>{
                 if(this.state.hovered)
                  return <div style={{ position: "absolute",
                                                      top: 40,/*left: 100,*/
                                                zIndex: 9999,
                                         background: 'white'
                                      }}>
                          <Inspector data={composedComponentProps}  />
                         </div>
               })()}
               <ComposedComponent {...this.props}>
               </ComposedComponent>
            </div>;
   }
  }
  return ColorEnhancer
}

export { overlayColorer }
// import { overlayColorer } from './overlayColorer'
// export default overlayColorer(Header)
