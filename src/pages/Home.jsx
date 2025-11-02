import React from 'react';
import Hero from '../components/Hero';
import Plants from './Plants';
import EcoDecorIdeas from '../components/EcoDecorIdeas';
import GreenExperts from '../components/GreenExperts';
import PlantCareTips from '../components/PlantCareTips';

const Home = () => {
    return (
        <div>
            <section>
                <Hero/>
            </section>
            <section>
                <Plants/>
            </section>
            <section>
                <PlantCareTips/>
            </section>
            <section>
                <GreenExperts/>
            </section>

            <section>
                <EcoDecorIdeas/>
            </section>
        </div>
    );
};

export default Home;