import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Style/home.css'
const Home = () => {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async () => {
        await axios.get(`https://65d582ef3f1ab8c634372315.mockapi.io/api/Foods`)
            .then(res => setUserData(res.data))
            .catch((err) => console.warn("Data Not Found", err));
    }
    console.log(userData)
    return (
        <div class='container'>
            <div class="row row-cols-1 row-cols-md-3 g-3">
                {userData.map((item, index) => {
                    return (
                        <div  key={index} class="col p-4">
                            <div class="card h-100 text-center"  style={{width:320}}>
                                <img className='card-img-top' src={item.imageurl} alt='image'/>
                                <div class="card-body">
                                <h6 class="card-title"><strong>Name:</strong> {item.name}</h6>
                                <h6 class="card-text"><strong>Price:</strong> {item.price}</h6>
                                <h6 class="card-text"><strong>Rating:</strong> {item.rating}</h6>
                                <p><strong>Description:</strong> {item.description}</p>
                                       
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Home;