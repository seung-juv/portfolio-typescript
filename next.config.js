const dotenvLoad = require('dotenv-load');

dotenvLoad();

module.exports = {
  webpack(config) {
    config.resolve.modules.push(__dirname);

    return config;
  },
};
