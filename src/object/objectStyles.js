export default {
  name: {
    color: 'rgb(136, 19, 145)',
  },
  nameDimmed: {
    color: 'rgb(136, 19, 145)',
    opacity: 0.6,
  },
  value: {
    null: {
      color: 'rgb(128, 128, 128)',
    },
    undefined: {
      color: 'rgb(128, 128, 128)',
    },
    regexp: {
      color: 'rgb(196, 26, 22)',
    },
    string: {
      color: 'rgb(196, 26, 22)',
    },
    symbol: {
      color: 'rgb(196, 26, 22)',
    },
    number: {
      color: 'rgb(28, 0, 207)',
    },
    boolean: {
      color: 'rgb(28, 0, 207)',
    },
    function: {
      keyword: {
        color: 'rgb(170, 13, 145)',
        fontStyle: 'italic',
      },
      name: {
        fontStyle: 'italic',
      },
    },
  },
};

/*
htmlDoctype
rgb(192, 192, 192)

htmlTagName htmlCloseTagName
rgb(136, 18, 128)

htmlAttributeName
rgb(153, 69, 0)

htmlAttributeValue
rgb(26, 26, 166)

htmlTextNode bogus
unicode-bidi: -webkit-isolate

<a> htmlResourceLink
#00e
text-decoration: underline

htmLComment
rgb(35, 110, 37)

elementsDisclosure (spacing)
  padding: 0 0 0 14px;
  margin-top: 1px;
  margin-left: -2px;
  word-wrap: break-word;
  position: relative;
  min-height: 14px;
*/
