import Input from "./Input"
import {useRef} from 'react'
import Dialog from "./Dialog";

export default function NewProject({onSaving,onCancel}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const dialog = useRef();

  
    const handleData = function(){
        if(title.current.value.trim()==='' || description.current.value.trim()===''){
            dialog.current.open();
            return;
        }
        
       onSaving({
            title : title.current.value,
            description : description.current.value,
            dueDate : dueDate.current.value
        });


    }


  

    return (<>
        <Dialog ref={dialog} buttonCaption="Okay">
            <h1 className="font-bold ml-3 mt-5 mb-3">Invalid Input</h1>
            <p className="ml-3 text-xs mb-3 font-medium">Oops... looks like you forgot to enter a value.</p>
            <p className="ml-3 text-xs mb-3 font-medium">Please make sure you provide a valid value for every input field.</p>
        </Dialog>

        <div className="mt-16  w-full">
            <menu className="flex justify-center gap-5 w-4/5">
            <button className="font-medium hover:text-slate-700" onClick={onCancel}>Cancel</button>
            <button className="bg-slate-900 text-slate-200 px-5 py-1 rounded hover:bg-slate-700 hover:text-slate-50 " onClick={handleData}>Save</button>
            </menu>
        <div className="">
            <Input type="text" ref= {title} label="TITLE"></Input>
            <Input ref={description} label="DESCRIPTION" textarea></Input>
            <Input type="date" ref={dueDate} label="DUE DATE"></Input>
        </div>
        </div>
        </>
    )
}