import {useState,useEffect} from "react"


export default function useMediaQuery(QUERY){

    const [matches, setMatches] = useState(()=>{
        // SSR safety
        if(typeof window === 'undefined') return false;
        return window.matchMedia(QUERY).matches;
    }) 

    useEffect(()=>{

        if(typeof window === 'undefined') return false;

        const mediaQueryList = window.matchMedia(QUERY)
        const handleMediaChange = (e)=>setMatches(e.matches)

        
        mediaQueryList.addEventListener('change',handleMediaChange)
        setMatches(mediaQueryList.matches)

        return ()=>mediaQueryList.removeEventListener('change',handleMediaChange)

    },[QUERY])

    return matches

}