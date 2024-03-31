import card1 from '../../../assets/images/blog_card_1.jpg';
import avatar from '../../../assets/images/blog_avatar.jpg';
import heart from '../../../assets/icons/heart.svg';
import fav from '../../../assets/icons/fav.svg';

const Blogs = () => {

    const handleClick = () => {
        alert('I like it too baby!');
    };

    return (
        <>
            <div className="relative -top-44 ">
                <div className="features-grid">
                    <h2 className="features-title">Our Blogs</h2>
                    <p className="pb-20">
                        Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness <br/>
                        experts. Here's what you can expect from our blog.
                    </p>
                </div>

                {/* CARD */}
                <div className="blog-grid">
                    <div className="blog-card">
                        {/* Center the image using flexbox */}
                        <div className="image-container">
                            <img src={card1} alt="" className="w-full h-auto object-cover"/>
                        </div>
                        <p className="card-name">Weight Loss</p>
                        <p className="blog-card-title">The Benefits of Hydration for Weight Loss</p>
                        <p className="card-text">
                            Discover how staying hydrated can support your weight loss goals and improve overall health.
                        </p>
                        {/*  AVATAR LIKE/FAV  */}
                        <div className="flex items-center p-5 gap-2 rounded-lg bg-white">
                            <div>
                                <img src={avatar} alt=""/>
                            </div>
                            <div>
                                <p className="blog-avatar-title">Emily Johnson</p>
                                <p>23 May 2023 - 5 min read</p>
                            </div>
                            <div className="flex pl-80 gap-3">
                                <div onClick={handleClick} id="heart" className="blog-icons">
                                    <img src={heart} alt=""/>
                                </div>
                                <div className="blog-icons">
                                    <img src={fav} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-card">
                        {/* Center the image using flexbox */}
                        <div className="image-container">
                            <img src={card1} alt="" className="w-full h-auto object-cover"/>
                        </div>
                        <p className="card-name">Weight Loss</p>
                        <p className="blog-card-title">The Benefits of Hydration for Weight Loss</p>
                        <p className="card-text">
                            Discover how staying hydrated can support your weight loss goals and improve overall health.
                        </p>
                        {/*  AVATAR LIKE/FAV  */}
                        <div className="flex items-center p-5 gap-2 rounded-lg bg-white">
                            <div>
                                <img src={avatar} alt=""/>
                            </div>
                            <div>
                                <p className="blog-avatar-title">Emily Johnson</p>
                                <p>23 May 2023 - 5 min read</p>
                            </div>
                            <div className="flex pl-80 gap-3">
                                <div onClick={handleClick} id="heart" className="blog-icons">
                                    <img src={heart} alt=""/>
                                </div>
                                <div className="blog-icons">
                                    <img src={fav} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-card">
                        {/* Center the image using flexbox */}
                        <div className="image-container">
                            <img src={card1} alt="" className="w-full h-auto object-cover"/>
                        </div>
                        <p className="card-name">Weight Loss</p>
                        <p className="blog-card-title">The Benefits of Hydration for Weight Loss</p>
                        <p className="card-text">
                            Discover how staying hydrated can support your weight loss goals and improve overall health.
                        </p>
                        {/*  AVATAR LIKE/FAV  */}
                        <div className="flex items-center p-5 gap-2 rounded-lg bg-white">
                            <div>
                                <img src={avatar} alt=""/>
                            </div>
                            <div>
                                <p className="blog-avatar-title">Emily Johnson</p>
                                <p>23 May 2023 - 5 min read</p>
                            </div>
                            <div className="flex pl-80 gap-3">
                                <div onClick={handleClick} id="heart" className="blog-icons">
                                    <img src={heart} alt=""/>
                                </div>
                                <div className="blog-icons">
                                    <img src={fav} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-card">
                        {/* Center the image using flexbox */}
                        <div className="image-container">
                            <img src={card1} alt="" className="w-full h-auto object-cover"/>
                        </div>
                        <p className="card-name">Weight Loss</p>
                        <p className="blog-card-title">The Benefits of Hydration for Weight Loss</p>
                        <p className="card-text">
                            Discover how staying hydrated can support your weight loss goals and improve overall health.
                        </p>
                        {/*  AVATAR LIKE/FAV  */}
                        <div className="flex items-center p-5 gap-2 rounded-lg bg-white">
                            <div>
                                <img src={avatar} alt=""/>
                            </div>
                            <div>
                                <p className="blog-avatar-title">Emily Johnson</p>
                                <p>23 May 2023 - 5 min read</p>
                            </div>
                            <div className="flex pl-80 gap-3">
                                <div onClick={handleClick} id="heart" className="blog-icons">
                                    <img src={heart} alt=""/>
                                </div>
                                <div className="blog-icons">
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
