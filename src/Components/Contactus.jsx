import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'; // Added FaWhatsapp

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
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Side (Logo/Image) */}
    <div className="flex items-center justify-center">
      <img
        src="/STP_Ghana.jpg" // Replace with the correct path to your logo
        alt="Company Logo"
        className="w-full h-full object-contain mt-10 max-h-[550px] rounded-lg" // Added styles for image
      />
    </div>

    {/* Right Side (Form) */}
    <div>
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Get in Touch</h2>
      <form
        action="https://formspree.io/f/xeoqqwww"
        method="POST"
        className="bg-white shadow-lg rounded-lg p-8"
      >
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
            Email: info@specializedtimber.com
          </p>
          {/* WhatsApp section */}
          <p className="text-lg text-gray-700">
            <FaWhatsapp className="inline-block mr-2" />
            WhatsApp: 
            <a
              href="https://wa.me/+233244444445" // Replace with actual WhatsApp number in the correct format
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              +233 244 44 44 45
            </a>
          </p>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Find Us Here</h2>
          <div className="h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31796.973793485584!2d-1.6120368!3d6.6450163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb91435f818c03%3A0x9bd9e83a3778c608!2sSpecialized%20Timber%20Products%20Ltd!5e0!3m2!1sen!2sgh!4v1633658952098!5m2!1sen!2sgh"
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
