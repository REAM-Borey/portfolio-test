export default function AboutMe() {
    return (
        <>
            <div className="items-center w-full mb-10">
                <h1 className="flex justify-center text-white text-2xl sm:text-3xl font-medium mr-4">
                    About me
                </h1>
                <hr className="flex-1 border-t border-gray-300" />
            </div>
            <section class="text-gray-800 body-font bg-gray-50">
                <div class="container px-5 py-24 mx-auto flex flex-col items-center">
                    <div class="lg:w-4/6 w-full">
                        <div class="flex flex-col sm:flex-row mt-10 bg-white rounded-2xl shadow p-6">
                            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div class="w-24 h-24 rounded-full inline-flex items-center justify-center bg-indigo-100 text-indigo-500 shadow-md">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-10 h-10"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div class="flex flex-col items-center text-center mt-4">
                                    <h2 class="font-semibold text-gray-900 text-xl">Phoebe Caulfield</h2>
                                    <div class="w-14 h-1 bg-indigo-500 rounded mt-2 mb-3"></div>
                                    <p class="text-sm leading-relaxed text-gray-600">
                                        Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken.
                                    </p>
                                </div>
                            </div>


                            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 mt-8 sm:mt-0 text-center sm:text-left">
                                <p class="leading-relaxed text-lg text-gray-700 mb-5">
                                    Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry.
                                    Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag.
                                    Coloring book flannel truffaut craft beer drinking vinegar sartorial disrupt fashion axe normcore meh butcher.
                                </p>

                                <a href="#" class="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition">
                                    Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}