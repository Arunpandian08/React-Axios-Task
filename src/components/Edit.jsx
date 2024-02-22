import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Style/Edit.css'
import { useNavigate } from 'react-router-dom';

const Edit = ({ id }) => {
    const navigate =  useNavigate()
    const [editData, setEditData] = useState({
        name:'',
        price:'',
        rating:'',
        description:''        
    })
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        await axios.get(`https://65d582ef3f1ab8c634372315.mockapi.io/api/Foods/${id}`)
            .then(res => setEditData(res.data))
            .catch((err) => console.log(err))
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setEditData((preData) => ({
            ...preData,[name]: value
            
        }))
    }

    const handleFormSubmit=async(e)=>{
            e.preventDefault()
            await axios.put(`https://65d582ef3f1ab8c634372315.mockapi.io/api/Foods/${id}`,editData)
            .then(res=>console.log(res.data))
            .catch((err)=>console.log(err))
            navigate('/users')

    }
    return (
        <form className='form-container' onSubmit={handleFormSubmit}>

            <div className="col p-4">
                <div className='card' style={{ width: 500 }}>
                    <div className="card-body p-4">
                        <div class="input-group mb-3">
                            <span class="input-group-text p-3" id="basic-addon1">Name: </span>
                            <input type="text" class="form-control" name="name" value={editData.name} onChange={handleChange} required />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text p-3" id="basic-addon1">Price: </span>
                            <input type="text" class="form-control" name="price" value={editData.price} onChange={handleChange} required />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text p-3" id="basic-addon1">Rating: </span>
                            <input type="text" class="form-control" name="rating"  value={editData.rating} onChange={handleChange} required/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text p-3" id="basic-addon1">Description: </span>
                            <input type="text" class="form-control" name="description" value={editData.description} onChange={handleChange} required />
                        </div>
                        <div className='submit'>
                        <button class="submitBtn" type='submit'>
                            Submit
                            <svg fill="white" viewBox="0 0 448 512" height="1em" class="arrow"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Edit;