import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filterSlice';
import { selectAmountValue } from '../../redux/amountBasketSlice';
// import { selectAddBook } from '../../redux/orderedBooksSlice';
import { headerStyle, active, link } from './Navigation.module.css';
import clsx from 'clsx';
import { FaShoppingBasket } from 'react-icons/fa';

export default function Navigation() {
    // const dispatch = useDispatch();
    // const book = useSelector(selectAddBook);
    const value = useSelector(selectAmountValue);
    const buildLinkClass = ({ isActive }) => {
        return clsx(link, isActive && active);
    };
    return (
        <header className={headerStyle}>
            <nav>
                <NavLink className={buildLinkClass} to="/">
                    Home
                </NavLink>
                <NavLink className={buildLinkClass} to="/basket">
                    <FaShoppingBasket /> {value} USD
                </NavLink>
            </nav>
        </header>
    );
}
