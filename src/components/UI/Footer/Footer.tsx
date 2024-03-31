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
                        <img
                            className={'logo-nav'}
                            src={logo}
                            alt="Nutritionist logo"
                            loading={'lazy'}/>
                    </div>
                    <div>
                        <ul>
                            {/*NAV*/}
                            <li>
                                <a href="#">Home
                                </a>
                            </li>
                            <li>
                                <a href="#About">About
                                </a>
                            </li>
                            <li>
                                <a href="#Team">Team
                                </a>
                            </li>
                            <li>
                                <a href="#Process">Process

                                </a>

                            </li>
                            <li>
                                <a href="#Pricing">Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#Blog">Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#Contact">Contact
                                </a>
                            </li>
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