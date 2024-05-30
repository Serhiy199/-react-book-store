import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { containerFooterIcon, title, listIcon, icon, socialLink } from './SocialLink.module.css';

export default function SocialLink() {
    return (
        <>
            <div className={containerFooterIcon}>
                <h3 className={title}>JOIN</h3>
                <ul className={listIcon}>
                    <li>
                        <Link className={socialLink} href="">
                            <FaInstagram className={icon} />
                        </Link>
                    </li>
                    <li>
                        <Link className={socialLink} href="">
                            <FaTwitter className={icon} />
                        </Link>
                    </li>
                    <li>
                        <Link className={socialLink} href="">
                            <FaFacebookF className={icon} />
                        </Link>
                    </li>
                    <li>
                        <Link className={socialLink} href="">
                            <FaLinkedinIn className={icon} />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
