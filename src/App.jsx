import { useEffect, useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { books } from './assets/arrBooks';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/Home/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import BookDetailsPage from './pages/BookDetailsPage/BookDetailsPage';

function App() {
    // const [arrBooks, setArrBooks] = useState(() => {
    //     const savedBooks = window.localStorage.getItem('saved-books');
    //     return savedBooks !== null ? JSON.parse(savedBooks) : books;
    // });
    const [arrBooks, setArrBooks] = useState(books);
    // console.log(arrBooks);

    const [filterBooks, setFilterBooks] = useState('');
    const [filterQuizById, setFilterQuizById] = useState('');

    const selectedQuiz = quizId => {
        return setFilterQuizById(quizId);
    };

    // const findBooks = arrBooks.find(book => book.id === filterBooks);

    const visibleBooks = arrBooks.filter(book =>
        book.title.toLowerCase().includes(filterBooks.toLowerCase())
    );

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
                <Route
                    path="/"
                    element={
                        <HomePage
                            onFilterBooks={filterBooks}
                            onSetFilterBooks={setFilterBooks}
                            onListBooks={visibleBooks}
                            // onDelete={deleteQuiz}
                            onBooksId={selectedQuiz}
                        />
                    }
                />
                <Route path="/book/:bookId" element={<BookDetailsPage />}>
                    {/* <Route path="cast" element={<MovieCast />} />
                    <Route path="reviews" element={<MovieReviews />} /> */}
                </Route>
                {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                        <Route path="cast" element={<MovieCast />} />
                        <Route path="reviews" element={<MovieReviews />} />
                    </Route> */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
