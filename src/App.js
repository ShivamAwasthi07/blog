import logo from "./logo.svg";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { store } from "./services/store";
// import { store } from "./service/store";
import { Provider } from "react-redux";
import { Fragment } from "react";
import Router from "./routes/Router";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Router />
        <ToastContainer
          hideProgressBar
          position="top-center"
          limit={1}
          newestOnTop={true}
          autoClose={2000}
        />
      </Provider>
    </Fragment>
  );
}

export default App;
