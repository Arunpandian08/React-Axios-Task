
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Style/user.css'

const User = ({ setId }) => {
    const [userData, setUserData] = useState([])
    const [deleteData, setDeleteData] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetchData()
    }, [deleteData]);

    const fetchData = async () => {
        await axios.get(`https://65d582ef3f1ab8c634372315.mockapi.io/api/Foods`)
            .then(res => setUserData(res.data))
            .catch((err) => console.warn("Data Not Found", err));
    }
    const handleEdit = (id) => {
        setId(id)
        navigate(`/edit/${id}`)

    }
    const handleDelete = async (id) => {
        await axios.delete(`https://65d582ef3f1ab8c634372315.mockapi.io/api/Foods/${id}`)
            .then(res => setDeleteData(res.data))
            .catch(err => console.log(err))
    }
    const handleCreate=()=>{
        navigate('/create')
    }
    return (
        <div>
            <div class='container'>
                <button className='createBtn' onClick={handleCreate}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create
                    </span>
                </button>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {userData.map((item, index) => {
                        return (
                            <div key={index} class="col p-4">
                                <div class="card h-100 text-center" style={{ width: 320 }} >
                                        <img className='card-img-top' src={item.imageurl} alt='image' />
                                    <div class="card-body">
                                        <h6 class="card-title"><strong>Name:</strong> {item.name}</h6>
                                        <h6 class="card-text"><strong>Price:</strong> {item.price}</h6>
                                        <h6 class="card-text"><strong>Rating:</strong> {item.rating}</h6>
                                        <p><strong>Description:</strong> {item.description}</p>
                                        <div className="twoBtn">
                                            <button class="btns" onClick={() => { handleEdit(item.id) }}>
                                                <svg class="svg-icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#a649da" stroke-linecap="round" stroke-width="2"><path d="m20 20h-16"></path><path clip-rule="evenodd" d="m14.5858 4.41422c.781-.78105 2.0474-.78105 2.8284 0 .7811.78105.7811 2.04738 0 2.82843l-8.28322 8.28325-3.03046.202.20203-3.0304z" fill-rule="evenodd"></path></g></svg>
                                                <span class="lable">Edit</span>
                                            </button>
                                            <div class="del" onClick={() => { handleDelete(item.id) }}>
                                                <div>
                                                    Delete
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default User;