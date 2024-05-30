import { useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { arrBooks } from '../../assets/arrBooks';
import { GoArrowLeft } from 'react-icons/go';
import {
    container,
    titleMovie,
    titleAuthor,
    titleGenres,
    link,
    backLink,
    color,
} from './BookDetailsPage.module.css';

export default function BookDetailsPage() {
    const { bookId } = useParams();
    const location = useLocation();

    const backLinkRef = useRef(location.state ?? '/');

    const book = arrBooks.find(book => book.id === bookId);

    const defaultImg =
        'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

    return (
        <>
            <Link className={backLink} to={backLinkRef.current}>
                {<GoArrowLeft />} Back to list movies
            </Link>
            <div className={container}>
                {' '}
                <div>
                    {' '}
                    <img
                        src={book.coverImageUrl ? book.coverImageUrl : defaultImg}
                        width={250}
                        alt="poster"
                    />
                </div>
                <div>
                    {' '}
                    <h2 className={titleMovie}>{book.title}</h2>
                    <h2 className={titleAuthor}>
                        <span className={color}>Author:</span> {book.author}
                    </h2>
                    <h3 className={titleGenres}>
                        <span className={color}>Genre: </span>
                        {book.genre}
                    </h3>
                    <h3 className={color}>
                        <span className={color}>Book description</span>
                    </h3>
                    <p>{book.description}</p>
                    <p>
                        <span className={color}>Year published:</span> {book.yearPublished}
                    </p>
                    <p>
                        <span className={color}>Pages:</span> {book.pages}
                    </p>
                    <p>
                        <span className={color}>Price:</span> {book.price} {book.currency}
                    </p>
                    <p className={titleGenres}>
                        <span className={color}>Language:</span> {book.language}
                    </p>
                </div>
            </div>

            <div>
                <Suspense fallback={''}>
                    <Link className={link} to={'reviews'}>
                        Reviews
                    </Link>
                    <Outlet />
                </Suspense>
            </div>
        </>
    );
}
