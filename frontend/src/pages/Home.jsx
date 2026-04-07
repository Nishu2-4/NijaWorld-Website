import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Pillars } from '../components/Pillars';
import { Solutions } from '../components/Solutions';
import { Delivery } from '../components/Delivery';
import { CaseStudies } from '../components/CaseStudies';
import { Security } from '../components/Security';
import { Insights } from '../components/Insights';
import { Footer } from '../components/Footer';

export default function Home() {
    return (
        <div className='min-h-screen bg-white dark:bg-baseDark dark:text-white'>
            <Navbar />
            <Hero />
            <Pillars />
            <Solutions />
            <Delivery />
            <CaseStudies />
            <Security />
            <Insights />
            <Footer />
        </div>
    );
}
