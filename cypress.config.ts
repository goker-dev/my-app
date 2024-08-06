import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '9oz29q',
  e2e: {
    baseUrl: 'http://localhost:4174',
    supportFile: false,
    excludeSpecPattern: ['*/*/**/screenshot.cy.ts'],
  },
});
