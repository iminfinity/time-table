import React, { useState } from "react";
import "./App.scss";
import Header from "./components/header/header.component";
import Table from "./components/table/table.component";
import Today from "./components/today/today.component";

function App() {
  const [today, setToday] = useState(false);

  const changeToday = (item) => {
    setToday(item);
  };
  return (
    <div className="App">
      <Header changeToday={changeToday} />
      {today ? <Today /> : <Table />}
    </div>
  );
}

export default App;
