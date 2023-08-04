/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import SisterInLaw from '../Sister-in-law/SisterInLaw';
import { useContext } from 'react';
import { HouseContext, MoneyContext } from '../About/About';

const Brother = () => {

    const [house, setHouse] = useContext(MoneyContext)
    const husbandHouse = useContext(HouseContext)

    return (
        <div className='flex bf'>
            <div className='' >
                <p className='bold'>Inheritance of parents:{house} </p>
                <p className='bold'>own house:{husbandHouse} </p>
                <p className='b'>Brother</p>
            </div>
            <SisterInLaw></SisterInLaw>
            <button onClick={() => setHouse(house + 1)}>Number of houses</button>
        </div>
    );
};

export default Brother;