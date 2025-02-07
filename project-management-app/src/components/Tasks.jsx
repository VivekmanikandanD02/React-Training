import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  function handleAddTask(taskText) {
    onAddTask(taskText);
  }

  function handleDeleteTask(id) {
    onDeleteTask(id);
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} />

      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span className="text-stone-700">{task.task}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => handleDeleteTask(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
