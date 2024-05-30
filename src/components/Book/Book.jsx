// import css from './Book.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sale } from '../../redux/saleBooksSlice';
import { listBookStyle, img, linkBook, titleBook, button, name } from './Book.module.css';

export default function Book({ listBook }) {
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
                    alt="poster"
                />
                <h3 className={name}>{listBook.title}</h3>
                <h4>Author: {listBook.author}</h4>
                <p>Price: {listBook.price}</p>

                <Link to={`/book/${listBook.id}`} state={location}>
                    <button className={button}>About book</button>
                </Link>
                <button
                    onClick={() => {
                        dispatch(sale(listBook));
                    }}
                    className={button}
                >
                    Add
                </button>
            </div>
        </li>
    );
}
