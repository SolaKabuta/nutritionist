import './Navbar.css'
import {icons, menu} from './data.tsx'

const Navbar = () => {
    const handleClick = () => {
        alert('Message sent')
    };

    return (
        <>
            <main>
                <div
                    className={'upper-nav'}>
                    <div
                        className={'nav-pattern'}>
                        <img
                            className={'pr-2'}
                            src={icons[0].itm} alt=""/>
                        <p>
                            Join Our Personalized Nutrition Demo For Free
                        </p>
                        <img
                            className={'pl-4'}
                            src={icons[1].itm} alt=""/>
                    </div>
                </div>
                <nav>
                    {/* LOGO */}
                    <div>
                        <img
                            className={'logo-nav'}
                            src={icons[2].itm}
                            alt="Nutritionist logo"
                            loading={'lazy'}/>
                    </div>
                    <ul>
                        {/* MENU */}
                        {menu.map((item) => (
                            <li>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))}
                        {/* BTN CONTACT */}
                        <li>
                            <a onClick={handleClick} className={'nav-btn'}
                               href="/">Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
            </main>
        </>
    );
};

export default Navbar;


