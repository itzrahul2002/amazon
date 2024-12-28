import React from 'react'
import './home.css'

import Slider from './Slider'
import Bar from './bar/Bar'
import Product from '../product/Product'


const Home = () => {
  return (
    <>
    <Bar/>
        <div className="home">
            
            <div className="homecarausel">
                <Slider/>
            </div>
            <div className="products">
                <div className="product">
                    <Product id="1" title="OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage)" price="46000"  image="./image/india.png"/>
                </div>
                <div className="product">
                    <Product id="1" title="OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage)" price="46000"  image="./image/india.png"/>
                </div>
                <div className="product">
                    <Product id="1" title="OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage)" price="46000"  image="./image/india.png"/>
                </div> 
            </div>
        </div>

    </>
  )
}

export default Home
