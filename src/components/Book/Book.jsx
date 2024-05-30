import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sale } from '../../redux/saleBooksSlice';
import {
    listBookStyle,
    img,
    container,
    titleBook,
    button,
    authorBook,
    priceBook,
    buttonAdd,
} from './Book.module.css';
import { FaShoppingBasket } from 'react-icons/fa';

export default function Book({ listBook }) {
    const location = useLocation();
    const dispatch = useDispatch();

    const defaultImg =
        'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
    return (
        <li className={listBookStyle}>
            <div className={container}>
                <img
                    className={img}
                    src={listBook.coverImageUrl ? listBook.coverImageUrl : defaultImg}
                    alt="poster"
                    // width={150}
                />
                <h3 className={titleBook}>{listBook.title}</h3>
                <h4 className={authorBook}>Author: {listBook.author}</h4>

                <Link to={`/book/${listBook.id}`} state={location}>
                    <button className={button}>About book</button>
                </Link>
                <button
                    onClick={() => {
                        dispatch(sale(listBook));
                    }}
                    className={buttonAdd}
                >
                    Add <FaShoppingBasket />
                </button>
                <p className={priceBook}>
                    Price: {listBook.price} {listBook.currency}
                </p>
            </div>
        </li>
    );
}
