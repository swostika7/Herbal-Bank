import React from "react";
import { MapPin, Mail, Phone, Building2 } from "lucide-react";

function Contact() {
  return (
    <section className="min-h-screen bg-four pt-24 ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Contact <span className="text-one">Us</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Reach out to us for any solutions, partnerships, or inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 ">
          {/* Company Info */}
          <div className="lg:space-y-6 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-two" />
                Company Information
              </h3>

              <div className="space-y-4 sm:space-y-5 text-gray-700 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-one" />
                  <span>
                    Muktinath Herbal Bank Ltd.
                    <br />
                    Kathmandu, Nepal
                  </span>
                </div>

                <div className="flex items-center gap-3 break-all">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-one" />
                  <span>info@muktinathherbal.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-one" />
                  <span>+977 9802374101</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-64 sm:h-72 lg:h-80">
              <iframe
                title="Muktinath Krishi Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.344847614371!2d85.3202005751243!3d27.737507671502616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194f10250f3d%3A0x53ec15dc96d7fe12!2sMuktinath%20Krishi%20Company!5e0!3m2!1sen!2snp!4v1768384778935!5m2!1sen!2snp"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Send Us a Message
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              We usually respond within one business day.
            </p>

            <form className="space-y-5 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-three mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-three px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-three mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="muktinathherbal@gmail.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-three mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 "
                />
              </div>

              <button
                type="submit"
                className="w-full bg-two text-white py-3 rounded-xl font-semibold hover:bg-one transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
