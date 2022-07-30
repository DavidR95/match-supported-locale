import type { InitialOptionsTsJest } from 'ts-jest';

export default <InitialOptionsTsJest>{
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage',
};
