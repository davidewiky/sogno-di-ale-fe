import path from "node:path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["/test/setup.ts", "dotenv/config"],
    reporters: ["default", "vitest-sonar-reporter"],
    outputFile: "./coverage/sonar-report.xml",
    coverage: {
      enabled: true,
      all: true,
      reporter: ["lcov", "html", "json", "text"],
      exclude: [
        ".next/**",
        ".eslintrc.js",
        ".prettierrc.js",
        "next.config.js",
        "next-env.d.ts",
        "*/**.d.ts",
        "coverage/*/**",
        "src/types/environment.d.ts",
        "next.config.mjs",
      ],
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "~TEST": path.resolve(__dirname, "./test"),
    },
  },
});
