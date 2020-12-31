import React, { useState } from "react";
import NumberInput from "./NumberInput";

function HooksArrayOfPrimitives() {
  const originalUsers = ["Tom", "Jill", "Sarah", "John"];
  const [newUser, setNewUser] = useState("");
  const [indexToAdd, setIndexToAdd] = useState("");
  const [indexToRemove, setIndexToRemove] = useState("");
  // This is the array of values that we're interested in updating for this component:
  const [users, setUsers] = useState(originalUsers);

  return (
    <section id="arrOfPrimitives">
      <h1>Array of Primitives</h1>

      <ul>
        USERS: {users.map((user, i) => {
          return <li key={i}>{user}</li>
        })}
      </ul>

      <input
        type="text"
        value={newUser}
        placeholder="Enter user"
        onChange={(e) => {
          setNewUser(e.target.value);
        }}
      />
      <br />

      <button
        onClick={() => {
          setUsers([...users, newUser]);
        }}
      >
        Add user to end
      </button>

      <button
        onClick={() => {
          setUsers([newUser, ...users]);
        }}
      >
        Add user to start
      </button>
      <br />

      <button
        onClick={() => {
          setUsers([
            ...users.slice(0, indexToAdd),
            newUser,
            ...users.slice(indexToAdd)
          ]);
        }}
      >
        Add user at index:
      </button>
      <NumberInput 
        value={indexToAdd} 
        onChange={setIndexToAdd} 
        maxIndex={users.length}
      />
      <br />
      <br />

      <button
        onClick={() => {
          setUsers([...users.slice(1)]);
        }}
      >
        Remove first user
      </button>

      <button
        onClick={() => {
          setUsers([...users.slice(0, users.length - 1)]);
        }}
      >
        Remove last user
      </button>
      <br />

      <button
        onClick={() => {
          setUsers([
            ...users.slice(0, indexToRemove),
            ...users.slice(indexToRemove + 1)
          ]);
        }}
      >
        Remove user at index:
      </button>
      <NumberInput 
        value={indexToRemove} 
        onChange={setIndexToRemove} 
        maxIndex={users.length}
      />
      <br />
      <br />

      <button
        onClick={() => {
          setNewUser("");
          setIndexToAdd("");
          setIndexToRemove("");
          setUsers(originalUsers);
        }}
      >
        Reset
      </button>

    </section>
  );
}

export default HooksArrayOfPrimitives;
