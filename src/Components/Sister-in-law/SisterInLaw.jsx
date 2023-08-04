/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { HouseContext, MoneyContext } from '../About/About';


const SisterInLaw = () => {
    const house = useContext(MoneyContext)
    const husbandHouse = useContext(HouseContext)

    return (
        <div className='flex bm'>
            <div><p className='bold'>House of Husband:{house}</p>
                <p className='bold'>own house:{husbandHouse} </p>
                <p className='b'>Sister-in-law</p></div>

        </div>
    );
};

export default SisterInLaw;