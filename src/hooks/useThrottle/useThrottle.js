import {useState, useEffect} from "react"



export default function useThrottle(value, delay){

    const [throttledValue, setThrottledValue] = useState(value)
    const [flag,setFlag] = useState(0)

    useEffect(()=>{
        if(flag){
            setThrottledValue(value)
            setFlag(0);
        }
        setTimeout(()=>setFlag(1),delay)
    },[throttledValue])

    return throttledValue
}