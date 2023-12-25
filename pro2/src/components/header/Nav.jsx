import  { Fragment, useState } from 'react'
import './Nav.css'
import logo from '../../assets/IMAGE.svg'
const Nav = () => {
    let [x , setX]=useState(true)
    let y=()=>{
        if(x!==false){
            setX(false)
            console.log('salom');
        }
        if(x!==true){
            setX(true)
            console.log('xayr');
        }
    }
  return (
    <Fragment>
        <nav>
            <div className="container">
                <div className="navbar">
                   <div className="menu">
                   <img src={logo} alt="img" />
                        <ul className={x ? "lists" : "togl"}>
                            <li><a href="/">Home</a></li>
                            <li><a href="#aboute">About</a></li>
                            <li><a href="#servise">Services</a></li>
                            <li><a href="#Articles">Articles</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                        <button onClick={y}  className='nonebtn'>
                        <i className='bx bxs-food-menu' ></i>
                        menu
                        </button>
                   </div>
                   <div className='cart'>
                        <p>Cart (0)</p>
                        <button>Get a free quote</button>
                   </div>
                </div>
            </div>
        </nav>
    </Fragment>
  )
}

export default Nav
