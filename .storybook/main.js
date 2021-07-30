module.exports = {
  core: {
    builder: 'webpack5',
  },
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  stories: ['../stories/*.*'],
};
