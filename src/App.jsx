import { Routes, Route } from 'react-router-dom';

import './App.css';

import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/Home/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import BookDetailsPage from './pages/BookDetailsPage/BookDetailsPage';
import BookReviews from './components/BookReviews/BookReviews';
import BasketPage from './pages/BasketPage/BasketPage';

function App() {
    // const [arrBooks, setArrBooks] = useState(() => {
    //     const savedBooks = window.localStorage.getItem('saved-books');
    //     return savedBooks !== null ? JSON.parse(savedBooks) : books;
    // });

    // const [filterQuizById, setFilterQuizById] = useState('');

    // const selectedQuiz = quizId => {
    //     return setFilterQuizById(quizId);
    // };

    // const findBooks = arrBooks.find(book => book.id === filterBooks);

    // const deleteQuiz = contactId => {
    //     setArrQuizQuestions(prevQuiz => {
    //         return prevQuiz.filter(contact => contact.id !== contactId);
    //     });
    // };
    // console.log(arrBooks);
    // useEffect(() => {
    //     localStorage.setItem('saved-books', JSON.stringify(arrBooks));
    // }, [arrBooks]);
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/basket" element={<BasketPage />} />
                <Route path="/book/:bookId" element={<BookDetailsPage />}>
                    <Route path="reviews" element={<BookReviews />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
