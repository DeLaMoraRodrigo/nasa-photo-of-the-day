import React from "react";
import "./App.css";
import Card from "./components/Card";
import CardData from "./components/CardData";
import SecondCard from "./components/SecondCard";
import SecondCardData from "./components/SecondCardData";

function App() {
  return (
    <div className="App">
      <CardData />
      <SecondCardData />
    </div>
  );
}

export default App;
