import React from 'react';
import logo from './path_to_logo'; // Ensure to import the logo

const ContactSection = () => {
  return (
    <div className="container mx-auto py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Left: Logo */}
      <div className="flex items-center justify-center">
        <img src={logo} alt="Company Logo" className="w-3/4 h-auto lg:w-full object-contain" />
      </div>
      
      {/* Middle: Contact Form */}
      <div className="lg:col-span-2 bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-[#8B0000] mb-6">Contact Us Online</h2>
        <form>
          {/* Your Name */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
              Your Name*
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-md focus:outline-none focus:border-[#8B0000]"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Company Name */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="company">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              className="w-full p-3 border rounded-md focus:outline-none focus:border-[#8B0000]"
              placeholder="Enter your company name"
            />
          </div>

          {/* Your Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
              Your Email*
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-md focus:outline-none focus:border-[#8B0000]"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Your Phone */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="phone">
              Your Phone*
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-3 border rounded-md focus:outline-none focus:border-[#8B0000]"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Your Enquiry */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="enquiry">
              Your Enquiry*
            </label>
            <textarea
              id="enquiry"
              className="w-full p-3 border rounded-md focus:outline-none focus:border-[#8B0000] h-32"
              placeholder="Enter your enquiry"
              required
            />
          </div>

          {/* Info Note */}
          <p className="text-sm text-gray-600 mb-6">
            We’ll use the information you submit to contact you regarding your enquiry. We’ll never share your information with a third party. <a href="#" className="text-[#8B0000] font-bold underline">View our privacy policy*</a>.
          </p>

          {/* Submit Button */}
          <button className="bg-[#8B0000] text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300">
            Send
          </button>
        </form>
      </div>

      {/* Right: Contact Information */}
      <div className="bg-gray-100 p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-[#8B0000] mb-6">Contact Details</h2>
        <p className="text-gray-700 mb-6">
          Call us and speak to our experts who will advise and take your order. If you have an enquiry, email it over to us, and we will price your project and email you back within 24 hours.
        </p>

        {/* Address */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Address</h3>
          <p className="text-gray-600">
            Demo Timber Company<br />
            Industrial Park<br />
            Ellis Ashton St<br />
            Off Wilson Rd<br />
            City Name, Country
          </p>
        </div>

        {/* Contact */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Contact</h3>
          <p className="text-gray-600">
            Telephone: +123 456 7890<br />
            Fax: +123 456 7891<br />
            Email: <a href="mailto:info@demotimber.com" className="text-[#8B0000] font-bold underline">info@demotimber.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
