// import css from './Book.module.css';
import { Link, useLocation } from 'react-router-dom';
import { listBook, img, linkBook, titleBook, button } from './Book.module.css';
export default function Book({ list: { id, title, author, price, coverImageUrl } }) {
    const location = useLocation();
    const defaultImg =
        'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
    return (
        <li className={listBook}>
            <div className={linkBook}>
                <img
                    className={img}
                    src={coverImageUrl ? coverImageUrl : defaultImg}
                    width={250}
                    alt="poster"
                />
                <h3 className={titleBook}>{title}</h3>
                <h4>Author: {author}</h4>
                <p>Price: {price}</p>
                <Link to={`/book/${id}`} state={location}>
                    <button className={button}>About book</button>
                </Link>
                <button className={button}>Add</button>
            </div>
        </li>
    );
}
