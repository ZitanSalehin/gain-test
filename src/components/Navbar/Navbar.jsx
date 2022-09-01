import React from 'react'
import '../../App.scss'

function Navbar() {
  return (
    <div className='navbar'>
        <h1>Logo</h1>

        <div className='nav__left'>

        <div class="search">
  <span class="fa fa-search"></span>
  <input placeholder="Search by Title or Brand"/>
  <button ><h2>Add Product</h2> </button>
    </div>


        </div>
    </div>
  )
}

export default Navbar