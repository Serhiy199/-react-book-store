import { container } from './NotFoundBooksOnSale.module.css';

export default function NotFoundBooksOnSale() {
    return (
        <div className={container}>
            Looks like you haven't added any items to your cart yet. To get started, you can add the
            product you like and order it by clicking on the cart!!!
        </div>
    );
}
