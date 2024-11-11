import { defineConfig } from "cypress";
import { debuggerPlugin } from "cypress-debugger";

export default defineConfig({
  e2e: {
    excludeSpecPattern: "*.js",
    specPattern: "./cypress/integration/*.cy.ts",
    fixturesFolder: "./cypress/fixtures",
    video: true,
    videoUploadOnPasses: false,
    videoCompression: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      debuggerPlugin(on, config);
      return config;
    },
  },
});
