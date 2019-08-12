import React from "react";
import { BrowserRouter } from "react-router-dom";
import StatTracker from "./containers/StatTracker";

function App(props) {
  return (
    <BrowserRouter>
      <StatTracker />
    </BrowserRouter>
  );
}

export default App;
