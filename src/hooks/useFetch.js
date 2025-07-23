import React,{useState, useEffect, useCallback} from "react"


export default function useFetch(URL) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false);
    const [errors, setErrors]= useState(null);
    const [reload, setReload] = useState(0);

    const refresh = useCallback(
        ()=>setReload(value=>!value)
        ,[]
    )


    useEffect(()=>{
        if (!URL) return;


        setErrors(null)
        setLoading(true)
        const abortController = new AbortController()

        const asyncFetching = async () => {
            try{
                
                const response = await fetch(URL,{signal:abortController.signal})
                //above line can throw AbortError type error

                if(!response.ok){
                    //response.status : 4xx or 5xx
                    throw new Error(`HTTP ERROR: ${response.status}`)
                    //above line can throw error
                }
                //response.status : 2xx

                const data = await response.json()
                //above line can throw error in case of invalid json
                setData(data)

            }catch(error){
                if(error.name !== "AbortError")
                setErrors(error)
            }finally{
                setLoading(false);
            }
        }

        asyncFetching();
        return ()=>{
            abortController.abort();
        }
    

    },[URL,reload])

    return {data, loading, errors, refresh}
}