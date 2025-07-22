import React, {useState,useCallback} from "react"



export default function useCounter(initialValue=0,{step=1,min=undefined,max=undefined}={}){
    const [value, setValue] = useState(initialValue);

    const increment = useCallback(
        ()=>{ 
            setValue(value=> max != undefined ? Math.min(value+step,max) : value+step ) 
        } , []
    )
    const decrement = useCallback(
        () => {
             setValue(value=> min != undefined ?  Math.max(min,value-step) :(value-step)) 
        } , []
    )
    const reset = useCallback(
        () => { 
            setValue(initialValue) 
        } , []
    )

    return [value, {increment,decrement,reset}]
}