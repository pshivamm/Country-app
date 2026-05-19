import { useEffect, useState, useTransition } from 'react';
import { useParams } from "react-router-dom";
import { Loader } from '../UI/Loader.jsx';
import { getCountryIndvData } from '../../api/postApi.jsx';



export const CountryDetails = () => {
    const params = useParams();

    const [isPending, startTransition] = useTransition()
    const [country, setCountry] = useState([]);


    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryIndvData(params.id);
            // setCountry(res);
            console.log(res);
        });
    }, []);




    if (isPending) return <Loader />;
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
