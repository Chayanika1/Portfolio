import React from 'react';
import './Intro.css';
import Github from '../../Images/github (1).png'
import Insta from '../../Images/instagram.png';
import Linkdin from '../../Images/linkedin.png';
import Vector1 from '../../Images/Vector1.png';
import Vector2 from '../../Images/Vector2.png';
import Girl2 from '../../Images/Girl1.jpg';
import Floatingdiv from '../FloatingDiv/Floatingdiv';
import Crown from '../../Images/crown.png';
import thumbup from '../../Images/thumbup.png'
import Contactform from '../Contactform/Contactform';

const Intro = () => {
    return (
        <div className='intro'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 col-md-12'>
                    <div className='i-left'>
                        <div className='i-name'>
                            <span> Hi! I am  </span>
                            <span>Chayanika Chakraborty</span>
                            <span>Junior Frontend developer with web designing and development</span>

                        </div>
                        <button className='i-button'>
                            <a  style={{ textDecoration:'none'}}href="https://drive.google.com/file/d/1Enu50Eg-GIukwuVNZL-sJq3dVzHsdDmh/view?usp=sharing">Download Cv</a>
                        </button>
                        <div className='i-icons'>
                            <img src={Github} />
                            <img src={Insta} />
                            <img src={Linkdin} />

                        </div>

                    </div>
                    

                    
                    

                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='i-right'>
                        <img style={{ top: '-14%' }}className=' girl img-fluid' src={Girl2} />
                        
                        <div>
                            <Floatingdiv image={Crown} txt1='Web' txt2='Developer'></Floatingdiv>
                        </div>
                        <div style={{ top: '18rem', left: '0rem' }}>
                            <Floatingdiv image={thumbup} txt1='Best Design'></Floatingdiv>

                        </div>



                    </div>
                    </div>

            </div>
             <Contactform></Contactform>

        </div>
    );
};

export default Intro;