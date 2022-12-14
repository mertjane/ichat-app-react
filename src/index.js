import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./features/store"; // persistor
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistStore(store)}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>
  //</React.StrictMode>
);
