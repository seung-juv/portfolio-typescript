const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/preset-scss',
    'storybook-addon-styled-component-theme/dist/preset',
    'storybook-dark-mode',
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '#assets': path.resolve(__dirname, '../src/assets'),
      '#types': path.resolve(__dirname, '../src/types'),
      '#components': path.resolve(__dirname, '../src/components'),
      '#pages': path.resolve(__dirname, '../src/pages'),
      '#hooks': path.resolve(__dirname, '../src/hooks'),
      '#store': path.resolve(__dirname, '../src/store'),
      '#data': path.resolve(__dirname, '../src/data'),
      '#/': path.resolve(__dirname, '../src'),
    };
    return config;
  },
};
