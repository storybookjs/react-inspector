export default {
  name: {
    color: 'rgb(136, 19, 145)',
  },
  query: {
    color: 'rgb(136, 19, 145)',
    backgroundColor: 'rgb(255, 255, 0)'
  },
  value: {
    null: {
      color: 'rgb(128, 128, 128)',
    },
    undefined: {
      color: 'rgb(128, 128, 128)',
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
