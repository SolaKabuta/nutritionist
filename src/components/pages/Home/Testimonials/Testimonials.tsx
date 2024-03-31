import './Testtimonials.css'

import text from '../../../../assets/icons/text.svg'
import indicators from '../../../../assets/icons/Indicators.svg'
import left from '../../../../assets/icons/left_arrow.svg'
import right from '../../../../assets/icons/right_arrow.svg'
import Jen from '../../../../assets/images/jen.jpg'
import rob from '../../../../assets/images/rob.jpg'
import emily from '../../../../assets/images/emily.jpg'


const Testimonials = () => {
    return (
        <>
            <div
                className={'pt-44'}>
                <div
                    className={'features-grid'}>
                    <h2
                        id={'testimonials'}
                        className={'features-title'}>
                        Our Testimonials
                    </h2>
                    <p
                        className={'pb-20'}>
                        Our satisfied clients share their success stories and experiences on their journey to better health and well-being.
                    </p>
                </div>
                <div
                    className={'testi-layout'}>
                    {/* CARD-1 */}
                    <div
                        className={'testi-card'}>
                        <div
                            className={'p-10'}>
                            <img src={text} alt=""/>
                            <p
                                className={'pt-10'}>
                                I can't thank Nutritionist enough for their personalized <br/>
                                nutrition coaching. It has completely transformed my <br/>
                                approach to food and helped me shed those extra <br/>
                                pounds. Highly recommended!
                            </p>
                        </div>
                        <div
                            className={'Jen'}>
                            <img src={Jen} alt=""/>
                            <p>
                                Jennifer Anderson
                            </p>
                        </div>
                    </div>

                    {/* CARD-2 */}
                    <div
                        className={'testi-card'}>
                        <div
                            className={'p-10'}>
                            <img src={text} alt=""/>
                            <p
                                className={'pt-10'}>
                                Nutritionist has been a game-changer for me. The <br/>
                                expert guidance and support I received from their <br/>
                                team made my weight loss journey so much easier. <br/>
                                Thank you!
                            </p>
                        </div>
                        <div
                            className={'Jen'}>
                            <img src={rob} alt=""/>
                            <p>
                                Robert Johnson
                            </p>
                        </div>
                    </div>

                    {/* CARD-3 */}
                    <div
                        className={'testi-card'}>
                        <div
                            className={'p-10'}>
                            <img src={text} alt=""/>
                            <p
                                className={'pt-10'}>
                                I had struggled with my weight for years until I found <br/>
                                Nutritionist. Their personalized approach and tailored <br/>
                                nutrition plan made all the difference. I've never felt <br/>
                                better!
                            </p>
                        </div>
                        <div
                            className={'Jen'}>
                            <img src={emily} alt=""/>
                            <p>
                                Emily Davis
                            </p>
                        </div>
                    </div>

                </div>
                    {/* SLIDER-BUTTONS */}
                <div
                    className={'nav-layout'}>
                    <img
                        className={'nav-bg'}
                        src={left} alt=""/>
                    <img src={indicators} alt=""/>
                    <img
                        className={'nav-bg'}
                        src={right} alt=""/>
                </div>
            </div>
        </>
    );
};

export default Testimonials;