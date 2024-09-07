import Tasks from "./Tasks";


export default function ViewProject({projects,projectID,onDelete}){
    console.log('Projects:', projects);
    console.log('productID'+ projectID);
    
    const requiredProject = projects.find((project)=>project.id == projectID);
    const formatteDate = new Date(requiredProject.dueDate).toLocaleString('en-US',{
        year : 'numeric',
        month : 'short',
        day : 'numeric'
    })
    return (
        <>
            <div className="flex flex-col mt-12 w-2/5">
            <div className="flex w-full justify-between">
            <h1 className="font-bold text-3xl flex-grow mr-4 mb-4 text-stone-800">{requiredProject.title}</h1>
            <button className="w-100px" onClick={onDelete}>Delete</button>
            </div>
            
            <p className="mb-4 text-stone-500">{formatteDate}</p>
            <p className="mb-4 text-black whitespace-pre-wrap">{requiredProject.description}</p>
            <hr className="border-stone-300 w-full mb-4 border-2"></hr>
            <p className="text-black font-bold text-2xl">Tasks</p>
            <Tasks projects={projects} projectID={projectID}></Tasks>
            </div>
           
        </>
    )
}