import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { headerStyle, active, link } from './Navigation.module.css';
import clsx from 'clsx';
import { FaShoppingBasket } from 'react-icons/fa';
import { selectAddBook } from '../../redux/saleBooksSlice';

export default function Navigation() {
    const arrSaleBooks = useSelector(selectAddBook);
    const totalScore = arrSaleBooks.reduce((total, book) => {
        return total + book.totalScore;
    }, 0);

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
                    <FaShoppingBasket />{' '}
                    {arrSaleBooks.length > 0 ? `${parseFloat(totalScore.toFixed(2))} USD` : ''}
                </NavLink>
            </nav>
        </header>
    );
}
