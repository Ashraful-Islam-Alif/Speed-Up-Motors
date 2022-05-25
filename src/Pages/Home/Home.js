import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import FlashSale from './FlashSale';
import Purchase from './Purchase';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Reviews />
            <BusinessSummary></BusinessSummary>
            <FlashSale></FlashSale>
        </div>
    );
};

export default Home;