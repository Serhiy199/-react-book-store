import QuizList from '../../components/ListBooks/ListBooks';
import SearchBox from '../../components/SearchBox/SearchBox';

export default function HomePage({
    onFilterBooks,
    onSetFilterBooks,
    onListBooks,
    onQuizId,
    // onDelete,
}) {
    return (
        <>
            <SearchBox value={onFilterBooks} onSetFilterBooks={onSetFilterBooks} />
            <QuizList
                // onDelete={onDelete}
                onQuizId={onQuizId}
                onListBooks={onListBooks}
            />
            ;
        </>
    );
}
