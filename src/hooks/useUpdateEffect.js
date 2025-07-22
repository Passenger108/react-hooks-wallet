import React, { useEffect, useRef } from "react"

export default function useUpdateEffect(sideEffect = () => {}, dependencyList = []) {

    const firstRender = useRef(true);
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        return sideEffect()  
    }, dependencyList)

}