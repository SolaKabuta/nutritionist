import './Pricing.css'
const Pricing = () => {
    return (
        <>
            <div
                className={'py-20 pt-40'}>
                <div
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
                </div>

                    {/* BUTTONS */}
                    <div
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
                    </div>
                <div
                    className={'grid place-content-center'}>
                    <p>
                        Save 50% on Yearly
                    </p>
                </div>
                <div
                    className={'price-layout'}>

                    {/* PRICE CARD 1 */}
                    <div
                        className={'price-card'}>
                        <p
                            className={'font-bold text-3xl'}>
                            Basic Plan
                        </p>
                        <p>
                            Up to 50% off on Yearly Plan
                        </p>
                        <p
                            className={'basic-text'}>
                            Get started on your health journey with our Basic <br/>
                            Plan. It includes personalized nutrition coaching, <br/>
                            access to our app, meal planning assistance, and <br/>
                            email support.
                        </p>
                        <p
                            className={'price'}>
                            <span
                                className={'price-tag'}>$49</span> /month
                        </p>
                        <div>
                            <button
                                className={'choose-plan'}>Choose Plan</button>
                        </div>
                    </div>

                    {/* PRICE CARD 2 */}
                    <div
                        className={'price-card'}>
                        <p
                            className={'font-bold text-3xl'}>
                            Premium Plan
                        </p>
                        <p>
                            Up to 50% off on Yearly Plan
                        </p>
                        <p
                            className={'basic-text'}>
                            Upgrade to our Premium Plan for enhanced <br/>
                            features. In addition to the Basic Plan, you'll receive <br/>
                            video consultations, priority support, and <br/>
                            personalized recipe recommendations.
                        </p>
                        <p
                            className={'price'}>
                            <span
                                className={'price-tag'}>$79</span> /month
                        </p>
                        <div>
                            <button
                                className={'choose-plan'}>Choose Plan</button>
                        </div>
                    </div>

                    {/* PRICE CARD 3 */}
                    <div
                        className={'price-card'}>
                        <p
                            className={'font-bold text-3xl'}>
                            Ultimate Plan
                        </p>
                        <p>
                            Up to 50% off on Yearly Plan
                        </p>
                        <p
                            className={'basic-text'}>
                            Experience the full benefits of personalized nutrition <br/>
                            coaching with our Ultimate Plan. Enjoy all the <br/>
                            features of the Premium Plan, along with 24/7 chat <br/>
                            support and exclusive workshops.
                        </p>
                        <p
                            className={'price'}>
                            <span
                                className={'price-tag'}>$99</span> /month
                        </p>
                        <div>
                            <button
                                className={'choose-plan'}>Choose Plan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pricing;