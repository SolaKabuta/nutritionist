import logo from '../../assets/logo/Logo.svg'
const Navbar = () => {
    return (
        <>
            <div>
                <nav>
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
                        {/*BTN CONTACT*/}
                        <li>
                            <a className={'nav-btn'}
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