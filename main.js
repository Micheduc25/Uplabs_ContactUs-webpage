import React, {Component} from 'react';
import Header from './Header/Header';
import LeftBlock from './Left_Block/Block';
import MiddleBlock from './Middle_Block/Block';
import RightBlock from './Right_Block/Block';
import './style.scss';

class Page extends Component {

    render(){

        return(
            <div style={{height:"100%"}}>
                <Header/>
                <LeftBlock/>
                <MiddleBlock/>
                <RightBlock/>
            </div>

            
        );
    }
}

export default Page;