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
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import my from '../../Images/my-bg.png'
import Ido from '../Ido/Ido';

const Intro = () => {
    return (
        <div className='container'>

            <div className='row'>
                <div className='col-lg-6 col-sm-12 col-md-12'>
                    <div className='i-left'>
                        <div className='i-name'>
                            <span className='hi'> Hi! I am  </span><br />
                            
                            <h2  data-text="Chayanika Chakraborty" className='name'>Chayanika Chakraborty</h2><br />
                            <span className='bio'>Junior Frontend developer with web designing and development with proficiency
                                of Technilogies like HTML,CSS JS,React,Node Js, MongoDb</span>

                        </div>
                        <button className='i-button mt-4'>
                            <a style={{ textDecoration: 'none' }} href="https://drive.google.com/file/d/1Enu50Eg-GIukwuVNZL-sJq3dVzHsdDmh/view?usp=sharing">Download Resume</a>
                        </button>
                        <div className='i-icons'>
                            <a href="https://github.com/Chayanika1"> <img src={Github} /></a>

                            <img src={Insta} />
                            <a href="https://www.linkedin.com/in/chayanika-chakraborty-186478204"><img src={Linkdin} />
                            </a>

                        </div>

                    </div>





                </div>
                
                <div className='col-lg-6 col-md-12 col-sm-12'>
                

                    <div className='i-right'>
                        <img className='girl img-fluid' src={my} />






                    </div>



                </div>


            </div>
            <Services></Services>
            <Ido></Ido>
            <Projects></Projects>
            <Contactform></Contactform>


        </div>



    );
};

export default Intro;