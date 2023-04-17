import React, { useState, KeyboardEvent } from "react";
import "./style.css";

type Props = {
  onEnter: (taskName: string) => void;
};

function AddArea({ onEnter }: Props) {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  return (
    <div className="container_area">
      <div className="image">+</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
}

export default AddArea;
