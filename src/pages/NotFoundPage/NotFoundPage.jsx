import { Link } from 'react-router-dom';
import { notFoundPage, link } from './NotFoundPage.module.css';

export default function NotFoundPage() {
    return (
        <div className={notFoundPage}>
            <Link className={link} to={'/'}>
                {' '}
                Go home page
            </Link>
            <p>Sorry!!!! Page not found</p>
        </div>
    );
}
