import React, { Component } from 'react';
import Product from './Product';

class Cart extends Component {
  render() {
    const { products, removeFromCart } = this.props;

    return (
      <div className="cart">
        <h2>Cart</h2>

        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            remove={removeFromCart}
          />
        ))}
      </div>
    );
  }
}

export default Cart;
