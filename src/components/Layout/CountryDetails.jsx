import { useParams } from "react-router-dom";


export const CountryDetails = () => {
    const params = useParams();
    console.log(params);
    return (
        <section className="hero py-10 md:py-12 px-4">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-2 text-blue-900">
                    Country Details
                </h2>
            </div>
        </section>
    );
}
