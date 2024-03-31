import logo from "../../../assets/logo/Logo.svg";
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
                        <div>
                            <li>
                                <a className={'top'}
                                   href="#">Go To Top
                                </a>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Footer;