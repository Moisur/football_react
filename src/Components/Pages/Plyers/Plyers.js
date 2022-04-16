import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Plyer from '../../Plyer/Plyer';
// import CustomHook from '../../Hook/CustomHook';
const Plyers = () => {
    const {id}=useParams()
    const url =`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    const [user,setUser]=useState([])
   useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setUser(data.players))
   })
   console.log(user)
    return (
        <div className='w-[50%] mx-auto py-40'>
            {
                user.map(plyers=><Plyer key={plyers.idPlayer} plyers={plyers}>
                    {
                        {Description:plyers?.strDescriptionEN,
                        Location:plyers?.strBirthLocation,
                        Height:plyers?.strHeight,
                        Weight:plyers?.strWeight
                        }
                    }
                </Plyer>)
            }
        </div>
    );
};

export default Plyers;