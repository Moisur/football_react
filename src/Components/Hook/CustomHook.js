import { useEffect, useState } from "react"
const CustomHook =()=>{
    const [plyers,setPlyers]=useState([]) 
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p')
        .then(res=>res.json())
        .then(data=>setPlyers(data.player))
    },[])
    return [plyers,setPlyers];
}
export default CustomHook;