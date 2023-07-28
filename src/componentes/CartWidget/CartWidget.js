import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import './CartWidget.css';


const CartWidget = () =>  {
    const { cart } = useContext(CartContext)
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
        
    return(
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
             <FontAwesomeIcon icon={faCartShopping} />
             <span>{totalQuantity}</span>
             
        </Link>
    )
}

export default CartWidget;