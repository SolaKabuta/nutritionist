import './HomePage.css'
import banner from '../../../assets/images/banner.jpg'
import avatars from '../../../assets/images/Container.jpg'
import Features from "./Features/Features.tsx";
import Blogs from "./Blog/Blogs.tsx";
import Testimonials from "./Testimonials/Testimonials.tsx";
import Pricing from "./Pricing/Pricing.tsx";

// import { useState } from 'react'


const Homepage = () => {
    // const [active, setActive] =
    return (
        <>
            <div
                className={'main'}>
                <div
                    className={'flexbox'}>
                    <div>
                        <img
                            id={'banner'}
                            src={banner}
                            alt="banner image"/>
                    </div>
                    <section>
                        <p
                            className={'transform'}>
                            Transform Your ❤️ Health with
                        </p>

                        {/*DIVIDER*/}
                        <div
                            className={'divider'}>
                        </div>
                        <h1
                            id={'home'}
                            className={'main-title'}>
                            Personalized Nutrition <br/>
                            Coaching
                        </h1>
                        <p
                            className={'main-text'}>
                            Welcome to Nutritionist, your partner in achieving optimal health through personalized
                            nutrition <br/>
                            coaching.
                            Our certified nutritionists are here to guide you on your weight loss journey,
                            providing <br/>
                            customized plans and ongoing support.
                            Start your transformation today and experience the <br/>
                            power of personalized nutrition coaching.
                        </p>

                        {/*BUTTONS*/}
                        <div>
                            <a
                                className={'nav-btn mr-5'}
                                href={'#pricing'}>
                                Get Starter Today
                            </a>
                            <a
                                className={'btn-2 text-black'}
                                href="">
                                Book A Demo
                            </a>
                            <div
                                className={'avatars'}>
                                <img
                                    src={avatars}
                                    alt="Happy Customers"/>
                                <a
                                    href={'#testimonials'}
                                    className={'customers'}>
                                    <span className={'numbers'}>430+ </span>
                                    Happy Customers
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* FEATURES */}
            <Features/>

            {/* BLOG */}
            <Blogs/>

            {/* TESTIMONIALS */}
            <Testimonials/>

            {/* PRICING */}
            <Pricing/>
        </>
    );
};

export default Homepage;