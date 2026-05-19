

export const CountryCard = ({ country }) => {
    // const{ country} = country;
    return (
        <div className="cards bg-white p-6 rounded-xl border-gray-200 border" >
            <h3 className="text-md font-semibold md:text-lg mb-1 text-blue-900">
                {country.name.common}
            </h3>
        </div>
    );
}