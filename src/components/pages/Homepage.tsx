import banner from '../../assets/images/banner.jpg'

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
                            className={'font-bold text-2xl pt-40 pb-1'}>
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
                                className={'text-black'}
                                href="">
                                Book A Demo
                            </a>
                            <img src="" alt=""/>
                            <p>

                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;