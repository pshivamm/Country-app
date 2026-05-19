import { use, useEffect, useState, useTransition } from 'react';
import { getCountryData } from '../api/postApi.jsx';
import { Loader } from '../components/UI/Loader.jsx';
import { CountryCard } from '../components/UI/CountryCard.jsx';



export const Country = () => {

    const [isPending, startTransition] = useTransition()
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountries(res.data);
        });
    }, []);




    if (isPending) return <Loader />;
    return (
        <section className="hero py-10 md:py-12 px-4">
            <div className="container mx-auto">
                <div className="grid gap-3 md:gap-5 md:grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-stretch">
                    {
                        countries.map((curCountry, index) => {
                            return (
                                <CountryCard country={curCountry} key={index} />
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};