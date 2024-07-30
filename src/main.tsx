import { createRoot } from "react-dom/client";
import { App } from "./App";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
