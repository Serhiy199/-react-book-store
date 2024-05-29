// import css from './Book.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addQuantity, subtractQuantity } from '../../redux/orderedBooksSlice';
import { selectAddBook } from '../../redux/orderedBooksSlice';
// import { amount } from '../../redux/amountBasketSlice';

import { listBookStyle, img, linkBook, titleBook, button } from './BookSale.module.css';

export default function Book({ listBook }) {
    const stateBook = useSelector(selectAddBook);
    const location = useLocation();
    const dispatch = useDispatch();

    const defaultImg =
        'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
    return (
        <li className={listBookStyle}>
            <div className={linkBook}>
                <img
                    className={img}
                    src={listBook.coverImageUrl ? listBook.coverImageUrl : defaultImg}
                    width={150}
                    alt="poster"
                />
                <h3 className={titleBook}>{listBook.title}</h3>
                <h4>Author: {listBook.author}</h4>
                <p>Price: {listBook.price}</p>

                <button
                    onClick={() => {
                        dispatch(subtractQuantity(listBook));
                    }}
                    className={button}
                >
                    -
                </button>
                <span>{listBook.quantity}</span>
                <button
                    onClick={() => {
                        dispatch(addQuantity(listBook));
                    }}
                    className={button}
                >
                    +
                </button>
            </div>
        </li>
    );
}
