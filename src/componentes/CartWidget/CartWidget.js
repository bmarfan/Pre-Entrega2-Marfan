import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

function CartWidget(){
    return(
        <button className='button is-dark'>
            <FontAwesomeIcon icon={faCartShopping} />
            0
        </button>
    )
}

export default CartWidget;