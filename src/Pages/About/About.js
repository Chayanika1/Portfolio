import React from 'react';
import Girl from '../../Images/Girl2.jpg'

const About = () => {
    return (
        <div class="card mb-3 rounded" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={Girl} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8 justify-content-center text-center" style={{ marginTop: '10%' }}>
                    <div class="card-body ">
                        <h5 class="card-title">Hi!! I am Chayanika</h5>
                        <p class="card-text">I am from India. I completed My b.tech in Electronics and Communication Engineering
                            from Moulana Abul Kalam Azad Institute Of Technology. Apert from that I have a knowledge In web Development Programming Language
                            like HTML,CSS,JS,React Js, MongoDB,Node Js, Express Js.
                        </p><br />
                        <h2>My Skills</h2>
                        <p>HTML</p>
                        <div class="progress" style={{height: '20px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p>CSS</p>
                        <div class="progress" style={{height: '20px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p>JS</p>

                        <div class="progress" style={{height: '20px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p>React JS</p>
                        <div class="progress" style={{height: '20px'}}>
                            <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;