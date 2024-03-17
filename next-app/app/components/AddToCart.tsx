"use client";
// makes entire component a client component (CSR) 
// any components based off of this component will automatically become CSR

import React from 'react'

const AddToCart = () => {
  return (
    <div>
        <button className='btn' onClick={() => console.log('Click')}>Add to Cart</button>
    </div>
  )
}

export default AddToCart