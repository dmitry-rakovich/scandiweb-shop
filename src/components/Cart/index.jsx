import { useState } from 'react'
import './index.scss'

function Cart() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='cart'>
      <div className='cart__icon' onClick={() => setIsOpen(!isOpen)}>
        <img src="./src/assets/images/header-cart.svg" alt="" />
      </div>
      <div className={isOpen ? 'cart__products open' : 'cart__products'}>
        <div className="cart-item">
          <div className="cart-item__info">
            <p>Apollo Running Short</p>
            <p>$ 50.00</p>
            <div>
              <p>S</p>
              <p>M</p>
            </div>
          </div>
          <div className="cart-item__counter">
            <p>+</p>
            <p>1</p>
            <p>-</p>
          </div>
            <img src="./src/assets/images/Product.png" alt="" width={"105"} height={"140"}/>
        </div>
      </div>
    </div>
  )
}

export default Cart