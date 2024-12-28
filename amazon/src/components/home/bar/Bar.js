import React from 'react'
import './bar.css'
import {FaBars,} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Bar = () => {
    const openNav=()=>
    {
        document.getElementById('mySidenav').style.width = "400px";
    }
    const closeNav=()=>
    {
        document.getElementById('mySidenav').style.width = "0";
    }
  return (
    <>
    <div className="navitem" style={{marginTop:"0.8%"}}>
        <div className="navlist">
                <ul>
                  <li className='item1'><Link to="#"><FaBars onClick={openNav}/></Link></li>
                  <li className='item1'><Link to="#">All</Link></li>
                  <li className='item1'><Link to="#">Amazon&nbsp;MiniTv</Link></li>
                  <li className='item1'><Link to="#">Sell</Link></li>
                  <li className='item1'><Link to="#">Best&nbsp;Sellers</Link></li>
                  <li className='item1'><Link to="#">Moblies</Link></li>
                  <li className='item1'><Link to="#">Todays'&nbsp;Deals</Link></li>
                  <li className='item1'><Link to="#">Customer&nbsp;Services</Link></li>
                  <li className='item1'><Link to="#">New&nbsp;Releases</Link></li>
                  <li className='item1'><Link to="#">Electronics</Link></li>
                  <li className='item4'><Link to="#"><img src="./image/mini.png" alt="" className='img_header'/></Link></li>
              </ul>
        </div>
    </div>
</>
  )
}

export default Bar