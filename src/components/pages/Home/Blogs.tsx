import card1 from '../../../assets/images/blog_card_1.jpg'

const Blogs = () => {
    return (
        <>
            <div
                className={'relative -top-44'}>
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
                    className={'blog-grid'}>
                    <div
                        className={'blog-card'}>
                        <img src={card1} alt=""/>
                        <p
                            className={'card-name'}>
                            Weight Loss
                        </p>
                        <p
                            className={'card-title'}>
                            The Benefits of Hydration for Weight Loss
                        </p>
                        <p
                            className={'card-text'}>
                            Discover how staying hydrated can support your weight loss goals and improve overall <br/>
                            health.
                        </p>
                        {/*  AVATAR LIKE/FAV  */}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;