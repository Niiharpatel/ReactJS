import React from "react";
import { Provider } from "react-redux";
import User from "./User/User";
import { store } from "./App/store";

function Wrapper() {
  return (
    <>
      <Provider store={store}>
        <User />
      </Provider>
    </>
  );
}

export default Wrapper;
