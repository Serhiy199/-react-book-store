import { container, form, title, model, footerEmail, button } from './FormFooter.module.css';

export default function FormFooter() {
    return (
        <div className={container}>
            <form className={form}>
                <h3 className={title}>ПІДПИШИСЬ НА СПОВІЩЕННЯ</h3>
                <div className={model}>
                    <input type="email" name="email" className={footerEmail} placeholder="E-mail" />
                    <button type="submit" className={button}>
                        Підписатися
                    </button>
                </div>
            </form>
        </div>
    );
}
