export const Contact = () => {
    const handleFormSubmit = (formData) => {
        // console.log(formData.entries());
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }


    return (
        <section className="bg-white py-10 md:py-12 px-4">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-2 text-blue-900">
                    Contact Us
                </h2>
                <p className="text-sm text-center leading-sm md:leading-6 text-gray-500 mb-6">
                    Please fill the form below to contact us.
                </p>

                <div className="max-w-96 mx-auto  bg-blue-100
                00 border border-blue-200 rounded-xl px-5 py-6 md:px-8 md:py-8 placeholder-yellow-800">
                    <form action={handleFormSubmit}>
                        <input
                            type="text"
                            className="mb-3 bg-white border border-gray-300 rounded-md w-full px-3 py-3 text-xs text-gray-600 leading-tight focus:outline-red-600"
                            placeholder="Enter Your Name"
                            name="username"
                            autoComplete="false"
                            required
                        />
                        <input
                            type="email"
                            className="mb-3 bg-white border border-gray-300 rounded-md w-full px-3 py-3 text-xs text-gray-600 leading-tight focus:outline-red-600"
                            placeholder="Enter Your Email"
                            name="email"
                            autoComplete="false"
                            required
                        />
                        <textarea
                            type="email"
                            className="bg-white border border-gray-300 rounded-md w-full px-3 py-3 text-xs text-gray-600 leading-tight focus:outline-red-600"
                            rows="3"
                            placeholder="Enter Your Message"
                            name="message"
                            autoComplete="false"
                            required
                        ></textarea>

                        <button
                            className='flex items-center justify-center text-sm md:text-base px-4 py-2 mt-3 rounded-lg bg-blue-500 text-white hover:bg-blue-700 transition duration-600 ease-in-out'
                            type="submit"
                            value="send">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}