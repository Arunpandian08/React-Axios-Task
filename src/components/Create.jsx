import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../components/Style/Create.css'


const Create = () => {
  // useNavigation for navigate components
  const navigate = useNavigate()
  const [createData, setCreateData] = useState({    //Managing state for storing created values and update in needed component
    name: '',
    price: '',
    rating: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCreateData((preData) => ({
      ...preData, [name]: value

    }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`https://65d582ef3f1ab8c634372315.mockapi.io/api/Foods/`, createData)
      .then(res => console.log(res.data))
      .catch((err) => console.log(err))
    navigate('/users')

  }

  return (
    <div>
      <form className='form-container' onSubmit={handleFormSubmit}>
        <div className="col p-4">
          <div className='card' style={{ width: 500 }}>
            <div className="card-body p-4">
              <div class="input-group mb-3">
                <span class="input-group-text p-3" id="basic-addon1">Name: </span>
                <input type="text" class="form-control" placeholder='Enter Product Name' name="name" value={createData.name} onChange={handleChange} required />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text p-3" id="basic-addon1">Price: </span>
                <input type="text" class="form-control" placeholder='Enter Product Price' name="price" value={createData.price} onChange={handleChange} required />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text p-3" id="basic-addon1">Rating: </span>
                <input type="text" class="form-control" placeholder='Enter Rating Of Your Product' name="rating" value={createData.rating} onChange={handleChange} required />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text p-3" id="basic-addon1">Description: </span>
                <input type="text" class="form-control" placeholder='Enter Your Product Description' name="description" value={createData.description} onChange={handleChange} required />
              </div>
              <div className='submit'>
                <button class="Btn">

                  <div class="sign">+</div>

                  <div class="text">Update</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;