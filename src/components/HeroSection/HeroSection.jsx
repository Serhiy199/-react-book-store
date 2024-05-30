import { hero, heroTitle } from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <>
            <div className={hero}>
                <section>
                    <h1 className={heroTitle}>
                        HERE YOU WILL FIND THE EXACT BOOK THAT WILL CHANGE YOUR LIFE!!!!
                    </h1>
                </section>
            </div>
        </>
    );
}
