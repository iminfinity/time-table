import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/header.component";
import Table from "./components/table/table.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
    </div>
  );
}

export default App;
