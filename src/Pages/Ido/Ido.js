import React from 'react';
import Html from '../../Images/html.jpg';
import Rea from '../../Images/React.jpg';
import Full from '../../Images/Fullstack.jpg';

const Ido = () => {
    return (
        <div>
            <h2 className='text-center p-5' style={{color:'orange'}}>What I do</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                
                
                <div class="col">
                    <div class="card h-100">
                        <img src={Html} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Plaim Html and CSS website</h5>
                                <p class="card-text"></p>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={Rea} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">SPA with React</h5>
                                <p class="card-text"></p>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={Full} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Fullstack Application</h5>
                                <p class="card-text"></p>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Ido;