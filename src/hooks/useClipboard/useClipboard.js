import {useState, useEffect, useCallback} from "react"


export default function useClipboard ({resetInterval = 2000}){
    const [copied , setCopied] = useState(false);
    const [error, setError] = useState(null);

    const copy = useCallback(async (text) => {
        try{
            await navigator.clipboard.writeText(text)
            setCopied(true);
        }catch(error){
            setError(error);
        }
    },[])
    
    useEffect(()=>{
        if (!copied && !error) return;

       const id =  setTimeout(()=>{
            setCopied(false)
            setError(null)
        },resetInterval)
    return ()=>clearTimeout(id)
    },[copied,error,resetInterval])


    return {copied , copy, error}
}