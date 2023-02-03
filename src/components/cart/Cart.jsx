// redux hooks
import { useSelector, useDispatch } from 'react-redux'
//redux functions
import { removeFromCart, resetCart } from "../../redux/slices/cartSlice"
//react icons
import {FiDelete} from "react-icons/fi"
// stykes .scss
import "./cart.scss"





const Cart = () => {
                 {/*redux hook*/}
    const dispatch = useDispatch();
                 {/*redux hook*/}
    const products = useSelector(state => state.cart.products)

    //calculate total price function
    const totalPrice = () =>  {
        let total = 0;
        products.forEach(item => { total+= item.quantity * item.price
        })
        return total.toFixed(2)
    }

  return (
    <div className='cart'>
        <h2>Products in your Cart</h2>

        {
            products.map(item => (
                <div className='item' key={item.id}>
                    {/*strapi image url .env */}
                    <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL+item.image} alt="img-cart" />
                    <div className="details">
                        <h1>{item.title} </h1>
                        <p>{item.description.substring(0,40)}</p>
                        <div className="price">
                            {item.quantity} x ${item.price}
                        </div>
                    </div>

                    {/*DELETE FROM CART*/}
                    <FiDelete
                    onClick={() => dispatch(removeFromCart(item.id))}
                     size={20} className="delete"/>
                </div>
            ))}
                    {/*TOTAL*/}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}  </span>
            </div>

            <button
            >
                CHECKOUT
            </button>

             {/*CLEAR CART FUNCTION*/}
            <span 
             onClick={() => dispatch(resetCart())}
            className="reset">Clear Cart</span>
    </div>
  )
}

export default Cart