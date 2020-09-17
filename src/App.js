import React from "react";

import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
function App() {
  return (
    <div className="app">
      <div className="app__body">
        <h1>Whatsapp mern</h1>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
