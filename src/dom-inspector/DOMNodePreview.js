import React, { Component, PropTypes } from 'react';

import shouldInline from './shouldInline'

const styles = {
  htmlTag: {
    color: "rgb(168, 148, 166)"
  },
  htmlTagName: {
    color: "rgb(136, 18, 128)",
    textTransform: "lowercase",
  },
  htmlCloseTag: {
    color: "rgb(168, 148, 166)",
  },
  htmlCloseTagName: {
    color: "rgb(136, 18, 128)",
    textTransform: "lowercase",
  },
  htmlAttributeName: {
    color: "rgb(153, 69, 0)"
  },
  htmlAttributeValue: {
    color: "rgb(26, 26, 166)"
  },
  htmlComment: {
    color: "rgb(35, 110, 37)"
  },
  htmlDoctype: {
    color: "rgb(192, 192, 192)"
  }
}

const OpenTag = ({ tagName, attributes }) => {
  return (
    <span style={styles.htmlTag}>
      {'<'}
      <span style={styles.htmlTagName}>
        { tagName }
      </span>

      {(()=>{
        let attributeNodes = []
        if(attributes){
          for(let i = 0; i < attributes.length; i++){
            const attribute = attributes[i]
            attributeNodes.push(
                            <span key={i}>
                              {' '}
                              <span style={styles.htmlAttributeName}>
                                {attribute.name}
                              </span>
                              {'="'}
                              <span style={styles.htmlAttributeValue}>
                                {attribute.value}
                              </span>
                              {'"'}
                            </span>
                          )
            return attributeNodes
          }
        }
      })()}

      {'>'}
    </span>
  )
}

const CloseTag = ({ tagName, style }) =>
  <span style={{...styles.htmlCloseTag, ...style}}>
    {'</'}
    <span style={styles.htmlCloseTagName}>
      {tagName}
    </span>
    {'>'}
  </span>

const nameByNodeType = {
  1: "ELEMENT_NODE",
  3: "TEXT_NODE",
  7: "PROCESSING_INSTRUCTION_NODE",
  8: "COMMENT_NODE",
  9: "DOCUMENT_NODE",
  10: "DOCUMENT_TYPE_NODE", // http://stackoverflow.com/questions/6088972/get-doctype-of-an-html-as-string-with-javascript
  11: "DOCUMENT_FRAGMENT_NODE",
}

const DOMNodePreview = ({ isCloseTag, name, data, expanded }) => {
  if(isCloseTag) {
    return <CloseTag style={{ marginLeft: -12 /* hack: offset placeholder */ }} tagName={data.tagName}/>
  }

  switch (data.nodeType) {
    case Node.ELEMENT_NODE:
      return (
        <span>
          <OpenTag tagName={data.tagName} attributes={data.attributes}/>

          { shouldInline(data) ? data.textContent : ( !expanded && "…") }

          { !expanded && <CloseTag tagName={data.tagName}/> }
        </span>
      )
    case Node.TEXT_NODE:
      return <span>{data.textContent}</span>
    case Node.COMMENT_NODE:
      return <span style={styles.htmlComment}>{'<!--'}{data.textContent}{'-->'}</span>
    case Node.PROCESSING_INSTRUCTION_NODE:
      return <span>{data.nodeName}</span>
    case Node.DOCUMENT_TYPE_NODE:
      return (
        <span style={styles.htmlDoctype}>
          {'<!DOCTYPE '}{data.name}
          {data.publicId ? ` PUBLIC "${data.publicId}"` : ''}
          {!data.publicId && data.systemId ? ' SYSTEM': ''}
          {data.systemId ? ` "${data.systemId}"` : ''}
          {'>'}
        </span>
      )
    case Node.DOCUMENT_NODE:
      return <span>{data.nodeName}</span>
    case Node.DOCUMENT_FRAGMENT_NODE:
      return <span>{data.nodeName}</span>
    default:
      return <span>{nameByNodeType[data.nodeType]}</span>
  }
}

DOMNodePreview.propTypes = {
  /** If true, just render a close tag */
  isCloseTag: PropTypes.bool,
  /**  */
  name: PropTypes.string,
  /** The DOM Node */
  data: PropTypes.object.isRequired,
  /** Whether the DOM node has been expanded. */
  expanded: PropTypes.bool.isRequired,
}

export default DOMNodePreview
