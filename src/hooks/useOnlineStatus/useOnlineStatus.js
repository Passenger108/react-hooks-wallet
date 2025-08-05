import {useState, useEffect} from "react"


export default function useOnlineStatus () {

    const [error, setError] = useState(null)
    const [onlineStatus , setOnlineStatus] = useState(
        typeof window.navigator !== "undefined" ? window.navigator.onLine : false
    )



    useEffect (()=>{
        if(typeof window.navigator === "undefined"){
            setError({message: "Environment does not support Navigator Interface"})
            return;
        }

        const handler = ()=> setOnlineStatus(window.navigator.onLine);
        ["online","offline"].forEach((event)=>window.addEventListener(event,handler));
        
        return ()=>{
            ["online","offline"].forEach((event)=>window.removeEventListener(event,handler));
        }

    },[])

    return {onlineStatus, error}

}