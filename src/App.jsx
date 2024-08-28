
import ProjectSideBar from './components/projectSidebar';
import NewProject from './components/newProject';
import NoProject from './components/noProject';
import ViewProject from './components/viewProject';

import {useState} from 'react';
import Tasks from './components/Tasks';
function App() {
  // const [tasks,setTasks] = useState({
  //   tasks : [],
  //   projectId : selectedProjectId
  // })
  const [clicked,setClick] = useState({
    selectedProjectId : undefined,
    projects : []
  });

// const createTask = function(task){
//     const updatedTasks =  tasks.map((task3)=>{
//         if(task3.projectId===selectedProjectId){
//           return {
//             ...task3,
//            tasks : [...task3.tasks,task]
//         }}
//       })

//       setTasks((tasks)=>{
//         return {
//           ...tasks,
//           tasks : updatedTasks
//         }
//       })
// }

  // console.log("clicked" + clicked.selectedProjectId);
  const onSelect= function(){
      setClick((prevState)=> {
        return {
        ...prevState,
        selectedProjectId : null
  }})
  }

  const onSaving = function(projectData){
      const projectid = Math.random();
      setClick((prevData)=>{
        const NewProject = {
          ...projectData,
          id : projectid,
          tasks  : []
        }
          return {
            ...prevData,
            selectedProjectId : projectid,
            projects : [...prevData.projects,NewProject]
          }
      })

  }

  const selectId = function(projectID){
      setClick((prevData)=>{
        return {
          ...prevData,
          selectedProjectId : projectID
        }
      })
  }

  const onDelete = function(){
    setClick((prevData)=>{
      console.log("preVDATA" + prevData);
     const newprev =  prevData.projects.filter((prev)=> prev.id!==prevData.selectedProjectId);

     console.log("newprev" + newprev);
     return {
      selectedProjectId : undefined,
      projects : newprev
     }
    })
  }

  const addTask = function(task){
    const tasks = clicked.projects.map((projects)=>{
      console.log("selected"+ clicked.selectedProjectId)
      if(projects.id === clicked.selectedProjectId){
        const newTask = {
          taskID : Math.random()*10,
          message : task
        }
      projects.tasks = [...projects.tasks,newTask];
      }
      return projects;
    })
    setClick((task)=> {
        return {
          ...task,
          projects : tasks
        }
    })
  }


  

  const deleteTask = function(deletedTaskId){

    let project5 = clicked.projects.map((proj)=>{
      if(proj.id === clicked.selectedProjectId){
        return {
          ...proj,
          tasks : proj.tasks.filter((task)=> task.taskID !== deletedTaskId)
        }
      }
      return proj;
    })


    // let project2 = clicked.projects.filter((proj)=>((proj.id !== clicked.selectedProjectId)||(proj.id === clicked.selectedProjectId && !clicked.projects.find((project4)=> project4.tasks.taskID === deletedTaskId ))));
    setClick((prevDa)=>{
    return {
      ...prevDa,
      projects : project5
    };})
  }

  const onCancel = function(){
    setClick((prevData)=>{
      return {
        ...prevData,
        selectedProjectId : undefined
      }
    })
  }
console.log(clicked.projects);
  let content;
  if(clicked.selectedProjectId===null){
    content= <NewProject onSaving={onSaving} onCancel = {onCancel}/>
  }
  else if(clicked.selectedProjectId===undefined){
    content= <NoProject onSelect={onSelect}/>
  }else{
    content = <ViewProject projects = {clicked.projects} projectID={clicked.selectedProjectId} onDelete={onDelete} createTask={addTask} deleteTask={deleteTask}/>
  }

  return (
    <>
    <main className="h-screen mt-10 flex gap-8 w-full">
     <ProjectSideBar onSelect={onSelect} projects={clicked.projects} onId = {selectId} projectID={clicked.selectedProjectId}/>
      {content}     
    </main>
    </>
  )
}

export default App
