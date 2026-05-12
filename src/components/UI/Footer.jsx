import footerApi from '../api/footerData.json';


export const Footers = () => {
    return (
        <footer className="bg-gray-100 border-t border-gray-300 py-3 px-4">
            <div className="container">
                <div className="footerTop grid gap-3 md:gap-5 md:grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch">

                    {footerApi.map((contact) => {
                        const { icon, title, details } = contact;
                        return (
                            <div className="cards bg-white p-6 rounded-xl border-gray-200 border">
                                <div className="">
                                    {icon}
                                </div>
                                <h3 className="text-md font-semibold md:text-lg mb-1 text-blue-900">
                                    {title}
                                </h3>
                                <p className="text-sm leading-base md:leading-6 text-gray-500">
                                    <span className="text-xs font-medium text-gray-400">Capital: </span>
                                    {details}
                                </p>
                            </div>
                        );
                    })};


                </div>
                <div className="footerBtm">
                    <p className="text-center text-xs text-gray-600"></p>
                </div>
            </div>
        </footer >
    );
}