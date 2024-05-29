import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { selectAmountValue } from '../../redux/amountBasketSlice';
import { headerStyle, active, link } from './Navigation.module.css';
import clsx from 'clsx';
import { FaShoppingBasket } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { selectAddBook } from '../../redux/orderedBooksSlice';

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
                    <FaShoppingBasket /> {arrSaleBooks.length > 0 ? `${totalScore} USD` : ''}
                </NavLink>
            </nav>
        </header>
    );
}
