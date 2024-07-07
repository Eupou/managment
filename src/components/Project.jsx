import { useRef } from "react"

export default function Project({
  project,
  onRemoveProject,
  onAddTask,
  onRemoveTask,
}) {
  const date = new Date(project.dueDate)
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
  const dateFormated = date.toLocaleDateString("en-US", options)

  const inputValue = useRef(null)

  function handleAddTask() {
    if (inputValue.current.value.trim() === "") return
    onAddTask(project, inputValue.current.value)
    inputValue.current.value = ""
  }

  return (
    <div className="grow flex justify-center">
      <div className="w-[80%] mt-24">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold text-stone-700 my-4">
            {project.title}
          </h2>
          <button
            onClick={() => onRemoveProject(project)}
            className="text-stone-700 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <div className="text-xl text-stone-500">{dateFormated}</div>
        <p className="text-xl mt-4 text-stone-900">{project.description}</p>
        <hr className="h-[2px] bg-stone-400 mt-4" />
        <h2 className="text-3xl font-bold text-stone-700 my-4">Tasks</h2>
        <div className="flex items-center gap-4">
          <input
            ref={inputValue}
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            type="text"
          />
          <button
            onClick={handleAddTask}
            className="text-stone-700 hover:text-stone-950"
          >
            Add Task
          </button>
        </div>
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {project.tasks.length > 0 &&
            project.tasks.map((task) => (
              <li key={task} className="flex justify-between my-4">
                {task}
                <button
                  onClick={() => onRemoveTask(project, task)}
                  className="text-stone-700 hover:text-stone-950"
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
