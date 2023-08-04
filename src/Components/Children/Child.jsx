/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import {MoneyContext, OwnHouseContext } from '../About/About';

const Child = () => {

    const house = useContext(MoneyContext)
    const husbandHouse = useContext(OwnHouseContext)
    return (
        <div className='flex bg'>
            <div>
                <p className='bold'>Inheritance of parents:{house}</p>
                <p className='bold'>own house:{husbandHouse} </p>
                <p className='b'>Child</p>
            </div>

        </div>
    );
};

export default Child;