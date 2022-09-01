import React from 'react'
import '../../App.scss'
import img from '../../img/image2.png'
import img2 from '../../img/image.png'
import img3 from '../../img/image3.png'

function mobileMenuOpen() {
    document.getElementById("gmDropdown").classList.toggle("show");
}

function Render() {
  return (
    
    <div>
    <div className='render__main'>
        <div><h1>All Products</h1></div>

        <div className='render__left'>
            <h6>Sort by:</h6>
            <div class="simplemenu">
  <button onClick={mobileMenuOpen} class="dropbtn"><p>All products &#709;</p> </button>
  <ul id="gmDropdown" class="dropdown-content">
    <li><a href="#home">Best Value</a></li>
    <li><a href="#about">Best Performance</a></li>
    <li> <a href="#contact">Best Camera</a></li>
   </ul>
</div>
        </div>
    </div>


    <div className='render__title'>
        <p>Model</p>
        <p>Ram/Rom</p>
        <p>Tag</p>
        <p>Price</p>
    </div>

    <div className='render__items'>
        <div style={{display:"flex"}}>
        <img src={img} alt="" srcset="" style={{height:"100px"}} />
        <div style={{display:"flex",flexDirection:"column"}}>
        <h3>Samsung Galaxy S6</h3>
        <p style={{marginTop:"-10px"}}>Samsung</p>
        </div>
        </div>
        <p style={{marginLeft:"-140px"}}>6/256</p>
        <p className='as__button' style={{marginLeft:"60px"}}>Best Perform</p>
        <p>TK. 120,000</p>
    </div>

    <div className='render__items'>
        <div style={{display:"flex"}}>
        <img src={img2} alt="" srcset="" style={{height:"100px"}} />
        <div style={{display:"flex",flexDirection:"column"}}>
        <h3>Samsung Galaxy S6</h3>
        <p style={{marginTop:"-10px"}}>Samsung</p>
        </div>
        </div>
        <p style={{marginLeft:"-140px"}}>6/256</p>
        <p className='as__button2' style={{marginLeft:"60px"}}>Best Value</p>
        <p>TK. 150,000</p>
    </div>


    <div className='render__items'>
        <div style={{display:"flex"}}>
        <img src={img3} alt="" srcset="" style={{height:"100px"}} />
        <div style={{display:"flex",flexDirection:"column"}}>
        <h3>Samsung Galaxy S6</h3>
        <p style={{marginTop:"-10px"}}>Samsung</p>
        </div>
        </div>
        <p style={{marginLeft:"-140px"}}>8/256</p>
        <p className='as__button3' style={{marginLeft:"60px"}}>Best Camera</p>
        <p>TK. 135,000</p>
    </div>


    </div>
  )
}



export default Render