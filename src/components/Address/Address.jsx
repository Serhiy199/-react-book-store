import { Link } from 'react-router-dom';
import {
    logo,
    logoLink,
    addressContainer,
    address,
    contact,
    listContact,
} from './Address.module.css';

export default function Address() {
    return (
        <div className={addressContainer}>
            <Link className={logo}>
                <span className={logoLink}>Book</span>Store
            </Link>
            <address>
                <ul>
                    <li>
                        <p className={address}>м. Києв, пр-т Лесі Українки, 26</p>
                    </li>
                    <li className={listContact}>
                        <Link href="e-mail:info@devstudio.com" className={contact}>
                            info@devstudio.com
                        </Link>
                        <br />
                    </li>
                    <li className={listContact}>
                        <Link href="tel:+380961111111" className={contact}>
                            +38 096 111 11 11
                        </Link>
                    </li>
                </ul>
            </address>
        </div>
    );
}
