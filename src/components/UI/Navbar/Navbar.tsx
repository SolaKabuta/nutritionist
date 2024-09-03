import './Navbar.css'
import logo from '../../../assets/logo/Logo.svg'
import icon from '../../../assets/icons/cricket.ball.fill.svg'
import arrow from '../../../assets/icons/nav_arrow.svg'

const Navbar = () => {
    const handleClick = () => {
        alert('Message sent')
    };

    return (
        <>
            <div>
                <div
                    className={'upper-nav'}>
                    <div
                        className={'nav-pattern'}>
                        <img
                            className={'pr-2'}
                            src={icon} alt=""/>
                        <p>
                            Join Our Personalized Nutrition Demo For Free
                        </p>
                        <img
                            className={'pl-4'}
                            src={arrow} alt=""/>
                    </div>
                </div>
                <nav>
                    {/* LOGO */}
                    <div>
                        <img
                            className={'logo-nav'}
                            src={logo}
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
                               href="#Contact">Contact Us
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;

const menu = [
    {
        title: "Home",
        link: "#",
    },
    {
        title: "About",
        link: "#About",
    },
    {
        title: "Team",
        link: "#Team",
    },
    {
        title: "Process",
        link: "#Process",
    },
    {
        title: "Pricing",
        link: "#Pricing",
    },
    {
        title: "Blog",
        link: "#Blog",
    },
]
