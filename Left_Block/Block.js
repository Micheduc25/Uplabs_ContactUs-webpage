import React from 'react';
import './Block.scss';
import downBlock from '../images/upsidedown.png';
import upBlock from '../images/upright.png';
import people from '../images/people.png';

const block = () => {

    return(

        <div className='left__block'>
            <div className='placeholder'></div>

            <div className='left__block--upper'>
                   
                <div className='upblocks'>
                    <img src={downBlock} className='blockup' alt='the upper blocks'/>
                </div>

                <div className='downblocks'>
                    <img src={upBlock} className='blockdown' alt='the upper blocks'/>
                </div>

            </div>

            <div className='placeholder2'></div>

            <div className='left__block--lower'>
                 <img src={people} className='people' alt="a man and a woman sitting down"/>

            </div>


        </div>

    );
} 

export default block;