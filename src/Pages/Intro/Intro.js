import React from 'react';
import './Intro.css';
import Github from '../../Github.png';
import Insta from '../../Insta.png';
import Linkdin from '../../Linkdin.png';

const Intro = () => {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span> Hi! I am  </span>
                    <span>Chayanika Chakraborty</span>
                    <span>Junior Frontend developer with web designing and development</span>
                    
                </div>
                <button className='i-button'>
                        Hire me
                    </button>
                    <div className='i-icons'>
                        <img src={Github}/>
                        <img src={Insta}/>
                        <img src={Linkdin}/>

                    </div>

            </div>
            <div className='i-right'>

            </div>

        </div>
    );
};

export default Intro;