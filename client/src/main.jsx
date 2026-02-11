import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ThemeProvider from "./components/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Provider must be OUTSIDE */}
    <Provider store={store}>
      
      {/* PersistGate must be INSIDE Provider */}
      <PersistGate persistor={persistor}>
        
        {/* ThemeProvider inside */}
        <ThemeProvider>
          <App />
        </ThemeProvider>

      </PersistGate>
    </Provider>
  </StrictMode>
);
