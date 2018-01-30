module.exports = function (wallaby) {
  return {
    files: [
      'client/src/**/*.js'
    ],
    tests: [
      'client/src/**/*.test.js'
    ],
    env: {
      type: 'node'
    }
  };
};