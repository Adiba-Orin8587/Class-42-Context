/* eslint-disable no-unused-vars */
import React from 'react';
import Aunty from '../Aunty/Aunty';
import { useContext } from 'react';
import { OwnHouseContext, MoneyContext } from '../About/About';

const Uncle = () => {

    const [house, setHouse] = useContext(MoneyContext)
    const [uncleHouse, setUncleHouse] = useContext(OwnHouseContext)

    return (
        <div className='flex bf'>
            <div className=''>
                <p className='bold'>Inheritance of parents:{house} </p>
                <p className='bold'>My own house:{uncleHouse} </p>
                <button onClick={() => setUncleHouse(uncleHouse + 1)}>Own houses</button>
                <p className='b'>Uncle</p></div>
            <Aunty></Aunty>
            <button onClick={() => setHouse(house + 1)}>Number of houses</button>
        </div>
    );
};

export default Uncle;