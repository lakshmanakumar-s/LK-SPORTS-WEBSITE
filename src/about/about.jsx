import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-teal-500 text-white">
      {/* Main container with padding */}
      <section className="py-20 px-4 lg:px-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-12 text-yellow-500">
            About Us
          </h1>

          {/* Introduction Section */}
          <div className="mb-16">
            <p className="text-lg leading-relaxed text-gray-300">
              At <span className="font-bold text-yellow-500">LK Sports</span>, we provide high-quality sports products that empower athletes of all levels to perform at their best. Our mission is to deliver the finest gear, apparel, and accessories for both amateurs and professionals, ensuring top-notch performance and durability.
            </p>
          </div>

          {/* Featured Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div className="hover:bg-gray-800 p-8 rounded-lg transition ease-in-out duration-300">
              <h2 className="text-3xl font-bold mb-4 text-yellow-500">Premium Quality</h2>
              <p className="mt-2 text-gray-300 leading-relaxed">
                We offer only the best sports equipment designed to meet the needs of athletes across the globe. Built to last, tested for excellence.
              </p>
            </div>
            <div className="hover:bg-gray-800 p-8 rounded-lg transition ease-in-out duration-300">
              <h2 className="text-3xl font-bold mb-4 text-yellow-500">Free Shipping</h2>
              <p className="mt-2 text-gray-300 leading-relaxed">
                Enjoy free shipping on all orders. Your gear will arrive quickly and hassle-free, no matter where you are.
              </p>
              <a href="#" className="text-yellow-500 hover:underline mt-4 block">
                Learn More
              </a>
            </div>
            <div className="hover:bg-gray-800 p-8 rounded-lg transition ease-in-out duration-300">
              <h2 className="text-3xl font-bold mb-4 text-yellow-500">Customer Support</h2>
              <p className="mt-2 text-gray-300 leading-relaxed">
                Our dedicated team is here to help you with any inquiries or support. We’re committed to your satisfaction 24/7.
              </p>
              <a href="#" className="text-yellow-500 hover:underline mt-4 block">
                Learn More
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold text-yellow-500 mb-4">10+</h3>
              <p className="text-lg text-gray-300">Years in Business</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold text-yellow-500 mb-4">500+</h3>
              <p className="text-lg text-gray-300">Products Sold</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold text-yellow-500 mb-4">1000+</h3>
              <p className="text-lg text-gray-300">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold text-yellow-500 mb-4">30+</h3>
              <p className="text-lg text-gray-300">Countries Shipped</p>
            </div>
          </div>

          {/* About Section with Product Focus */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
  <div className="flex justify-center md:justify-start">
    <img
      src="https://ik.imagekit.io/dsareuftc/png-clipart-sporting-goods-sports-graphy-sport-equipments-sporting-goods-sports-equipment-thumbnail.png?updatedAt=1725977826728"
      alt="Sports Products"
      className="w-full max-w-md h-auto object-cover rounded-lg hover:bg-gray-800 p-8  transition ease-in-out duration-300"
    />
  </div>
  <div className="text-left">
    <h2 className="text-4xl font-bold mb-6 text-yellow-500">
      The New Era of Sports Products
    </h2>
    <p className="text-gray-300 leading-relaxed text-lg mb-6">
      We continually innovate and introduce new products to enhance your athletic experience. From running shoes to sports apparel, we ensure that each item offers the highest quality and performance.
    </p>
    <a
      href="#"
      className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-400 transition ease-in-out duration-300"
    >
      Shop Now
    </a>
  </div>
</div>

          {/* Benefits Section */}
          <div>
            <h2 className="text-4xl font-bold mb-12 text-yellow-500">Why Shop With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="hover:bg-gray-800 p-8 rounded-lg transition ease-in-out duration-300">
                <h3 className="text-3xl font-bold mb-4">Fast Shipping</h3>
                <p className="text-gray-300 leading-relaxed">
                  We provide fast and reliable shipping, ensuring your products reach you as soon as possible, so you can focus on your game.
                </p>
              </div>
              <div className="hover:bg-gray-800 p-8 rounded-lg transition ease-in-out duration-300">
                <h3 className="text-3xl font-bold mb-4">Affordable Prices</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our products are priced competitively to offer you the best value without compromising on quality.
                </p>
              </div>
              <div className="hover:bg-gray-800 p-8 rounded-lg transition ease-in-out duration-300">
                <h3 className="text-3xl font-bold mb-4">Exclusive Deals</h3>
                <p className="text-gray-300 leading-relaxed">
                  Be the first to access our special offers, exclusive sales, and new product launches. Join our community today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;