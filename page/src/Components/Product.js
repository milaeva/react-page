import React, { Component } from 'react';

class Product  extends Component {
  render() {
    const { title, price, id, remove } = this.props;

    return (
      <div className="product">
        <h4>{title}</h4>
        <p>{price}</p>

        <button onClick={() => remove(id)}>Remove</button>
      </div>
    );
  }
}

export default Product;
