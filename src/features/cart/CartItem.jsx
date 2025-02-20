
import {formatCurrency} from '../../utils/helpers';
import PropTypes from 'prop-types';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';
import { useSelector } from 'react-redux';


function CartItem({ item  }) {
const { pizzaId, name, quantity, totalPrice }= item;
const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))
 

return (
<li className="py-3 sm:flex sm:items.center sm:justify-between" key={pizzaId}>
<p className='mb-1 sm:mb-0'>
{quantity}&times;{name}
</p>
<div className='flex items-center justify-between sm:gap-6'>
<p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>

<UpdateItemQuantity 
pizzaId={pizzaId} 
currentQuantity ={currentQuantity}
/>
<DeleteItem pizzaId={pizzaId}/>
</div>
</li>
);
}

// Define prop types
CartItem.propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string.isRequired,
      totalPrice: PropTypes.number.isRequired,
     quantity: PropTypes.number.isRequired,
      pizzaId: PropTypes.number.isRequired,
    }).isRequired,
  };
export default CartItem;