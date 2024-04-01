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
        alert('I like it too baby!❤️')
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
                        Our blog is a treasure trove of informative and engaging articles written by our team of
                        nutritionists, dietitians, and wellness <br/>
                        experts. Here's what you can expect from our blog.
                    </p>
                </div>
                <div
                    className={'blog-layout-container'}>
                    <div
                        className={'blog-layout'}>
                        {card.map((c) => (
                            // CARD
                            <div
                                className={'blog-card'}>
                                <img src={c.img[0]} alt=""/>
                                <p
                                    className={'card-name'}>
                                    {c.name}
                                </p>
                                <p
                                    className={'blog-card-title'}>
                                    {c.title[0]}
                                </p>
                                <p
                                    className={'card-text'}>
                                    {c.text[0]}
                                </p>
                                {/* CARD AVATAR LAYOUT */}
                                <div
                                    className={'avatar-layout'}>
                                    <div
                                        className={'flex items-center gap-5'}>
                                        <img src={c.img[1]} alt=""/>
                                        <div>
                                            <p
                                                className={'blog-avatar-title'}>
                                                {c.title[1]}
                                            </p>
                                            <p>
                                                {c.text[1]}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className={'icons-layout'}>
                                        <div className="blog-icons">
                                            <a
                                                onClick={handleClick}
                                                href="">
                                                <img src={c.img[2]} alt=""/>
                                            </a>
                                        </div>
                                        <div className="blog-icons">
                                            <a href="">
                                                <img src={c.img[3]} alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;

const card = [
    {
        img: [card1, avatar, heart, fav],
        name: 'Weight Loss',
        title: ['The Benefits of Hydratation for Weight Loss', 'Emily Johsnon'],
        text: ['Discover how staying hydrated can support your weight loss goals and improve overall health', '23 May 2023 - 5 min read']
    },
    {
        img: [card2, avatar2, heart, fav],
        name: 'Mindful Eating',
        title: ['Cultivating a Healthy Relationship with Food', 'Sarah Hondermarck'],
        text: ['Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.', '23 May 2023 - 5 min read'],
    },
    {
        img: [card3, avatar3, heart, fav],
        name: 'Understanding Macronutrients',
        title: ['Cultivating a Healthy Relationship with Food', 'Mark Wilson'],
        text: ['Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.', '23 May 2023 - 5 min read'],
    },
    {
        img: [card4, avatar4, heart, fav],
        name: 'Healthy Snacks on the Go',
        title: ['Quick and Nutritious Options', 'Sarah Hondermarck'],
        text: ['Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.', '23 May 2023 - 5 min read'],
    }
]


