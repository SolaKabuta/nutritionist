import logo from "../../../assets/logo/Logo.svg";
import arrow from "../../../assets/icons/btn_arrow.svg";
import './Footer.css'
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
                                src={logo}
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
                            <img src={arrow} alt=""/>
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Footer;

const menu = [
    {
        title: "Home",
        link : "/",
    },
    {
        title: "About",
        link : "/",
    },
    {
        title: "Team",
        link : "/",
    },
    {
        title: "Process",
        link : "/",
    },
    {
        title: "Pricing",
        link : "/",
    },
    {
        title: "Blog",
        link : "/",
    },
    {
        title: "Contact",
        link : "/",
    },
]