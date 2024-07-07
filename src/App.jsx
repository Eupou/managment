import Modal from "./components/Modal"
import Sidebar from "./components/Sidebar"
import View from "./components/View"
import { useState } from "react"

function App() {
  const [addingProject, setAddingProject] = useState(false)
  const [projects, setProjects] = useState([])

  function handleOpenForm() {
    setAddingProject((prev) => (prev = true))
  }

  function handleCloseForm() {
    setAddingProject((prev) => (prev = false))
  }

  function handleAddProject(project) {
    handleCloseForm()
    setProjects((prevProjects) => {
      const updatedArray = prevProjects.map((projectItem) => {
        return { ...projectItem, selected: false }
      })

      return [...updatedArray, project]
    })
  }

  function handleRemoveProject(project) {
    setProjects((prevProjects) => {
      const filteredArray = prevProjects.filter(
        (projectItem) => projectItem.title !== project.title
      )

      const updatedArray = filteredArray.map((item, id) => {
        if (id == 0) {
          return { ...item, selected: true }
        }
      })

      return [...updatedArray]
    })
  }

  function handleSelectProject(project) {
    setProjects((prevProjects) => {
      return prevProjects.map((projectItem) => {
        if (projectItem.title === project.title) {
          return { ...projectItem, selected: true }
        } else {
          return { ...projectItem, selected: false }
        }
      })
    })
  }

  function handleAddTask(project, task) {
    setProjects((prevProjects) => {
      return prevProjects.map((projectItem) => {
        if (projectItem.title === project.title) {
          return {
            ...projectItem,
            tasks: [...projectItem.tasks, task],
          }
        } else {
          return projectItem
        }
      })
    })
  }

  function handleRemoveTask(project, task) {
    setProjects((prevProjects) => {
      return prevProjects.map((projectItem) => {
        if (projectItem.title === project.title) {
          return {
            ...projectItem,
            tasks: projectItem.tasks.filter((itemTask) => itemTask !== task),
          }
        } else {
          return projectItem
        }
      })
    })
  }

  return (
    <>
      <main className="h-screen flex">
        <Sidebar
          addingProject={handleOpenForm}
          projects={projects}
          onSelect={handleSelectProject}
        />
        <View
          isAddingProject={addingProject}
          onAddProject={handleOpenForm}
          onRemoveProject={handleRemoveProject}
          onClose={handleCloseForm}
          addProject={handleAddProject}
          projects={projects}
          onAddTask={handleAddTask}
          onRemoveTask={handleRemoveTask}
        />
      </main>
    </>
  )
}

export default App
