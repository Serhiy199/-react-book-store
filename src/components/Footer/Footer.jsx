import Address from '../Address/Address';
import SocialLink from '../SocialLink/SocialLink';
import FormFooter from '../FormFooter/FormFooter';
import { footer, container } from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={footer}>
            <div className={container}>
                <Address />
                <SocialLink />
                <FormFooter />
            </div>
        </footer>
    );
}
