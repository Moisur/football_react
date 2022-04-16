import React from 'react';
import CustomHook from '../../Hook/CustomHook';
import Plyer from '../../Plyer/Plyer';

const Details = () => {
    const [data] = CustomHook('https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p')
    return (
        <div className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-center '>
            {
                    data.map(plyers => <Plyer key={plyers.idPlayer} plyers={plyers}></Plyer>)
            }
        </div>
    );
};

export default Details;