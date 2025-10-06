"use client";

import { title } from "process";

export default function ContactSection() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        {/* Header */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
          </p>
        </div>

        {/* Form */}
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full bg-gray-900 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-900 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  className="w-full bg-gray-900 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full flex justify-end">
              <button className="text-white bg-black border border-gray-500 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-lg">
                Send
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>

  );
}
