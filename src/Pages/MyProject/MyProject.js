import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyProject = (props) => {
    const { name, img ,_id} = props.p;
    const navigate= useNavigate()
    const handlebtn=(id)=>{
        navigate(`/MyProject/${id}`)

    }
    return (

        <div class="g-5 rounded-3 col-sm-12 col-md-6 col-lg-4 shadow p-3 mb-5 bg-body rounded">




            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button onClick={()=>handlebtn(_id)} type="button" class="btn btn-primary btn-lg">Explore More</button>
                </div>
            </div>
        </div>



    );
};

export default MyProject;