import './SideDrawer.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideDrawer = ({show, click}) => {
    const SideDrawerClass = ["sidedrawer"];
    if(show){
        SideDrawerClass.push("show");
    }
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const getCartCount = () => {
        return cartItems.reduce((qty,item) => Number(item.qty) + qty, 0)
    }

    return  <div className={SideDrawerClass.join(" ")}> 
     <ul className="sidedrawer__links" onClick={click}>
         <li>
            <Link to="/cart">
            <span>
            <i className="fas fa-shopping-cart"></i>
            Cart
            <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
            </Link>
         </li>
         <li>
            <Link to="/">
                Shop
            </Link>
         </li>
     </ul>
    </div>
};

export default SideDrawer
