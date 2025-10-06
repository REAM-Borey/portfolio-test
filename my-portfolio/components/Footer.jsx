"use client";
import ContactMe from "./ContactMe"
export default function SocialButtons() {
  return (
    <>
      <ContactMe />
      <footer className="w-full text-white border-t bg-gray-900">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 py-10 flex flex-col items-center justify-center space-y-8 sm:space-y-10">
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm sm:text-base font-medium">
            <a className="hover:text-blue-500 transition-colors text-lg sm:text-2xl">About us</a>
            <a className="hover:text-blue-500 transition-colors text-lg sm:text-2xl">Contact</a>
            <a className="hover:text-blue-500 transition-colors text-lg sm:text-2xl">Jobs</a>
            <a className="hover:text-blue-500 transition-colors text-lg sm:text-2xl">Press kit</a>
          </nav>

          {/* Social icons */}
          <nav className="flex gap-4 sm:gap-6">
            {/* Insert your social SVG icons here */}
            <a className="text-white hover:text-blue-500 transition-colors">
              {/* Example SVG */}
              <svg width="24" height="24" fill="currentColor"><circle cx="12" cy="12" r="12" /></svg>
            </a>
          </nav>

          {/* Divider with contact info */}
          <div className="w-full sm:w-1/2 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 sm:gap-0">
            <p className="text-lg sm:text-2xl tracking-wider">boreyreun168@gmail.com</p>
            <p className="text-lg sm:text-2xl tracking-wider">0887161383</p>
          </div>

          {/* Media section placeholder */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Add logos or images if needed */}
          </div>

          {/* Divider line */}
          <hr className="w-full sm:w-3/5 border-t-2 border-gray-300 my-4" />

          {/* Copyright */}
          <aside className="text-xs sm:text-sm text-center">
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
