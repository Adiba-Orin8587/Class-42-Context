/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { HouseContext, MoneyContext } from '../About/About';

const Sister = () => {
    const house = useContext(MoneyContext)
    const husbandHouse = useContext(HouseContext)
    return (
        <div className='flex bg'>
            <div>
                <p className='bold'>Inheritance of parents:{house}</p>
                <p className='bold'>own house:{husbandHouse} </p>
                <p className='b'>Sister</p>
            </div>

        </div>
    );
};

export default Sister;