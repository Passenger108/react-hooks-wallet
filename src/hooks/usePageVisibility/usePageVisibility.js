import {useState, useEffect} from "react"


export default function usePageVisibility() {

    const [isVisible, setIsVisible] = useState (
        typeof document !== "undefined" ? !document.hidden : true
    )
    const [visibilityStatus, setVisibilityStatus] = useState (
        typeof document !== "undefined" ? document.visibilityState : "visible"
    )
    const [error , setError] = useState(null)


    useEffect(()=>{
        if(typeof document === "undefined"){
           setError(new Error ("document is not accessible"))
        }

        const handler = ()=>{
            setIsVisible(!document.hidden)
            setVisibilityStatus(document.visibilityState)
        }

        document.addEventListener("visibilitychange",handler)
        return ()=> document.removeEventListener("visibilitychange", handler)
    },[])


    return {isVisible, visibilityStatus, error}
}