import React from 'react';
import Project1 from '../../Images/Project1.jpg';
import Project2 from '../../Images/Project2.jpg';
import Project3 from '../../Images/Project3.jpg';

const Projects = () => {
    return (
        <div className='container'>
            <h2 className='text-center p-4' style={{ color: 'orangered' }}>My Latest Project</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src={Project1} style={{ height: '600px', width: '350px' }} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-grid gap-2 d-md-block mb-3">
                                <a href="https://github.com/Chayanika1/ware-house-management-client-side" class="btn btn-primary me-2">Client side code</a>
                                <a href="https://github.com/Chayanika1/ware-house-management-server--side" class="btn btn-primary">Server side Code</a>

                            </div>
                           
                            <a href="https://my-asignment.web.app/" class="btn btn-primary">Live Link</a>
                        </div>


                    </div>
                </div>

                <div class="col">
                    <div class="card ">
                        <img src={Project2} style={{ height: '600px', width: '350px' }} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="https://github.com/Chayanika1/independent-service-provider" class="btn btn-primary me-2">Client Side Code</a>
                            <a href="https://gym-trainer-c928c.web.app/" class="btn btn-primary">Live Link</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={Project3} style={{ height: '600px', width: '350px' }} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="https://github.com/Chayanika1/product-analysis-website" class="btn btn-primary me-2">Client Side Code</a>
                            <a href="https://voluble-khapse-675f14.netlify.app/" class="btn btn-primary">Live Link</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Projects;