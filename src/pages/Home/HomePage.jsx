import ListBooks from '../../components/ListBooks/ListBooks';
import SearchBox from '../../components/SearchBox/SearchBox';

export default function HomePage(
    {
        // onQuizId,
        // onDelete,
    }
) {
    return (
        <>
            <SearchBox />
            <ListBooks
            // onDelete={onDelete}
            // onQuizId={onQuizId}
            />
            ;
        </>
    );
}
