export default function HeroSection() {
  return (
    <div className="hero w-full flex justify-center items-center min-h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-2 max-w-7xl w-full px-6">

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left p-6 rounded-lg space-y-4">
          <p className="text-4xl font-bold text-white">Hi! I am</p>
          <h2 className="text-5xl font-bold text-gray-500 space-y-5">Borey REAM</h2>
          <h1 className="text-7xl font-bold text-orange-500">Web Development</h1>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/1200x/98/0f/8e/980f8edaae405546073f9a735058a7df.jpg"
            alt="Profile"
            className="w-[300px] h-[500px] object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>


  );
}
