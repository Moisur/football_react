import { useEffect, useState } from "react"
const CustomHook =(url)=>{
    const [plyers,setPlyers]=useState([]) 
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setPlyers(data.player)
        })
    },[])
    return [plyers,setPlyers];
}
export default CustomHook;