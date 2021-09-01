import React, { useState } from "react";
import { useBar } from "./useBar";

export function Bar() {
  const [newBarName, setNewBarName] = useState("");
  // Pulling values and methods from the useBar hook which correspond to the
  // FooBarProvider's useReducer state that's being used in `index.tsx`.
  const { bar, changeBarName } = useBar();
  return (
    <div>
      <p>Bar Name: {bar.name}</p>
      <div>
        <input
          placeholder="Enter new Bar name"
          onChange={(e) => setNewBarName(e.target.value)}
        />

        <button
          onClick={() => {
            changeBarName(newBarName);
            setNewBarName("");
          }}
        >
          Set New Name
        </button>
      </div>
    </div>
  );
}
