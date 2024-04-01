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
                    {card.map((c) => (
                        <div className="testi-card">
                            <div className="p-10">
                                <img src={c.img[0]} alt=""/>
                                <p className="p-10">
                                    {c.text}
                                </p>
                            </div>
                            <div className="Jen">
                                <img src={c.img[1]} alt=""/>
                                <p>
                                    {c.title}
                                </p>
                            </div>
                        </div>
                    ))}


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

const card = [
    {
        img: [text, Jen],
        text: 'I can\'t thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!',
        title: 'Jennifer Anderson'
    },
    {
        img: [text, rob],
        text: 'Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!',
        title: 'Robert Johnson'
    },
    {
        img: [text, emily],
        text: 'I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I\'ve never felt better!',
        title: 'Emily Davis'
    },
]