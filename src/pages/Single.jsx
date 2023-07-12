import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      
        <div className="user">
          <img src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
            <Link to={`write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <Link>
              <img src={Delete} alt="" />
            </Link>
          </div>
        </div>

        <h1>Lorem ipsum dolor sit, amet consectetur.</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deleniti ea iure laborum delectus consequatur, neque assumenda. Quis, dolorum qui dicta voluptatibus fugit nemo, harum deleniti officia laboriosam adipisci pariatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deleniti ea iure laborum delectus consequatur, neque assumenda. Quis, dolorum qui dicta voluptatibus fugit nemo, harum deleniti officia laboriosam adipisci pariatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deleniti ea iure laborum delectus consequatur, neque assumenda. Quis, dolorum qui dicta voluptatibus fugit nemo, harum deleniti officia laboriosam adipisci pariatur.
        </p>

      </div>


      <div className="menu">
        m
      </div>
    </div>
  )
}

export default Single