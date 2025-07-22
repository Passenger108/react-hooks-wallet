import React,{useRef, useEffect } from "react"

/**
 * usePrevious is a read-only utility hook that stores and returns the previous value of a variable across renders.
 */

export default function usePrevious (value) {

    const ref = useRef();

    useEffect(()=>{
        ref.current = value;
    },[value]);

    return ref.current;
}