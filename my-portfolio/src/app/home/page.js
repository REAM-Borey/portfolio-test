

export default function HeroSection() {
  return (
    <div className="hero w-full flex justify-center items-center min-h-screen bg-red-200">
  <div className="hero-content flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-10 w-full max-w-7xl">
    
    {/* Text */}
    <div className="lg:w-1/2 text-center lg:text-left spec">
      <p className="text-3xl font-bold text-white">Hi !</p>
      <h2 className="text-3xl font-bold text-blue-900">Borey REAM</h2>
      <h1 className="text-5xl font-bold">Web Develoment</h1>
       <div className="flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
      <button className="px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
        Upload
      </button>
    </div>

    </div>

    {/* Image */}
    <div className="lg:w-1/2 ml-60">
      <img
        src="https://i.pinimg.com/1200x/98/0f/8e/980f8edaae405546073f9a735058a7df.jpg"
        className="max-w-sm rounded-lg shadow-2xl"
      />
    </div>
    
  </div>
</div>

  );
}
