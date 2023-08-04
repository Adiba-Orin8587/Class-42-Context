/* eslint-disable no-unused-vars */
import React from 'react';
import Sister from '../Sister/Sister';
import { useContext } from 'react';
import { HouseContext, MoneyContext } from '../About/About';

const Mother = () => {

    const house = useContext(MoneyContext)
    const husbandHouse = useContext(HouseContext)

    return (
        <div className='flex bm'>
            <div > <p className='b'>Mother</p>
                <p className='bold'>Inheritance of father-in-law:{house}</p>
                <p className='bold'>House of Husband:{husbandHouse}</p>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Mother;