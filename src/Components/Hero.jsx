export default function Hero() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-32 md:pt-40 md:pb-40 text-center">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Build better
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            {" "}habits{" "}
          </span>
          and
          <br className="hidden sm:block" />
          change your life
        </h1>

        
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Track your habits, stay motivated, and build lasting change,
          <br className="hidden sm:inline" /> all for <span className="font-semibold">free</span>.
        </p>

       
        <div className="mt-10">
          <button
            className="
              px-8 py-4 text-lg md:text-xl font-medium
              bg-gradient-to-r from-blue-600 to-purple-600
              hover:from-blue-700 hover:to-purple-700
              text-white rounded-full
              shadow-lg shadow-purple-900/40
              transition-all duration-300
              hover:scale-105 active:scale-95
            "
          >
            Use it Free
          </button>
        </div>

        
        <div className="mt-16">
          <div className="flex justify-center items-center gap-2 text-yellow-400 text-2xl">
            ★★★★★
          </div>
          <p className="mt-3 text-gray-400 text-lg">
            Trusted by +100 Users
          </p>

          <div className="mt-6 flex justify-center -space-x-3 sm:-space-x-4">
            <img
              src="https://thumbs.dreamstime.com/b/handsome-young-indian-man-smiling-close-up-portrait-isolated-white-background-36796650.jpg"
              alt="User"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-black object-cover shadow-md"
            />
            <img
              src="https://thumbs.dreamstime.com/b/portrait-smiling-young-indian-man-headset-business-customer-service-people-concept-273946850.jpg"
              alt="User"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-black object-cover shadow-md"
            />
            <img
              src="https://c8.alamy.com/comp/RB5GHE/smiling-young-indian-man-over-gray-background-RB5GHE.jpg"
              alt="User"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-black object-cover shadow-md"
            />
            <img
              src="https://thumbs.dreamstime.com/b/portrait-indian-woman-smile-studio-fashion-isolated-white-background-confidence-happy-contemporary-style-female-309251599.jpg"
              alt="User"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-black object-cover shadow-md"
            />
            <img
              src="https://thumbs.dreamstime.com/b/indian-woman-studio-portrait-beauty-female-feeling-happy-relax-cheerful-isolated-white-background-young-businesswoman-270614566.jpg"
              alt="User"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-black object-cover shadow-md"
            />
            <img
              src="https://thumbs.dreamstime.com/b/profile-picture-smiling-indian-female-employee-profile-picture-smiling-millennial-indian-female-employee-posing-office-198022033.jpg"
              alt="User"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-black object-cover shadow-md"
            />
            <img
              src="https://c8.alamy.com/comp/2JPXDJN/smiling-young-indian-business-man-wearing-eyeglasses-headshot-portrait-2JPXDJN.jpg"
              alt="User"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-black object-cover shadow-md"
            />
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-black bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xs sm:text-sm font-bold text-white shadow-md">
              +100
            </div>
          </div>
        </div>

        
        <div className="mt-20 md:mt-28 relative z-10">
          <div className="max-w-5xl mx-auto">
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/40 border border-gray-800/50 bg-black/60 backdrop-blur-sm">
              <img
                src="https://thumbs.dreamstime.com/b/digital-dashboard-user-interface-habit-tracking-application-displaying-goals-weekly-progress-clean-modern-436241344.jpg"
                alt="StreakBoost habit tracker dashboard preview – dark mode with calendar, streaks, habits list and stats"
                className="w-full h-auto object-cover"
              />
              
              <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                HabitNow Dashboard
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 text-center">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-2xl font-semibold">Calendar</h3>
            <p className="mt-3 text-gray-400">Sync across all platforms</p>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 text-center">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-2xl font-semibold">Application</h3>
            <p className="mt-3 text-gray-400">
              Soon available everywhere
              <span className="inline-flex items-center gap-2 ml-2">
                <span className="text-green-400">•</span> iOS
                <span className="text-green-400">•</span> Android
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}