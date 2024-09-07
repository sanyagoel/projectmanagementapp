import {createContext} from 'react';

// createTask,projects,projectID,deleteTask
export const TasksContext = createContext({
    createTask : ()=>{},
    deleteTask : ()=>{}
})

