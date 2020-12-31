import React, { useState } from "react";

function HooksPrimitive() {
  const [isTrue, toggleIsTrue] = useState(true);
  const [userName, setUserName] = useState("");
  const [counter, setCounter] = useState(0);

  return (
    <section id="primitives">
      <h1>Primitives</h1>
      <div>
        <p>{isTrue.toString()}</p>
        <button onClick={() => toggleIsTrue(isTrue ? false : true)}>
          Toggle Truthiness
        </button>
      </div>

      <div>
        <p>User name: {userName}</p>
        <input
          type="text"
          value={userName}
          placeholder="Enter name"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div id="counter-buttons">
        <p>Count: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </section>
  );
}

export default HooksPrimitive;