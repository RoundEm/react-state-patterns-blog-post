import React from "react";
import HooksPrimitives from "./HooksPrimitives";
import HooksArrayOfPrimitives from "./HooksArrayOfPrimitives";
import HooksObjects from './HooksObjects'
import HooksArrayOfObjects from './HooksArrayOfObjects'
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <HooksArrayOfObjects />
      <HooksObjects />
      <HooksPrimitives />
      <HooksArrayOfPrimitives />
    </div>
  );
}
