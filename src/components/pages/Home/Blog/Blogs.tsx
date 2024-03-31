import './Blogs.css'

import card1 from '../../../../assets/images/blog_card_1.jpg'
import avatar from '../../../../assets/images/blog_avatar.jpg'
import heart from '../../../../assets/icons/heart.svg'
import fav from '../../../../assets/icons/fav.svg'


import card2 from '../../../../assets/images/blog_card_2.jpg'
import avatar2 from '../../../../assets/images/blog_avatar_2.jpg'

import card3 from '../../../../assets/images/blog_card_3.jpg'
import avatar3 from '../../../../assets/images/blog_avatar_3.jpg'

import card4 from '../../../../assets/images/blog_card_4.jpg'
import avatar4 from '../../../../assets/images/blog_avatar_4.jpg'

// import { useState } from 'react';


const Blogs = () => {

    const handleClick = () => {
        alert('I like it too baby!')
    }

    return (
        <>
            <div
                className={'pt-44'}>
                <div
                    className={'features-grid'}>
                    <h2
                        className={'features-title'}>
                        Our Blogs
                    </h2>
                    <p
                        className={'pb-20'}>
                        Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness <br/>
                        experts. Here's what you can expect from our blog.
                    </p>
                </div>
                <div
                    className={'blog-layout-container'}>
                    <div
                        className={'blog-layout'}>

                        {/* BLOG CARD 1 */}
                        <div
                            className={'blog-card'}>
                            <img src={card1} alt=""/>
                            <p
                                className={'card-name'}>
                                Weight Loss
                            </p>
                            <p
                                className={'blog-card-title'}>
                                The Benefits of Hydratation for Weight Loss
                            </p>
                            <p
                                className={'card-text'}>
                                Discover how staying hydrated can support your weight loss goals and improve overall
                                health
                            </p>
                            {/* CARD AVATAR LAYOUT */}
                            <div
                                className={'avatar-layout'}>
                                <div
                                    className={'flex items-center gap-5'}>
                                    <div>
                                        <img src={avatar} alt=""/>
                                    </div>
                                    <div>
                                        <p
                                            className={'blog-avatar-title'}>
                                            Emily Johnson
                                        </p>
                                        <p>
                                            23 May 2023 - 5 min read
                                        </p>
                                    </div>
                                </div>
                                {/* ICONS LAYOUT */}
                                <div
                                    className={'icons-layout'}>
                                    <div
                                        onClick={handleClick}
                                        className={'blog-icons'}>
                                        <img src={heart} alt=""/>
                                    </div>
                                    <div
                                        className={'blog-icons'}>
                                        <img src={fav} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* BLOG CARD 2*/}
                        <div
                            className={'blog-card'}>
                            <img src={card2} alt=""/>
                            <p
                                className={'card-name'}>
                                Mindful Eating
                            </p>
                            <p
                                className={'blog-card-title'}>
                                Cultivating a Healthy Relationship with Food
                            </p>
                            <p
                                className={'card-text'}>
                                Learn how practicing mindful eating can help you develop a healthier relationship with <br/>
                                food and improve your overall well-being.
                            </p>
                            {/* CARD AVATAR LAYOUT */}
                            <div
                                className={'avatar-layout'}>
                                <div
                                    className={'flex items-center gap-5'}>
                                    <div>
                                        <img src={avatar2} alt=""/>
                                    </div>
                                    <div>
                                        <p
                                            className={'blog-avatar-title'}>
                                            Sarah Hondermarck
                                        </p>
                                        <p>
                                            23 May 2023 - 5 min read
                                        </p>
                                    </div>
                                </div>
                                {/* ICONS LAYOUT */}
                                <div
                                    className={'icons-layout'}>
                                    <div
                                        onClick={handleClick}
                                        className={'blog-icons'}>
                                        <img src={heart} alt=""/>
                                    </div>
                                    <div
                                        className={'blog-icons'}>
                                        <img src={fav} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* BLOG CARD */}
                        <div
                            className={'blog-card'}>
                            <img src={card3} alt=""/>
                            <p
                                className={'card-name'}>
                                Understanding Macronutrients
                            </p>
                            <p
                                className={'blog-card-title'}>
                                Carbohydrates, Proteins, and Fats
                            </p>
                            <p
                                className={'card-text'}>
                                Get a comprehensive understanding of macronutrients and their role in your diet for <br/>
                                optimal health and weight management.
                            </p>
                            {/* CARD AVATAR LAYOUT */}
                            <div
                                className={'avatar-layout'}>
                                <div
                                    className={'flex items-center gap-5'}>
                                    <div>
                                        <img src={avatar3} alt=""/>
                                    </div>
                                    <div>
                                        <p
                                            className={'blog-avatar-title'}>
                                            Mark Wilson
                                        </p>
                                        <p>
                                            23 May 2023 - 5 min read
                                        </p>
                                    </div>
                                </div>
                                {/* ICONS LAYOUT */}
                                <div
                                    className={'icons-layout'}>
                                    <div
                                        onClick={handleClick}
                                        className={'blog-icons'}>
                                        <img src={heart} alt=""/>
                                    </div>
                                    <div
                                        className={'blog-icons'}>
                                        <img src={fav} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* BLOG CARD */}
                        <div
                            className={'blog-card'}>
                            <img src={card4} alt=""/>
                            <p
                                className={'card-name'}>
                                Healthy Snacks on the Go
                            </p>
                            <p
                                className={'blog-card-title'}>
                                Quick and Nutritious Options
                            </p>
                            <p
                                className={'card-text'}>
                                Explore a variety of convenient and healthy snack ideas to keep you fueled throughout <br/>
                                the day.
                            </p>
                            {/* CARD AVATAR LAYOUT */}
                            <div
                                className={'avatar-layout'}>
                                <div
                                    className={'flex items-center gap-5'}>
                                    <div>
                                        <img src={avatar4} alt=""/>
                                    </div>
                                    <div>
                                        <p
                                            className={'blog-avatar-title'}>
                                            Sam Thomas
                                        </p>
                                        <p>
                                            23 May 2023 - 5 min read
                                        </p>
                                    </div>
                                </div>
                                {/* ICONS LAYOUT */}
                                <div
                                    className={'icons-layout'}>
                                    <div
                                        onClick={handleClick}
                                        className={'blog-icons'}>
                                        <img src={heart} alt=""/>
                                    </div>
                                    <div
                                        className={'blog-icons'}>
                                        <img src={fav} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Blogs;