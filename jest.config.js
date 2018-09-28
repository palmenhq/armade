module.exports = {
  transform: {
    '\\.ts$': 'ts-jest',
  },
  testRegex: '\\.test\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  setupFiles: ['<rootDir>/test-setup.js'],
}
