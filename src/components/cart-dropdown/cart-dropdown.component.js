import React from "react"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"

import CustomButton from "../custom-button/custom-button.component"

import CartItem from "../cart-item/cart-item.component"

import {selectCartItems} from "../../redux/cart/cart.selectors"

import "./cart-dropdown.styles.scss"

const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    {cartItems.map((cartItem) => (
      <CartItem key={CartItem.id} item={cartItem} />
    ))}
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CartDropdown)
