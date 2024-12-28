
import './header.css';
import React from 'react'
import {FaBars,} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
import {BiCart} from 'react-icons/bi'
import {GrLocation} from 'react-icons/gr'
import {IoMdArrowDropdown} from 'react-icons/io'
import {IoMdContact,IoIosContact} from 'react-icons/io'
import {IoCloseCircleSharp} from 'react-icons/io5'
export default function Header() {
  const openNav=()=>
  {
      document.getElementById('mySidenav').style.width = "400px";
  }
  const closeNav=()=>
  {
      document.getElementById('mySidenav').style.width = "0";
  }
  return (
    <><div>
        <header className="heade">
            <Link><img src="./image/amazon logo.png" alt="" className="logo" /></Link>
                <Link className='address'>
                    <div className='helo'>Hello</div><div className='selct'><GrLocation className='loc_icon'/>Select&nbsp;your&nbsp;address</div>
                </Link>
            

            <div className="headerSearch">
                <button className="dropDown">All
                  <IoMdArrowDropdown style={{ width: "20px" ,color:"black"}} />
                </button>
                <input type="text" className="searchInput" placeholder="Search Amazon in..."/>
                <button className="searchIcon">
                  <BsSearch className='serh_icon'/>
                </button>
                <div className="nav">
                  <div className="india">
                     <img src="./image/india.png" alt="" className='flag'/>&nbsp;EN<IoMdArrowDropdown style={{ width: "20px" }} />
                  </div>

                  <Link to="#" className='ac' style={{textDecoration:"none"}}>
                    <div className="navOption">
                      <span className="navOptionLineOne">Hello,&nbsp;Sign&nbsp;in</span>
                      <span className="navOptionLineTwo">
                        Accounts&nbsp;&&nbsp;lists
                        <IoMdArrowDropdown style={{ width: "20px" }} />
                      </span>
                    </div>
                  </Link>

                  <Link to="#" className='ret' style={{textDecoration:"none"}}>
                    <div className="navOption">
                      <div className="navOptionLineOne">Returns</div>
                      <span className="navOptionLineTwo">
                        & Orders
                        <IoMdArrowDropdown style={{ width: "20px" }} />
                      </span>
                    </div>
                  </Link>

                  <Link to="#" className='' style={{textDecoration:"none"}}>
                      <BiCart className="cart_text"/><span className="go_cart">Cart</span>
                  </Link>
              </div>
            </div>

              
        </header>
        <div className="navitem" style={{zIndex:""}}>
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
    </div>

        <div id="mySidenav" className="sidenav">
          <Link href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</Link>
            <div className="side_header">
                <Link to=""><IoMdContact/></Link>
                <Link to=""><IoIosContact/></Link>
            </div>
              <div className="side_header_list">
                <Link to="#">Amazom Items Lists</Link>
                <Link to="#">Amazom Items Lists</Link>
                <Link to="#">Amazom Items Lists</Link>
                <Link to="#">Amazom Items Lists</Link>
                <Link to="#">Amazom Items Lists</Link>
                <Link to="#">Amazom Items Lists</Link>
                <Link to="#">Amazom Items Lists</Link>
                <Link to="#">Amazom Items Lists</Link>
              </div>
              
        </div>
    </>
  )
}
