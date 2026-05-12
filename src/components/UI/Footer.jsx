import footerApi from '../../api/footerApi.json';
import {
    FaLocationDot,
    FaPhoneVolume,
    FaEnvelope
}
    from 'react-icons/fa6';


export const Footers = () => {
    const footerIcon = {
        FaLocationDot: <FaLocationDot />,
        FaPhoneVolume: <FaPhoneVolume />,
        FaEnvelope: <FaEnvelope />
    };

    return (
        <footer>
            <div className="container mx-auto">
                <div className="footerTop grid gap-3 md:gap-5 md:grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch py-10 md:py-12 px-4">

                    {footerApi.map((contactData, index) => {
                        const { icon, title, details } = contactData;
                        return (
                            <div className="cards bg-white p-6 rounded-xl border-gray-200 border" key={index}>
                                <div className="flex justify-start items-center">
                                    <div className="icon me-5 text-2xl text-blue-500">
                                        {footerIcon[icon]}
                                    </div>
                                    <div className="content-box">
                                        <h3 className="text-md font-semibold md:text-lg mb-0 text-blue-900">
                                            {title}
                                        </h3>
                                        <p className="text-sm leading-base md:leading-6 text-gray-500">
                                            <span className="text-xs font-medium text-gray-400">Capital: </span>
                                            {details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}


                </div>
            </div>
            <div className="footerBtm bg-gray-100 border-t border-gray-300 py-3 px-4">
                <p className="text-center text-xs text-gray-600">
                    Country App &copy; 2026. All rights reserved.
                </p>
            </div>
        </footer>
    );
}