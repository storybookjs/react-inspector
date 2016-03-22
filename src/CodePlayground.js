import React, { Component } from 'react';

import CodeEditor from './CodeEditor';

// import { ObjectInspector } from 'react-inspector';
// import ObjectInspector from '../../src/object-inspector/ObjectInspector';
// import TableInspector from '../../src/table-inspector/TableInspector';

import Inspect from '../../src/index'

// provide error message of line number and char
import JSONLint from 'json-lint';


import Monokai from './Monokai'



// import { overlayColorer } from './overlayColorer'

// enhanced
// const Inspector = overlayColorer(Inspect)
const Inspector = Inspect

// Playground API
//   promise
//   error, evalResult
//   <ErrorView>
//   <ResultView>

// Container component

class CodePlaygroundContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      codeText: this.props.codeText,
      selectedIndex: 0,
    }
  }

  handleCodeChange(codeText) {
    this.setState({
      codeText: codeText
    })
  }

  handleButtonClick(index){
    this.setState({
      selectedIndex: index
    })
  }

  render() {

    const codeText = this.state.codeText

    let evalResult;
    let error;

    try{
      evalResult = eval(`(${codeText.toString()})`);

      // debugger;
    }
    catch(e){
      // console.warn(e);
      error = e;
    }
    console.log(codeText)
    const lint = JSONLint(codeText);

    const selectedIndex = this.state.selectedIndex

    return <div className="container" style={{
                                              // marginTop: 25,
                                              maxWidth: 'none'
                                            }}>
              <div className="row" >
                <div className="six columns">
                  <div style={{lineHeight: '38px', height: 38}}>
                    <Monokai type="keyword"> const</Monokai>
                    <span> data </span>
                    <Monokai type="keyword"> = </Monokai>
                  </div>
                  <CodeEditor onChange={this.handleCodeChange.bind(this)}
                              codeText={codeText}
                              height="500px"
                              // lineNumbers={false}
                              style={{
                              //   // height: 600,
                              //   width: '100%',
                              //   height: 500,
                                   marginBottom: 25
                              }}
                              />
                </div>
                <div className="six columns">
                  {(()=>{
                    if(error){
                      const errorText = `${lint.error} at line ${lint.line}, character ${lint.character}`
                      console.log(errorText)
                      return <div>
                                <ButtonsRow buttonsText={["<Inspector data={data} />", "<Inspector table data={data} />"]} selectedIndex={selectedIndex} onButtonClick={this.handleButtonClick.bind(this)}/>
                                <CodeError errorText={errorText}/>
                             </div>
                    }
                    else{
                      return <div>
                                <ButtonsRow buttonsText={["<Inspector data={data} />", "<Inspector table data={data} />"]} selectedIndex={selectedIndex} onButtonClick={this.handleButtonClick.bind(this)}/>

                                {(()=>{
                                  if(selectedIndex == 0){
                                    // return <Inspector expandLevel={2} data={evalResult} />
                                    return <Inspector expandLevel={2} data={evalResult} />
                                    // return <ObjectInspector data={evalResult} initialExpandedPaths={['root', 'root.*']}>
                                    //        </ObjectInspector>
                                  }
                                  else{
                                    return <Inspector table data={evalResult} />
                                    // return <TableInspector data={evalResult}>
                                    //        </TableInspector>
                                  }
                                })()}
                              </div>
                    }
                  })()}
                </div>
              </div>
            </div>
  }
}

CodePlaygroundContainer.defaultProps = {
  codeText: "" // initial code text
}

// export default overlayColorer(CodePlaygroundContainer)
export default CodePlaygroundContainer

// props.children is component

const CodeError = ({ errorText }) =>
  <p style={{color: 'brown'}}>
    {errorText}
  </p>


const ButtonsRow = ({ buttonsText, selectedIndex, onButtonClick}) => {
  if(buttonsText.length === 2){
    return <div className="row" >
              <div className="six columns">
                <Button text={buttonsText[0]} selected={selectedIndex === 0} onClick={onButtonClick.bind(this, 0)}></Button>
              </div>
              <div className="six columns">
                <Button text={buttonsText[1]} selected={selectedIndex === 1} onClick={onButtonClick.bind(this, 1)}></Button>
              </div>
            </div>
  }
  return <div></div>
}

/*
Mock of ButtonsRow (interesting result)
 */
// const ButtonsRow = ({ buttonsText, selectedIndex, onButtonClick}) => {
//   if(buttonsText.length === 2){
//     return <div className="row" >
//               <div className="six columns">
//                 <ObjectInspector data={buttonsText[0]} />
//               </div>
//               <div className="six columns">
//                 <ObjectInspector data={buttonsText[1]} />
//               </div>
//             </div>
//   }
//   return <div></div>
// }

const Button = ({ text, selected, ...rest }) => {
  const buttonStyles = {
    width: '100%',
    textTransform: 'none', // override skeleton
    borderRadius: 0
  }
  const className = selected ? "button-primary" : ""
    return <button style={buttonStyles} className={className} {...rest} >
            <div style={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
              {text}
            </div>
           </button>
}
