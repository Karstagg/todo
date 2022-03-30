module.exports = {
  preset: 'jest-expo',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-hot-toast)',
  ],
  moduleNameMapper: {
    '^@indicators(.*)$': '<rootDir>/src/components/indicators$1',
    '^@inputs(.*)$': '<rootDir>/src/components/inputs$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@state(.*)$': '<rootDir>/src/state$1',
    '^@views(.*)$': '<rootDir>/src/views$1',
    '^@displays(.*)$': '<rootDir>/src/components/displays$1',
    '^@testUtils(.*)$': '<rootDir>/testUtils.tsx',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
