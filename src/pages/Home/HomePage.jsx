import ListBooks from '../../components/ListBooks/ListBooks';
import SearchBox from '../../components/SearchBox/SearchBox';

export default function HomePage() {
    return (
        <>
            <SearchBox />
            <ListBooks />;
        </>
    );
}
