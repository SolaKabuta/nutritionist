import card1 from '../../../assets/images/blog_card_1.jpg'
import avatar from '../../../assets/images/blog_avatar.jpg'
import heart from '../../../assets/icons/heart.svg'
import fav from '../../../assets/icons/fav.svg'

// import { useState } from 'react';


const Blogs = () => {

    const handleClick = () => {
        alert('I like it too baby!')
    }

    return (
        <>
            <div
                className={'pt-20'}>
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
                    className={'grid grid-cols-2'}>
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
                            Discover how staying hydrated can support your weight loss goals and improve overall health
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
                </div>
            </div>
        </>
    );
};

export default Blogs;