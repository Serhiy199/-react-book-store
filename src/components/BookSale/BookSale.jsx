import { useDispatch } from 'react-redux';
import { addQuantity, subtractQuantity } from '../../redux/saleBooksSlice';
import { listBookStyle, img, linkBook, titleBook, button } from './BookSale.module.css';

export default function Book({ listBook }) {
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
