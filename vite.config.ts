import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";


// All environment variables should be stored as a string in this object
const keys = ["REACT_APP_BASE_URL"];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const processEnv: { [key: string]: string | undefined } = {};
  keys.forEach((key) => (processEnv[key] = env[key]));
  return {
    define: {
      "process.env": processEnv,
    },
    plugins: [react()],
  };
});
