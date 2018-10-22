module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/__mocks__/fileMock.js",
    "\\.(css|scss|less)$": "<rootDir>/tests/__mocks__/styleMock.js"
  },
  rootDir: '../',
  testMatch: [
    '**/tests/**/*.tsx'
  ],
  transformIgnorePatterns: [
    "/node_modules/(?!lodash-es/)"
  ],
  setupFiles: [
    "<rootDir>/tests/__mocks__/shim.js"
  ],
  coverageDirectory: "<rootDir>/tests/__coverage__/",
};
