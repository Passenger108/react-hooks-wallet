import React,{useState, useEffect } from "react"

export default function useLocalStorage(key, initialValue){

    const [storedValue,setStoredValue] = useState(()=>{
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }catch(error){
            console.log("Error reading localStorage key",key , error)
            return initialValue;
        }
    })

    useEffect(
        ()=>{
           try{
            const jsonValue = JSON.stringify(storedValue)
            window.localStorage.setItem(key,jsonValue);
           }catch{
            console.log("Error writing to localStorage");
           }
            
        } , [key,storedValue]
    )

    return [storedValue , setStoredValue]

}