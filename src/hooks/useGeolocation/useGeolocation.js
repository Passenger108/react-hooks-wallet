import {useState, useReducer, useEffect,useCallback} from "react"

function reduce(state, action){
    switch(action.type){
        case 'refresh':
            return {
                position:null,
                loading:true,
                error:null,
            }
        case 'error':
            if(action.value === 'unsupported')
                return {
                    position : null,
                    loading : false,
                    error : new Error("Geolocation feature is unsupported"),
                }
            else
                return {
                    position : null,
                    loading : false,
                    error : action.value,
                }
        case 'success':
                return {
                    position : {
                        latitude : action.value.latitude,
                        longitude : action.value.longitude,
                        accuracy : action.value.accuracy,
                    },
                    loading : false,
                    error : null,
                }
        default:
            return state;
    }
}


export default function useGeolocation (positionOptions, doWatch=false){

    const [state, dispatch] = useReducer(reduce,{loading:true, position:null, error:null})
    const [refresh, setRefresh] = useState(0)

    const refreshPosition = useCallback(()=>{
        dispatch({type:'refresh'})        
        setRefresh(value=>value+1)
    },[]);

    useEffect(()=>{
        if(typeof navigator.geolocation === 'undefined'){
            dispatch({type:"error", value:"unsupported"})
            return;
        }

        const successCB = (position) => dispatch({type:"success", value:position.coords})
        const errorCB = (error) => dispatch({type:"error", value:error}) 

        if(doWatch){
            const watchId = navigator.geolocation.watchPosition(successCB,errorCB,positionOptions||undefined)
            return ()=> navigator.geolocation.clearWatch(watchId)
        }else{
            navigator.geolocation.getCurrentPosition(successCB,errorCB,positionOptions||undefined)
        }
    },[refresh, doWatch, positionOptions?.enableHighAccuracy, positionOptions?.timeout, positionOptions?.maximumAge])



    return {...state,refreshPosition}
}