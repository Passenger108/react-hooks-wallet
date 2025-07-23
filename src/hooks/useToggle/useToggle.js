import React,{useState, useCallback} from "react"


export default function useToggle(initialValue = false , reverseValue){
    const [value, setValue]= useState(initialValue);

    const toggle = useCallback(
        ()=>{
            const resolvedReverse = reverseValue!==undefined ? reverseValue : !initialValue;
            setValue(previousValue => (previousValue===initialValue? resolvedReverse: initialValue))
        }
        , []
    )

    return [value, toggle]
}


/**
 * We use useCallback to memoize the toggle function.
 * so that the returned function is stable across renders.
 */