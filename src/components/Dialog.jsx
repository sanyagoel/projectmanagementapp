import {forwardRef,useImperativeHandle, useRef} from 'react';

const Dialog = forwardRef(function({buttonCaption,children},ref){
    const dia = useRef();

    useImperativeHandle(ref,()=>{
        return {
            open : ()=> dia.current.showModal()  
            }
        })

        return (
            <>
             <dialog ref={dia} className='backdrop:bg-slate-700/90 w-80 h-44 rounded-md'>{children}
            <form method="dialog">
            <button  className=' ml-60 text-sm bg-stone-700 rounded text-stone-300 hover:bg-slate-500 hover:text-stone-200 px-4 py-1'>{buttonCaption}</button>
            </form>
            </dialog>
            </>
        )
    })




export default Dialog;