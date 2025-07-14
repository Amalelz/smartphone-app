import React from 'react'
import Navbar from './Navbar'

const Add = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="column col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-2 mt-2">
                        <div className="column col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Brand</label>
                            <input type="text" className="form-control" />
                        </div>
                       <div className="column col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Model</label>
                            <input type="text" className="form-control" />
                            
                        </div>
                        <div className="column col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Manufacture date</label>
                            <input type="date" className="form-control" />
                            
                        </div>
                        <div className="column col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Upload Photo</label>
                            <input type="file" className="form-control" />
                            
                        </div>
                        <div className="column col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Warrenty Info</label>
                            <input type="text" className="form-control" />
                            
                        </div>
                        <div className="column col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control" />
                            
                        </div>
                        <div className="column col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Discount</label>
                            <input type="text" className="form-control" />
                            
                        </div>
                        <div className="column col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-outline-success">Add Phone</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    </div>
  )
}

export default Add