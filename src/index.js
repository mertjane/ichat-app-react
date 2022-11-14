import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./features/store"; // persistor
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    {/*<PersistGate loading={null} persistor={persistor}>*/}
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
    {/*</PersistGate>*/}
  </Provider>
  //</React.StrictMode>
);
