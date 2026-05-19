import { Link } from 'react-router-dom';

export function CountryCard({ country }) {
    const { name, capital, flags, region, population } = country;
    const countryName = name?.common || name;

    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-lg transition">
            {flags && (
                <img 
                    src={flags.svg || flags.png} 
                    alt={countryName || 'Country flag'} 
                    className="w-full h-32 object-cover rounded-lg mb-4"
                />
            )}
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {countryName}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Capital:</span> {capital?.[0] || 'N/A'}
            </p>
            <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Region:</span> {region || 'N/A'}
            </p>
            <p className="text-sm text-gray-600">
                <span className="font-medium">Population:</span> {population?.toLocaleString() || 'N/A'}
            </p>
            <div className="mt-4">
                <Link to={`/country/${encodeURIComponent(countryName)}`} className="no-underline">
                    <button
                        className='flex items-center justify-center text-xs md:text-sm px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-700 transition duration-600 ease-in-out'
                        type="button">
                        Read More
                    </button>
                </Link>
            </div>
        </div>
    );
}
