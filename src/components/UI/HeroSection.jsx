import heroImage from '/images/hero-image.jpg';
import { FaArrowRightLong } from 'react-icons/fa6';

export const HeroSection = () => {
    return (
        <section className="hero py-10 md:py-12 px-4 bg-white">
            <div className="container mx-auto">
                <div className="grid gap-8 md:gap-10 md:grid-rows-1 md:grid-cols-2 items-center">
                    <div className="hero-content">
                        <h1 className="text-2xl font-semibold md:text-3xl capitalize mb-2 text-blue-900">
                            Explore the world, <br /><span className="text-3xl md:text-4xl text-blue-500 font-bold">one country at a time</span>
                        </h1>
                        <p className="text-sm leading-base md:leading-6 text-gray-500">
                            Discover the beauty and diversity of our planet with our comprehensive country information app. From stunning landscapes to rich cultures, we provide you with detailed insights into every corner of the globe. Whether you're planning your next adventure or simply curious about the world, our app is your gateway to exploring the wonders of each country. Start your journey today and unlock a world of knowledge at your fingertips.
                        </p>
                        <button className='flex items-center justify-center text-sm md:text-base px-3 py-2 mt-5 md:mt-8 rounded-lg bg-blue-500 text-white hover:bg-blue-700 transition duration-600 ease-in-out'>
                            Start Exploring <FaArrowRightLong className='ml-2' />
                        </button>
                    </div>
                    <div className="hero-image">
                        <img src={heroImage} className="img-fluid w-full object-cover h-80 rounded-lg" alt="Hero Image" />
                    </div>
                </div>
            </div>
        </section>
    );
}