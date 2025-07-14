import React, { useState } from 'react'
import Navbar from './Navbar'
import './Component.css'

const View = () => {
    const [phonedata] = useState(
        [
            {"name" :"Samsung","model":"S24 FE(Blue, 128 GB)","price":"₹35,999","discount":"40% off","oprice":"₹50,000","img":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/s/z/-original-imahcfwmdvbcgdzs.jpeg?q=70","store":"Flipkart","warranty":"1 Year Manufacturer Warranty for phone and 6 Months Warranty for In the Box Accessories"},
             {"name" :"realme","model":"14 Pro 5G(White, 128 GB)","price":"₹31,999","discount":"11% off","oprice":"₹35,999","img":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/v/s/-original-imah8ffzujxhgzpu.jpeg?q=70","store":"Amazon","warranty":"1 Year Manufacturer Warranty for phone and 6 Months Warranty for In the Box Accessories"},
               {"name" :"REDMI","model":"13 5G (Purple, 128 GB)","price":"₹16,990","discount":"22% off","oprice":"₹21,999","img":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/j/j/-original-imah7gbgybkx2hz3.jpeg?q=70","store":"Flipkart","warranty":"1 Year Manufacturer Warranty for phone and 6 Months Warranty for In the Box Accessories"},
                {"name" :"Apple iPhone","model":"15 (White, 128 GB)","price":"₹64,900","discount":"7% off","oprice":"₹69,900","img":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70","store":"Amazon","warranty":"1 Year Manufacturer Warranty for phone and 6 Months Warranty for In the Box Accessories"},
                {"name" :"Motorola","model":"G85 5G (Olive Green, 128 GB)","price":"₹15,999","discount":"23% off","oprice":"₹20,999","img":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70","store":"Amazon","warranty":"1 Year Manufacturer Warranty for phone and 6 Months Warranty for In the Box Accessories"},
                {"name" :"OnePlus","model":"13R 5G (Nebula Noir, 128 GB)","price":"₹44,999","discount":"13% off","oprice":"₹51,999","img":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/1/5/-original-imah8vc2a8dg7xea.jpeg?q=70","store":"Oxygen","warranty":"1 Year Manufacturer Warranty for phone and 6 Months Warranty for In the Box Accessories"},
                {"name" :"POCO","model":"M7 PRO 5G (Lavender Frost, 256 GB)","price":"₹14,999","discount":"28% off","oprice":"₹20,999","img":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/g/z/-original-imah7jsp8bh3s4rv.jpeg?q=70","store":"Oxygen","warranty":"1 Year Manufacturer Warranty for phone and 6 Months Warranty for In the Box Accessories"},
                  {"name" :"Xiaomi","model":"14 Ultra (Black, 512 GB)","price":"₹99,999","discount":"16% off","oprice":"₹1,19,999","img":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/w/s/14-ultra-mzb0gfhin-xiaomi-original-imagzt8cdy56wmzx.jpeg?q=70","store":"Oxygen","warranty":"1 Year Manufacturer Warranty for phone and 6 Months Warranty for In the Box Accessories"},
                  {"name" :"Xiaomi","model":"14 Ultra (White, 512 GB)","price":"₹99,999","discount":"16% off","oprice":"₹1,19,999","img":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/i/o/14-ultra-mzb0gvnin-xiaomi-original-imagzt8cw9q2zgae.jpeg?q=70","store":"Oxygen","warranty":"1 Year Manufacturer Warranty for phone and 6 Months Warranty for In the Box Accessories"},
                   {"name" :"Apple iPhone","model":"15 (Pink, 128 GB)","price":"₹64,900","discount":"7% off","oprice":"₹69,900","img":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70","store":"Amazon","warranty":"1 Year Manufacturer Warranty for phone and 6 Months Warranty for In the Box Accessories"},
                   {"name" :"Apple iPhone","model":"15 (Yellow, 128 GB)","price":"₹64,900","discount":"7% off","oprice":"₹69,900","img":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/l/g/-original-imagtc5frtz9j7tb.jpeg?q=70","store":"Amazon","warranty":"1 Year Manufacturer Warranty for phone and 6 Months Warranty for In the Box Accessories"},
                   {"name" :"Samsung","model":" Galaxy S24 Ultra 5G(Titanium Black, 256 GB)","price":"81,999","discount":"39% off","oprice":"₹1,34,000","img":"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/e/8/-original-imahyvntxfrpuw6g.jpeg?q=70","store":"Flipkart","warranty":"1 Year Manufacturer Warranty for phone and 6 Months Warranty for In the Box Accessories"}
                   
                  
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
                                                                <p class="card-text">{item.warranty}</p>
                                                               
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