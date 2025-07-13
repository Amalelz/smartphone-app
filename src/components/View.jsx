import React, { useState } from 'react'
import Navbar from './Navbar'
import './Component.css'

const View = () => {
    const [phonedata] = useState(
        [
            {"name" :"Samsung","model":"S24 FE(Blue, 128 GB)","price":"₹35,999","discount":"40% off","oprice":"₹50,000","img":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/s/z/-original-imahcfwmdvbcgdzs.jpeg?q=70","store":"Flipkart","warrenty":"1 Year Manufacturer Warrenty"},
             {"name" :"realme","model":"14 Pro 5G(White, 128 GB)","price":"₹31,999","discount":"11% off","oprice":"₹35,999","img":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/v/s/-original-imah8ffzujxhgzpu.jpeg?q=70","store":"Amazon","warrenty":"1 Year Manufacturer Warrenty"},
               {"name" :"REDMI","model":"13 5G (Purple, 128 GB)","price":"₹16,990","discount":"22% off","oprice":"₹21,999","img":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/j/j/-original-imah7gbgybkx2hz3.jpeg?q=70","store":"Flipkart","warrenty":"1 Year Manufacturer Warrenty"}
        ]
    )

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="column col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-2 mt-2">

                            {
                                phonedata.map(
                                    (item,index) => {
                                        return (
                                            <div className="column col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-4 card-group">
                                                <div class="card mb-3">
                                                    <div class="row g-0">
                                                        <div class="col-md-4 d-flex justify-content-center">
                                                            <img src={item.img} class="img-fluid rounded-start tumb-img" alt="..."></img>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <div class="card-body">
                                                                <h5 class="card-title">{item.name} {item.model}</h5>
                                                                 <h5 class="card-title">{item.price}</h5>
                                                                <p class="card-text"><s>{item.oprice}</s> {item.discount}</p>
                                                                <p class="card-text">Available on {item.store}</p>
                                                                <p class="card-text">Available on {item.warrenty}</p>
                                                               
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View