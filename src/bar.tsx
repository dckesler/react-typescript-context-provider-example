import React, { useState } from "react";
import { useBar } from "./useBar";

export function Bar() {
  const [newBarName, setNewBarName] = useState("");
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
