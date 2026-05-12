import countryData from '../../src/api/countryData.json'

export const About = () => {
    return (
        <section className="hero py-10 md:py-12 px-4">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-2 text-blue-900">
                    About Us
                </h2>
                <p className="text-sm text-center leading-sm md:leading-6 text-gray-500 mb-6">
                    Discover the beauty and diversity of our planet with our comprehensive country information app.
                </p>
                <div className="grid gap-3 md:gap-5 md:grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch">

                    {countryData.map((country) => {
                            const { Id, Name, Capital, Population, PopularFacts} = country;
                            return (
                                <div className="cards bg-white p-6 rounded-xl border-gray-200 border" key={Id}>
                                    <h3 className="text-md font-semibold md:text-lg mb-1 text-blue-900">
                                        {Name}
                                    </h3>
                                    <p className="text-sm leading-base md:leading-6 text-gray-500">
                                        <span className="text-xs font-medium text-gray-400">Capital: </span>
                                        {Capital}
                                    </p>
                                    <p className="text-sm leading-base md:leading-6 text-gray-500">
                                        <span className="text-xs font-medium text-gray-400">Population: </span>
                                        {Population}
                                    </p>
                                    <p className="text-sm leading-base md:leading-6 text-gray-500">
                                        <span className="text-xs font-medium text-gray-400">Popular Facts: </span>
                                        {PopularFacts}
                                    </p>
                                </div>
                            );
                        })
                    }

                </div>
            </div>
        </section >
    );
}