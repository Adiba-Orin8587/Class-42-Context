/* eslint-disable no-unused-vars */
import React from 'react';
import Mother from '../Mother/Mother';
import { useContext } from 'react';
import { HouseContext, MoneyContext } from '../About/About';

const Father = () => {

    const [house, setHouse] = useContext(MoneyContext)
    const [ownHouse, setOwnHouse] = useContext(HouseContext)

    return (
        <div className='flex bf'>
            <div className=''>
                <p className='bold'>Inheritance of parents:{house} </p>
                <p className='bold'>My own house:{ownHouse} </p>
                <button onClick={() => setOwnHouse(ownHouse + 1)}>Own houses</button>
                <p className='b'>Father</p></div>
            <Mother></Mother>
            <button onClick={() => setHouse(house + 1)}>Number of houses</button>
        </div>
    );
};

export default Father;