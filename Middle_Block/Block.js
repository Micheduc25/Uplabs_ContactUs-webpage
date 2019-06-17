import React from 'react';
import './Block.scss';

//This is the middle component which contains the welcome text and the login form

const block = () =>{

    return(

        <div className='middle__block'>
            
            <div className='middle__block--upper'>

                <div className='heading__container'>
                    <div className='heading_wrapper'>
                        <h1>Contact Us</h1>
                    </div>
                </div>

                <div className='message__container'>
                <div className='message_wrapper'>
                    <p>Please feel free to talk to us if you have any questions.</p>
                    <p>We endeavour to answer questions within 24 hours.</p>

                </div>
                </div>


            </div>

            <div className='middle__block--lower'>
                <form action='' method='post'>

                    <table className='form_table'>
                        <tbody>
                        <tr><td colSpan='2'><input name='name' type='text' placeholder='Name'/></td></tr>
                        <tr><td colSpan='2'><input name='email' type='email' placeholder='Email'/></td></tr>
                        <tr className='msgRow'><td className='msgCell' colSpan='2'><textarea className='message'  placeholder='Message'></textarea></td></tr>

                        <tr><td className='sendCell'><input className='send'  type='submit' value='Send'/></td>
                            <td className='cancelCell'><input className='cancel' type='reset' value='Cancel'/></td>
                        </tr>
                        </tbody>
                        
                    </table>

                </form>
            </div>

        </div>

    );

}

export default block;