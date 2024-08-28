import noprojectimg from '../assets/no-projects.png';

export default function NoProject({onSelect}){
    return (
        <>
        <section className="flex flex-col items-center w-full mt-24 gap-3">
            <img src={noprojectimg} alt="add project :)" className="w-16 h-auto"></img>
            <h1 className='font-bold text-stone-600 text-xl'>No Project Selected</h1>
            <p className='text-stone-500'>Select a project or get started with a new one</p>
            <button className='bg-stone-700 rounded px-4 py-2 text-stone-400 mt-6 text-sm font-normal hover:bg-stone-600 hover:text-stone-200' onClick={onSelect}>Create new project</button>
        </section>
        </>
    )
}