import React from 'react'
import AddToCart from './AddToCart';
import productList from '../utils/productList';

const ProductCard = () => {
  return (
    <div className='flex flex-wrap place-content-center'>
      {productList.map(product =>
        <div key={product.id} className="card w-80 bg-base-100 shadow-xl m-10">
          <figure><img src={product.img} alt="product"/></figure>
          <div className="card-body">
            <h2 className="card-title">
              {product.title}
            </h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{product.badge}</div> 
            </div>
            <AddToCart/>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductCard
