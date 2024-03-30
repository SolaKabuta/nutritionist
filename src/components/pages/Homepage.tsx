import banner from '../../assets/images/banner.jpg'
import avatars from '../../assets/images/Container.jpg'

const Homepage = () => {
    return (
        <>
            <div
                className={'core'}>
                <div
                    className={'flex justify-start gap-20 '}>
                    <div>
                        <img
                            src={banner}
                            alt="banner image"/>
                    </div>
                    <div>
                        <p
                            className={'font-bold text-2xl pt-32 pb-1'}>
                            Transform Your ❤️ Health with
                        </p>

                        {/*DIVIDER*/}
                        <div
                            className={'divider mb-5'}>
                        </div>
                        <h1
                            className={'title'}>
                            Personalized Nutrition <br/>
                            Coaching
                        </h1>
                        <p
                            className={'txt'}>
                            Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition <br/>
                            coaching.
                            Our certified nutritionists are here to guide you on your weight loss journey, providing <br/>
                            customized plans and ongoing support.
                            Start your transformation today and experience the <br/>
                            power of personalized nutrition coaching.
                        </p>
                        <div>
                            <a
                                className={'nav-btn mr-5'}
                                href="">
                                Get Starter Today
                            </a>
                            <a
                                className={'btn-2 text-black'}
                                href="">
                                Book A Demo
                            </a>
                            <div
                                className={'pt-20 flex items-center gap-3 font-bold text-lg'}>
                                <img
                                    src={avatars}
                                    alt="Happy Customers"/>
                                <p
                                    className={''}>
                                    <span className={'text-[#468671]'}>430+ </span>
                                    Happy Customers
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;