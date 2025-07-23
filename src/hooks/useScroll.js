import {useState, useEffect} from "react"

export default function useScroll(ref=null) {

    const [points, setPoints] = useState({x:0,y:0})

    useEffect(()=>{

        function handleScroll(){
            if(ref?.current)
                setPoints({x:ref.current.scrollLeft,y:ref.current.scrollTop})
            else
                setPoints({x:window.scrollX,y:window.scrollY})
        }

        const scrollTarget = ref?.current || window
        
        scrollTarget.addEventListener('scroll',handleScroll)

        handleScroll()

        return ()=>{
            scrollTarget.removeEventListener('scroll',handleScroll)
        }

    },[ref?.current])

    return points;
}