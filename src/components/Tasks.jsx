import {useRef} from 'react';
import { TasksContext } from '../store/tasksContext';
import {useContext} from 'react';
 
export default function Tasks({projects,projectID}){
    const {createTask,deleteTask} = useContext(TasksContext);
    const task = useRef();
    function clearOut(){
        if(task.current.value.trim()===''){
            return;
        }
        createTask(task.current.value);
        task.current.value = '';
    }
    const currentProject = projects.find((projest)=> projest.id === projectID);
    return (
        <div className="mt-4">
        <section className='flex'>
        <input ref={task}  className="bg-stone-200 mr-3 rounded-sm py-1 pl-2 pr-11"></input>
        <button onClick={clearOut}>Add Task</button>
        </section>
        <ul className={currentProject && currentProject.tasks.length > 0 ? 'bg-stone-100 mt-10 py-6 rounded-md' : 'mt-5'}>
            {!currentProject || currentProject.tasks.length === 0 ? <p>This project does not have any tasks yet</p> : ''}
             {projects.map((project)=>project.tasks.map((task)=>
             project.id===projectID && 
             <span className='flex   justify-between'>
             <li className='pl-4 flex-grow mb-4' key={task.taskID}>{task.message}</li>
             <button onClick={()=>deleteTask(task.taskID)} className='pr-4 hover:text-red-700'>Clear</button></span> ))}
        </ul>
        </div>
    )
}