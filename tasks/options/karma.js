var files = require('../files');

module.exports = {
  options: {
    frameworks: [
      'jasmine'
    ],
    files: files.testEnvKarma.concat([files.unitTests])
  },
  all: {
    options: {
      browsers: ['PhantomJS', 'Chrome', 'Firefox'],
      singleRun: true
    }
  },
  headless: {
    options: {
      browsers: ['PhantomJS'],
      singleRun: true
    }
  },
  travis: {
    options: {
      browsers: ['PhantomJS', 'Firefox'],
      reporters: ['dots'],
      singleRun: true
    }
  },
  watch: {
    options: {
      browsers: ['Chrome'],
      background: true
    }
  }
};
