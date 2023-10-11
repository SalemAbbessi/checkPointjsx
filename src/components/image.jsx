import React from 'react'
import product from '../product.js'
import Card from 'react-bootstrap/Card';

const Image = () => {
  return (
    <div>
      <Card.Img variant="top" src= {product.imageUrl}/>
    </div>
  )
}

export default Image