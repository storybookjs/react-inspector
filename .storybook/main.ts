export default {
  stories: ['../stories/*.*'],

  framework: {
    name: '@storybook/react-vite',
  },

  viteFinal: async (config) => {
    // Disable minification to preserve function names
    if (config.build) {
      config.build.minify = false;
    }

    return config;
  },
};
