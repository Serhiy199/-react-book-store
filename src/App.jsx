import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/Home/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import BookDetailsPage from './pages/BookDetailsPage/BookDetailsPage';
import BookReviews from './components/BookReviews/BookReviews';
import BasketPage from './pages/BasketPage/BasketPage';
import Footer from './components/Footer/Footer';

function App() {
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
            <Footer />
        </>
    );
}

export default App;
