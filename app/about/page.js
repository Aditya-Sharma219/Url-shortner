import React from 'react'

const page = () => {
    return (
        <section className="text-gray-600 body-font relative ">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">About Us</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We are a dedicated team focused on delivering the best products and services to our customers. Our mission is to create innovative solutions that enhance lives and drive success.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/3 md:w-1/2">
                        <div className="bg-gray-100 p-6 rounded-lg h-full">
                            <h2 className="text-lg font-medium title-font text-gray-900 mb-2">Our Vision</h2>
                            <p className="leading-relaxed text-base">To be the leading provider of cutting-edge technology solutions that empower individuals and businesses to achieve their goals.</p>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3 md:w-1/2">
                        <div className="bg-gray-100 p-6 rounded-lg h-full">
                            <h2 className="text-lg font-medium title-font text-gray-900 mb-2">Our Mission</h2>
                            <p className="leading-relaxed text-base">To innovate and deliver high-quality products that meet our customers’ needs, ensuring their satisfaction and long-term trust in us.</p>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3 md:w-1/2">
                        <div className="bg-gray-100 p-6 rounded-lg h-full">
                            <h2 className="text-lg font-medium title-font text-gray-900 mb-2">Our Values</h2>
                            <p className="leading-relaxed text-base">We prioritize integrity, collaboration, excellence, and customer satisfaction in everything we do.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page