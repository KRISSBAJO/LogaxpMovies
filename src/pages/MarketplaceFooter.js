import React from 'react';
import image from "../assets/images/dark-background.jpg";
import image2 from "../assets/images/report4.png";
import image3 from "../assets/images/Error.png";

export default function MarketplaceFooter() {
  return (
    <div className="p-4 bg-gray-800 text-white">
      <h2 className="text-xl font-semibold mb-2">Marketplace</h2>
      <p className="text-sm mb-4">
        The IT solution market is constantly evolving, driven by innovations and advancements that shape the way businesses operate and thrive. As technology continues to play a pivotal role in today's world, our marketplace is dedicated to providing a platform that connects IT solution providers with businesses in need of transformation.
      </p>
      <p className="text-sm mb-4">
        Our aim is to revolutionize the industry by fostering collaboration, transparency, and efficiency. We understand the challenges faced by businesses in finding the right IT solutions that align with their goals and objectives. Our marketplace offers a curated selection of top-notch IT services, software, and expertise to help businesses navigate the digital landscape with confidence.
      </p>
      <p className="text-sm mb-4">
        What sets us apart is our commitment to quality, innovation, and customer satisfaction. We believe that every business, regardless of its size, deserves access to cutting-edge IT solutions that drive growth and success. Our platform empowers businesses to make informed decisions, leverage the latest technologies, and achieve their digital transformation goals.
      </p>
      <p className="text-sm">
        Join us in revolutionizing the IT solution market and discover a world of possibilities for your business's future.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-6 mb-14">
        <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <img src={image3} alt="IT Issue 1" className="mb-3 w-full h-32 object-cover rounded-md" />
          <h3 className="text-lg font-semibold mb-2">IT Issue 1</h3>
          <p className="text-sm">
            Description of IT Issue 1 and how our marketplace can help businesses address it.
          </p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <img src={image2} alt="IT Issue 2" className="mb-3 w-full h-32 object-cover rounded-md" />
          <h3 className="text-lg font-semibold mb-2">IT Issue 2</h3>
          <p className="text-sm">
            Description of IT Issue 2 and how our marketplace can provide solutions.
          </p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <img src={image} alt="IT Issue 3" className="mb-3 w-full h-32 object-cover rounded-md" />
          <h3 className="text-lg font-semibold mb-2">IT Issue 3</h3>
          <p className="text-sm">
            Description of IT Issue 3 and how businesses can benefit from our marketplace.
          </p>
        </div>
      </div>
    </div>
  );
}
