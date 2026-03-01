import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Partners() {
    return (
        <div className='min-h-screen bg-white dark:bg-baseDark dark:text-white'>
            <Navbar />
            <div className="pt-24 md:pt-32 pb-16 md:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                        Our Partners
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                        Strategic partnerships driving innovation in AI and blockchain technology.
                    </p>

                    <div className="mt-8 md:mt-12">
                        {/* Placeholder for partner logos */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-800 flex items-center justify-center aspect-square">
                                    <span className="text-gray-400 dark:text-gray-600 text-xs sm:text-sm md:text-base">Partner Logo</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Partners;
