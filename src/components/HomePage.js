import React from 'react'
import '../styling/HomePage.css'
import pic1 from '../assets/Ina_1_1.jpg';



function HomePage() {
  return (
    <div className="home-page">
      <div className="image-container">
        <img src={pic1} alt="Background" />
        <div className="overlay">
          <h1>Welcome to THE INTRANET</h1>
          <p>HiTEM's internal platform for information sharing.</p>
        </div>
      </div>
    </div>
    
  )
}

export default HomePage