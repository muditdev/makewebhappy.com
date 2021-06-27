const path = require('path');
module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];

    config.resolve.alias = {
      ...config.resolve.alias,
      happyui: path.resolve(__dirname, '../happyui'),
    };

    return config;
  },
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-styled-component-theme/dist/preset'],
};
