import React, { Component } from 'react'
import "./product.css"
export default class Product extends Component {
    constructor(props)
    {
        super(props)
    }
    
  render() {
    const {id,title,price,image}=this.props;
    return (
      <>
          <div className="product">
             <div className="productimage">
                <img src={image} alt="" />
             </div>
              <div className="productinfo">
                <p className='title'>{title}</p>
              </div>
              <p className='price'>₹{price}</p>
              <div>
                 <button className="addto_cart_btn">Add to basket</button>
              </div>
          </div>
      </>
    )
  }
}
