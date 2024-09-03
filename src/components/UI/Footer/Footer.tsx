import './Footer.css'
import {icons, menu} from './data.tsx'
const Footer = () => {
    return (
        <>
            <div>
                <nav
                    className={'nav-footer'}>
                    {/*LOGO*/}
                    <div>
                        <a href="#">
                            <img
                                className={'logo-nav'}
                                src={icons[2].itm}
                                alt="Nutritionist logo"
                                loading={'lazy'}/>
                        </a>
                    </div>
                    <div>
                        <ul>
                            {menu.map((item) => (
                                <li>
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className={'flex items-center'}>
                        <a className={'top pr-5'}
                           href="#">Go To Top
                        </a>
                        <a
                            className={'arrow-btn'}
                            href="#">
                            <img src={icons[1].itm} alt={icons[1].alt}/>
                        </a>
                    </div>
                </nav>
                <section>
                    <div>
                        <div className={'bg-numbers-green'}>
                            <a href="">hello@squareup.com</a>
                            <a href="">+91 91813 23 2309</a>
                            <a href="">Somewhere in the World</a>
                        </div>
                        <p>
                            © 2023 Nutritionist. All rights reserved.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Footer;

