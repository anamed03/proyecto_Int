import React from 'react'
import './activity.css'

// Imported Icons =========>
import {BsArrowRightShort} from 'react-icons/bs'

// Imported Images =========>
import user1 from '../../../Assets/user (1).png'
import user2 from '../../../Assets/user (2).png'
import user3 from '../../../Assets/user (3).png'
import user4 from '../../../Assets/user (4).png'
import user5 from '../../../Assets/user (5).png'

const Activity = () => {
  return (
    <div className='activitySection'>
       <div className="heading flex">
        <h1>Actividad Reciente</h1>
        <button className='btn flex'>
          Ver todo
          <BsArrowRightShort className="icon"/>
        </button>
       </div>

       <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Mariana Velazques</span>
            <small>marivez</small>
          </div>
          <div className="duration">
             Hace 2 min 
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Ana Mejia</span>
            <small>anamema</small>
          </div>
          <div className="duration">
            Hace 10 min 
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Jesus Catañeda</span>
            <small>chuyCas</small>
          </div>
          <div className="duration">
            Hace 20 min
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>olamar</small>
          </div>
          <div className="duration">
           Hace 30 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user5} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Alejandro Ramirez</span>
            <small>aleRami</small>
          </div>
          <div className="duration">
            Hace 34 min 
          </div>
        </div>
       </div>

        
    </div>
  )
}

export default Activity