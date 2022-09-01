import React from 'react'
import '../../App.scss';


export default function Form() {

   
  return (
    <div className="form">
        
        
        <form id='form'>
        <h1>Add Product</h1>
            <div className="grid">
                <div className="input-group">
                    <p>Product name</p>
                    <input type="text" placeholder='Enter your product name' className='form-input' />
                </div>

                <div style={{display:"flex"}} className="input-group2">
                <div className="input-group">
                    <p>Brand</p>
                    <input type="text" placeholder='Enter brand name' className='form-input' />
                </div>
                <div className="input-group">
                    <p>Ram/Rom</p>
                    <input type="text" placeholder='Zip code' className='form-input' />
                </div>
                </div>

                {/* <select className='form-input' id='input__group' style={{color:"#dfdfdf"}}>
                    <option value="Investment" defaultValue >Tag</option>
                    <option value="Expense">Best Value</option>
                    <option value="Savings">Best Performance</option>
                </select> */}

                <div className="input-group">
                    <p>Price</p>
                    <input type="text" placeholder='Enter your product price' className='form-input' />
                </div>
                <div className="submit-btn" style={{display:"flex",float:"right",marginRight:"30px"}}>
                    <div style={{display:"flex"}} className='btn__groups'>
                    <button className='submitBtn' id='btn1'>Cancel</button>
                    <span class="fa fa-xmark" style={{marginTop:"20px",}}></span>
                    </div>

                    <div style={{display:"flex"}} className='btn__groups'>
                    <button className='submitBtn' id='btn2'>Publish</button>
                    <span class="fa fa-check" style={{marginTop:"20px",}}></span>
                    </div>

                </div>
            </div>    
        </form>

    </div>
  )
}
