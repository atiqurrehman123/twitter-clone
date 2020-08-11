import React from "react";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Widgets from "./Widgets";

import "./App.css";

function App() {
  return (
    //BEM
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />

      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default App;
