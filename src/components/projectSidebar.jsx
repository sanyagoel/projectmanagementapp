export default function ProjectSideBar({onSelect,projects,onId,projectID}){

    // const onClickProject = function(){
    //     return true;
    // }
   
    return (
        
        <aside className=" bg-black lg:w-1/6 sm:w-2/6 px-12 py-16 rounded-r-xl text-blue-50 h-full sm:max-w-1/6">
            <h1 className="font-bold uppercase mb-6">Your Projects</h1>
            <button className="rounded bg-stone-700 px-3 py-1 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={onSelect}> + Add Project</button>

            <ul className="w-full mt-6">
            {projects.map((project)=>{
                console.log('projects testing here', projectID);

                let cssClasses = 'hover:bg-stone-800 hover:text-stone-200 rounded-sm lg:pr-40  pl-2 mb-2 py-1  sm:pr-32 max-w-6 overflow-hidden';
                if(project.id===projectID){
                    cssClasses+= ' bg-stone-800 text-stone-200 '
                }else{
                    cssClasses+=' text-stone-400'
                }
               return( <li key={project.id}>
                <button className={cssClasses} onClick={()=>onId(project.id)}>{project.title}</button>
            </li>)})}
            </ul>
        </aside>
        
    )
}