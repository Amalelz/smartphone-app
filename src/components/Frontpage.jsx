import React from 'react'
import Navbar from './Navbar'

const Frontpage = () => {
  return (
    <div>
        <Navbar/>
        <div className="d-flex justify-content-center align-items-center vh-100 front-div">
            <div className="">
                <h2>Welcome To Smartphone App!</h2>
            </div>
        </div>
    </div>
  )
}

export default Frontpage