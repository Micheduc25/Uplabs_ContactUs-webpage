import React from 'react';
import './Block.scss';

import clock from '../images/clock.png';
import otherblock from '../images/otherblock.png'
import tree1 from '../images/tree1.jpeg';
import tree2 from '../images/tree2.png';

const block = () =>{

    return(

        <div className='right__block'>
            <div className='right__block--upper'>
                    <div className='clock__image--wrapper'>
                        <img className='clock' src={clock}/>
                    </div>
            </div>

            <div className='right__block--middle'>
                <div className='blocks__image--wrapper'>
                    <img className='blocks' src={otherblock}/>
                </div>
            </div>

            <div className='right__block--lower'>
                <div className='left--lower'>

                    <div className='trees__image--wrapper1'>
                        <img className='bigTree' src={tree2}/>
                    </div>

                </div>

                <div className='right--lower'>

                    <div className='trees__image--wrapper2'>
                        <img className='smallTree' src={tree1}/>
                    </div>

                </div>
                
            </div>
        </div>

    );
}

export default block;