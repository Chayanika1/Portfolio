import React from 'react';
import './Services.css'



const Services = () => {
    return (
        <div className='container'>
            <h3 className='text-center pt-4'>My Services</h3>
            <p className='text-center' style={{color:'red'}}>- What I Provide -</p>
            <div class="row row-cols-1 row-cols-md-3 g-4">

                <div class="col">
                    <div class="card h-100 text-bg-danger text-center">
                        <div className='text-center p-5'><i class="fa-solid fa-paintbrush"></i></div>
                        <div class="card-body">
                            <h5 class="card-title">Website Design</h5>
                            <p class="card-text">A beautiful responsive Website. You can design through me in a very short time</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 text-center text-bg-dark">
                         <div className='text-center p-5'><i class="fa-solid fa-earth-americas"></i></div>
                        <div class="card-body">
                            <h5 class="card-title">Web App Development</h5>
                            <p class="card-text"> I can develop Web application very nicely using, HTML,CSS,React and more in a short time</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 text-center text-bg-primary">
                        <div className='text-center p-5'><i class="fa-solid fa-bug"></i></div>
                        <div class="card-body">
                            <h5 class="card-title">Web Bug Fixing</h5>
                            <p class="card-text"> If your website under too bugs and dosen't work properly, You can fix it through me if you want in a very short period.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;