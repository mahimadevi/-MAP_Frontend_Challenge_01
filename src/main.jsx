
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const esbuildOptions = {
  entryPoints: ["src/main.jsx"],
  bundle: true,
  outdir: "dist",
  loader: {
    ".js": "jsx",
    ".jsx": "jsx",
    // Add other file types as needed
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
