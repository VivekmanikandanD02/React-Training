import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function addNewProject(project) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...project,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function cancelNewProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectedProject(projectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  function handleAddTask(task) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        task: task,
        id: taskId,
        projectId: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        selectedTaskId: undefined,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  console.log(projectsState);
  const findSelectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={findSelectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      tasks={projectsState.tasks}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={addNewProject} onCancel={cancelNewProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectedProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
