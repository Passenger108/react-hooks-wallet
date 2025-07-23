import React,{useReducer} from "react"


function reduceCallbackFunction(currentState, dispatchedAction){
    const actionType = dispatchedAction.type

    switch(actionType){
        case 'increment' :
         return {count : currentState.count+1, init:currentState.init}

        case 'decrement' :
         return {count : currentState.count-1, init:currentState.init}

        case 'reset' :
         return {count : currentState.init, init:currentState.init}

        default : 
            return currentState
    }
}


export default function useCounterReducer(initialValue=0){
    
    const [state, dispatch] = useReducer(reduceCallbackFunction, {count:initialValue, init:initialValue})

    const increment = ()=> dispatch({type:'increment'})
    const decrement = ()=> dispatch({type:"decrement"})
    const reset = ()=> dispatch({type:"reset"})

    return {count: state.count, increment, decrement, reset}

}