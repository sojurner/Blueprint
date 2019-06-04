module.exports = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/private/jest/fileMock.js',
    '^components$': '<rootDir>/private/jest/componentsMock.js',
    '^@atoms(.*)$': '<rootDir>/src/components/atoms$1',
    '^@molecules(.*)$': '<rootDir>/src/components/molecules$1',
    '^@orgnaisms(.*)$': '<rootDir>/src/components/orgnaisms$1'
  },
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['<rootDir>/private/jest/setupTests.ts'],
  testPathIgnorePatterns: ['/node_modules']
};
