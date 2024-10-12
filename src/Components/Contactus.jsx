import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import the icons

const ContactUs = () => {
  return (
    <div id='' className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: 'url(/contact.jpg)' }} // Ensure this path is correct
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-md">Contact Us</h1>
          <p className="text-lg text-white mt-2 drop-shadow-md">We'd love to hear from you!</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Get in Touch</h2>
          <form action='https://formsubmit.co/zuhaib.zul@gmail.com' method='POST' className="bg-white shadow-lg rounded-lg p-8">
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <textarea
                placeholder="Your Message"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded mt-6 transition duration-300 block mx-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-gray-100 py-12 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Contact Information</h2>
          <p className="text-lg text-gray-700">
            <FaMapMarkerAlt className="inline-block m-2 " />
            Address: Kaasi Industrial Area, Kumasi Ghana
          </p>
          <p className="text-lg text-gray-700">
            <FaPhone className="inline-block mr-2" />
            Phone: +233 509 70 70 33
          </p>
          <p className="text-lg text-gray-700">
            <FaEnvelope className="inline-block mr-2" />
            Email: Chafic@specializedtimber.com
          </p>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Find Us Here</h2>
          <div className="h-64">
            <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.9371069654947!2d-1.5989010846795672!3d6.701438495142491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102e3ab4e5968fdf%3A0x9bc66e9f4b5e8f32!2sKaasi%20Industrial%20Area%2C%20Kumasi%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1633667650980!5m2!1sen!2sgh
'
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
