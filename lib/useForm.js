import { useEffect } from 'react';
import {useState} from 'react';
export default function useForm(initial={}) {

    function handleChange(e){
        let {value,name,type}=e.target;
        if (type==="number") {
            value=parseInt(value);
        }
        
        if((name==="paid") && (type==="select-one"))
        {
            value=Boolean(value);
        }

        if(type==='file'){
            [value]=e.target.files;
        }
        setInputs({
            ...inputs,

            [name]:value
        });
    }

    function resetForm(){
        setInputs(initial);
    }

    function clearForm(){
        const blankState=Object.fromEntries(Object.entries(inputs).map(([key,value])=>[key,'']));
        setInputs(blankState);
    }

    
    const [inputs, setInputs] = useState(initial);
    const initialValues=Object.values(initial).join('');
    
    useEffect(()=>{
        setInputs(initial);
    },[initialValues]);


    return {
        inputs,
        handleChange,
        resetForm,
        clearForm,
    }
    
}
