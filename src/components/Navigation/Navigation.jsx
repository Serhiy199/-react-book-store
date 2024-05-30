import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
    header,
    navigation,
    navigationLogo,
    navigationLogoLink,
    link,
    active,
} from './Navigation.module.css';
import clsx from 'clsx';
import { FaShoppingBasket } from 'react-icons/fa';
import { selectAddBook } from '../../redux/saleBooksSlice';
import SearchBox from '../../components/SearchBox/SearchBox';

export default function Navigation() {
    const arrSaleBooks = useSelector(selectAddBook);
    const totalScore = arrSaleBooks.reduce((total, book) => {
        return total + book.totalScore;
    }, 0);

    const buildLinkClass = ({ isActive }) => {
        return clsx(link, isActive && active);
    };

    return (
        <header className={header}>
            <nav className={navigation}>
                <Link href="./index.html" lang="en" className={navigationLogo}>
                    <span className={navigationLogoLink}>Book</span>Store
                </Link>
                <NavLink className={buildLinkClass} to="/">
                    Books
                </NavLink>
                <SearchBox />
                <NavLink className={buildLinkClass} to="/delivery_payment">
                    <FaShoppingBasket />{' '}
                    {arrSaleBooks.length > 0 ? `${parseFloat(totalScore.toFixed(2))} USD` : ''}
                </NavLink>
            </nav>
        </header>
    );
}
