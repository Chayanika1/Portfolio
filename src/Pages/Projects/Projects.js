import React, { useEffect, useState } from 'react';
import Project1 from '../../Images/Project1.jpg';
import Project2 from '../../Images/Project2.jpg';
import Project3 from '../../Images/Project3.jpg';
import MyProject from '../MyProject/MyProject';


const Projects = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    return (
        <div class='container'>
            <h2 className='text-center p-4' style={{ color: 'orangered' }}>My Latest Project</h2>
            <div class="row">
            {
                project.map(p => <MyProject p={p}></MyProject>)
            }
            </div>
            


        </div>



    );
};

export default Projects;