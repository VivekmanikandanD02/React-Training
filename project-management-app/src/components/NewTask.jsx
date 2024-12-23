import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [enteredText, setEnteredText] = useState("");
  function handleTextChange(event) {
    setEnteredText(event.target.value);
  }

  function addTask() {
    if (enteredText.trim().length === 0) {
      return;
    }
    setEnteredText("");
    onAddTask(enteredText);
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredText}
        onChange={handleTextChange}
      />
      <button className="text-stone-700 hover:text-stone-950" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}
