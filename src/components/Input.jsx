import {forwardRef} from 'react';

const Input =  forwardRef(function({label , textarea , ...props},ref){
        return (
            <p className="w-11/12">
            <label className="block mb-2 text-xs font-bold text-stone-500">{label}</label>
           { textarea ? <textarea  ref={ref} className="bg-stone-200 w-2/4 px-2 py-4 mb-2 border-stone-300 rounded-sm border-b-4 border-b-stone-300" {...props}  /> : <input ref={ref} className="bg-stone-200 w-2/4 py-1 px-2 mb-2 border-stone-300 rounded-sm  border-b-4 border-b-stone-300" {...props}/>}
           </p>
        )
});

export default Input;

