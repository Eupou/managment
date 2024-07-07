import { useRef } from "react"
import Modal from "./Modal"

export default function NewProjectForm({ onClose, addProject }) {
  const title = useRef()
  const description = useRef()
  const dueDate = useRef()
  const modal = useRef(null)

  function handleButtonClick() {
    if (
      title.current.value.trim() === "" ||
      description.current.value.trim() === "" ||
      dueDate.current.value.trim() === ""
    ) {
      modal.current.open()
      return
    }

    addProject({
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
      tasks: [],
      selected: true,
    })
  }

  return (
    <div className="grow flex justify-center">
      <Modal ref={modal}>You left something empty</Modal>
      <div className="w-[80%] mt-24">
        <menu className="flex flex-row-reverse">
          <button
            onClick={handleButtonClick}
            className="px-6 py-2 text-lg rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="text-stone-800 text-lg hover:text-stone-950 mr-4"
          >
            Cancel
          </button>
        </menu>

        <form action="">
          <div className="mt-4">
            <label className="text-sm font-bold uppercase text-stone-500">
              Title
            </label>
            <input
              ref={title}
              type="text"
              className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-bold uppercase text-stone-500">
              Description
            </label>
            <textarea
              ref={description}
              className="resize-none w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
              id=""
            ></textarea>
          </div>

          <div className="mt-4">
            <label className="text-sm font-bold uppercase text-stone-500">
              due Date
            </label>
            <input
              ref={dueDate}
              type="date"
              className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
