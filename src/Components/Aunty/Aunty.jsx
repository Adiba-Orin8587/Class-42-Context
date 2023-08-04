/* eslint-disable no-unused-vars */
import React from 'react';
import Child from '../Children/Child';
import { useContext } from 'react';
import {MoneyContext, OwnHouseContext } from '../About/About';

const Aunty = () => {

  const house = useContext(MoneyContext)
  const husbandHouse = useContext(OwnHouseContext)

  return (
    <div className='flex bm'>
      <div> <p className='b'>Aunty</p>
        <p className='bold'>Inheritance of father-in-law:{house}</p>
        <p className='bold'>House of Husband:{husbandHouse}</p>
        <Child></Child>
      </div>
    </div>
  );
};

export default Aunty;