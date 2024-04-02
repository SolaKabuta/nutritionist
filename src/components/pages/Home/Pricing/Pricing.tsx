import './Pricing.css'
const Pricing = () => {
    return (
        <>
            <section
                className={'py-20 pt-40'}>
                <section
                    className={'features-grid '}>
                    <h2
                        id={'pricing'}
                        className={'features-title'}>
                        Our Pricing
                    </h2>
                    <p
                        className={'pb-20'}>
                        We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. We believe that <br/>
                        everyone deserves access to personalized nutrition guidance and resources
                    </p>
                </section>

                    {/* BUTTONS */}
                    <section
                        className={'buttons-layout'}>
                        <div>
                            <button
                                className={'monthly-btn'}>
                                Montlhy
                            </button>
                            <button
                                className={'yearly-btn'}>
                                Yearly
                            </button>
                        </div>
                    </section>
                <div
                    className={'grid place-content-center'}>
                    <p>
                        Save 50% on Yearly
                    </p>
                </div>
                <section
                    className={'price-layout'}>

                    {/* PRICE CARD 1 */}
                    {card.map((c) => (
                        <div className="price-card">
                            <p className="font-bold text-3xl">
                                {c.title}
                            </p>
                            <p>
                                {c.text[0]}
                            </p>
                            <p className="basic-text">
                                {c.text[1]}
                            </p>
                            <p className="price">
                                <span className="price-tag">
                                    {c.price}
                                </span>
                                /month
                            </p>
                            <div>
                                <button className="choose-plan">
                                    {c.button}
                                </button>
                            </div>
                        </div>
                    ))}
                </section>
            </section>
        </>
    );
};

export default Pricing;

const card = [
    {
        title: 'Basic Plan',
        text: ['Up to 50% off on Yearly Plan', 'Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.'],
        price: '$49',
        button: 'Choose Plan'
    },
    {
        title: 'Premium Plan',
        text: ['Up to 50% off on Yearly Plan', 'Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you\'ll receive video consultations, priority support, and personalized recipe recommendations.'],
        price: '$79',
        button: 'Choose Plan'
    },
    {
        title: 'Basic Plan',
        text: ['Up to 50% off on Yearly Plan', 'Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.'],
        price: '$99',
        button: 'Choose Plan'
    }
]

// const cardYearly = [
//     {
//         title: 'Basic Plan',
//         text: ['Up to 50% off on Yearly Plan', 'Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.'],
//         price: '$294',
//         button: 'Choose Plan'
//     },
//     {
//         title: 'Basic Plan',
//         text: ['Up to 50% off on Yearly Plan', 'Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.'],
//         price: '$474',
//         button: 'Choose Plan'
//     },
//     {
//         title: 'Basic Plan',
//         text: ['Up to 50% off on Yearly Plan', 'Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.'],
//         price: '$594',
//         button: 'Choose Plan'
//     },
// ]