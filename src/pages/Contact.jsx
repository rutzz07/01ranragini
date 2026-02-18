import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-gray-100">
      {/* Page Title */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-gray-500 mt-2">
          Click on your nearest store location below to set the road on Google
          Map.
        </p>
      </div>

      {/* Google Map */}
      <div className="relative px-6 md:px-20">
        <iframe
          src="https://www.google.com/maps?q=18.6584602,73.775355&hl=en&z=14&output=embed"
          width="100%"
          height="400"
          loading="lazy"
          className="rounded-lg shadow-md"
        ></iframe>

        <a
          href="https://www.google.com/maps/place/300,+Sector+No.+24,+Pradhikaran,+Nigdi,+Pimpri-Chinchwad,+Maharashtra+411044"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
        ></a>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-12 px-6 md:px-20">
        {/* Store */}
        <div>
          <FaMapMarkerAlt className="text-pink-600 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Our Store</h3>
          <p className="text-gray-600 mt-2">
            Ranragini Enterprises Sector 24 plot 300
            <br /> Pradhikaran Nigdi, Pune
          </p>
        </div>

        {/* Contact */}
        <div>
          <FaPhoneAlt className="text-pink-600 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Contact Info</h3>
          <p className="text-gray-600 mt-2">
            Telephone: +91 7020023262
            <br />
            Email: info@ranragini.in
          </p>
        </div>

        {/* Business Hours */}
        <div>
          <FaClock className="text-pink-600 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Business Hours</h3>
          <p className="text-gray-600 mt-2">
            Monday – Sunday
            <br />
            09:00 am – 08:00 pm
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">
            Send Us a Message
          </h2>
          <p className="text-gray-500 text-center mb-8">Ask us anything here</p>

          <form className="space-y-6">
            <div>
              <label className="text-sm text-gray-600">Your Name</label>
              <input
                type="text"
                className="w-full mt-2 px-4 py-3 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Your Email</label>
              <input
                type="email"
                className="w-full mt-2 px-4 py-3 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Subject</label>
              <input
                type="text"
                className="w-full mt-2 px-4 py-3 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Your Message (optional)
              </label>
              <textarea
                rows="4"
                className="w-full mt-2 px-4 py-3 rounded-2xl bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
