import React from 'react';
import { connect } from 'react-redux';
import '../css/index.css';

function Cart({ cartItems }) {
  return (
    <>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((cartItem, index) => (
            <div key={index} className="cartItem">
              <div className="cart-item">
                <img src={cartItem.image} alt={cartItem.title} />
                <div>
                  <h3>{cartItem.title}</h3>
                  <p>{cartItem.price}$</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems
  };
};

export default connect(mapStateToProps)(Cart);
