"use client";
import contactMe from "../components/contactMe/page";
export default function SocialButtons() {
  return (
    <>
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        {/* Header */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
          </p>
        </div>

        {/* Form */}
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full flex justify-end">
              <button className="text-white bg-indigo-500 border-1 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="w-full bg-white text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-10 py-10 flex flex-col items-center justify-center space-y-10">
        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-30 text-sm font-medium">
          <a className="hover:text-blue-500 transition-colors text-2xl">About us</a>
          <a className="hover:text-blue-500 transition-colors text-2xl">Contact</a>
          <a className="hover:text-blue-500 transition-colors text-2xl">Jobs</a>
          <a className="hover:text-blue-500 transition-colors text-2xl">Press kit</a>
        </nav>

        
        {/* Social icons */}
        <nav className="flex gap-6">
          {/* ... your social SVGs here ... */}
        </nav>
        {/* Divider with contact info */}
        <div className="w-[50%] flex items-center justify-between">
          <p className="text-2xl tracking-widers">boreyreun168@gmail.com</p>
          <p className="text-2xl tracking-wider">0887161383</p>
        </div>
        {/*Medai*/}
        <div className="flex items-center gap-x-6">
        </div>

        {/* Divider line */}
        <hr className="w-[60%] border-t-2 text-black-900 border-gray-300 my-4" />

        {/* Copyright */}
        <aside className="text-xs text-gray-500">
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
            <span className="font-semibold">ACME Industries Ltd</span>
          </p>
        </aside>
      </div>
    </footer>
    </>
  );
}
