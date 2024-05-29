import { useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { arrBooks } from '../../assets/arrBooks';
import { GoArrowLeft } from 'react-icons/go';
import {
    container,
    titleMovie,
    titleGenres,
    link,
    backLink,
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
                        width={300}
                        alt="poster"
                    />
                </div>
                <div>
                    {' '}
                    <h2 className={titleMovie}>{book.title}</h2>
                    <h2 className={titleMovie}>Author: {book.author}</h2>
                    <h3 className={titleGenres}>Genre: {book.genre}</h3>
                    <p>Year published: {book.yearPublished}</p>
                    <p>Pages: {book.pages}</p>
                    <p>
                        Price: {book.price} {book.currency}
                    </p>
                    <h3 className={titleGenres}>Language: {book.language}</h3>
                </div>
            </div>

            <div>
                <h3>Book description</h3>
                <p>{book.description}</p>
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
