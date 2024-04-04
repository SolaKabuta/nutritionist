import './Features.css'

import flowerIcon from '../../../../assets/icons/flower.svg'
import hatIcon from '../../../../assets/icons/hat.svg'
import cutlery from '../../../../assets/icons/cutlery.svg'
import file from '../../../../assets/icons/file.svg'
import weight from '../../../../assets/icons/weight.svg'
import bag from '../../../../assets/icons/bag.svg'
import React from 'react'
const Features = () => {
    return (
        <>
            <section
                className={'relative 2xl:bottom-20'}>
                <div
                    className={'features-grid'}>
                    <h2
                        className={'features-title'}>
                        Features
                    </h2>
                    <p>
                        Welcome to the Feature Section of Nutritionist, your ultimate destination for all things
                        nutrition and wellness.
                    </p>

                    {/* CARDS */}
                    <section className="features-layout">
                        {card.map((c) => (
                            <div className="card-layout">
                                <div className="card-icon-title">
                                    <img src={c.img[0]} alt="flower icon"/>
                                    <p className={"card-title"}>
                                        {c.title}
                                    </p>
                                </div>
                                <p>
                                    {c.text[0].split(/\s+/).map((word, index) => (
                                        <React.Fragment key={index}>
                                            {word}
                                            {(word.endsWith(',') || word.endsWith('.')) && <br/>}
                                            {' '}
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        ))}
                    </section>

                </div>
            </section>
        </>
    );
};

export default Features;

const card = [
    {
        title: ['Personalized Nutrition Plans'],
        text: ['Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences and health conditions to create a plan that suits you best.'],
        img: [flowerIcon]
    },
    {
        title: ['Guidance from Certified Nutritionists'],
        text: ['Our team of experienced and certified nutritionists, will provide professional guidance and support throughout your journey. They will answer your questions address your concerns, and keep you motivated as you work towards your goals.'],
        img: [hatIcon]
    },
    {
        title: ['Food Tracking and Analysis'],
        text: ['Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement and make personalized recommendations.'],
        img: [cutlery]
    },
    {
        title: ['Meal Planning and Recipes'],
        text: ['Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.'],
        img: [file]
    },
    {
        title: ['Lifestyle and Behavior Coaching'],
        text: ['Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating and provide strategies to overcome obstacles along the way.'],
        img: [weight]
    },
    {
        title: ['Nutritional Education and Workshops'],
        text: ['Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools, to make informed choices for long-term success.'],
        img: [bag]
    }
]