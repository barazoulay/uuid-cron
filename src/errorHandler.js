const { UUID_INIT_ERROR } = require('./constants');

function initError() {
  return new Error(UUID_INIT_ERROR);
}

module.exports = initError;
