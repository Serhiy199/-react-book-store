import { useParams } from 'react-router-dom';
import { text, titleAuthor, color } from './BookReviews.module.css';
import { arrBooks } from '../../assets/arrBooks';

export default function BookReviews() {
    const { bookId } = useParams();
    const book = arrBooks.find(book => book.id === bookId);

    return (
        <>
            <ul>
                {book.reviews.length === 0 ? (
                    <p>We don't have reviews for this book</p>
                ) : (
                    book.reviews.map(comments => {
                        return (
                            <li key={`todo-item-${comments.id}`}>
                                <h4 className={titleAuthor}>
                                    <span className={color}>Author:</span> {comments.reviewer}
                                </h4>
                                <p className={text}>
                                    <span className={color}>Rating:</span> {comments.rating}
                                </p>
                                <p className={text}>{comments.comment}</p>
                            </li>
                        );
                    })
                )}
            </ul>
        </>
    );
}
