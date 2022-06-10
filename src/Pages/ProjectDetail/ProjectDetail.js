import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectDetail = () => {
   
    const { id } = useParams();
    const [items, setItems] = useState({});
    useEffect(() => {
        fetch(`fakedata.json ${id}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h1>{items.name}</h1>
           
        </div>
    );
};

export default ProjectDetail;