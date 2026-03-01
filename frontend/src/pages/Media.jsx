import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Media() {
    return (
        <div className='min-h-screen bg-white dark:bg-baseDark dark:text-white'>
            <Navbar />
            <div className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Media & Press
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                        Latest news, press releases, and media coverage about NIJA.
                    </p>

                    <div className="mt-12 grid md:grid-cols-2 gap-8">
                        {/* Placeholder for media items */}
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                Press Kit
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Download our media assets and brand guidelines.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Media;
