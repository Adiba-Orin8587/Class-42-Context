/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import './About.css'
import Father from '../Father/Father';
import Brother from '../Brother/Brother';
import Uncle from '../Uncle/Uncle';

export const MoneyContext = createContext(555)
export const HouseContext = createContext(0)
export const OwnHouseContext = createContext(1)


const About = () => {

    const [house, setHouse] = useState(2)
    const [ownHouse, setOwnHouse] = useState(0)
    const [uncleHouse, setUncleHouse] = useState(0)

    return (
        <div>
            <OwnHouseContext.Provider value={[uncleHouse, setUncleHouse]}>
                <HouseContext.Provider value={[ownHouse, setOwnHouse]}>
                    <MoneyContext.Provider value={[house, setHouse]}>
                        <div className='flex bg'>
                            <div>
                                <p className='bold'>Grand-Father</p>
                                <p className='bold'>My house:{house}</p>
                            </div>
                            <button onClick={() => setHouse(house + 1)}>Number of houses</button>
                            <Father house={house}></Father>
                            <Brother house={house}></Brother>
                            <Uncle house={house} ></Uncle>
                        </div>
                    </MoneyContext.Provider>
                </HouseContext.Provider>
            </OwnHouseContext.Provider>
        </div>
    );
};

export default About;