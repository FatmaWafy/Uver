const AppShowcase = () => {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">

          {/* Column 1 - Two Phone Mockups */}
          <div className="flex flex-col gap-4  ">
            <img
              loading="lazy"
              src="/sectionImg1.webp"
              alt="Applications List"
              className="w-full h-full object-cover rounded-3xl bg-gray-100  "
            />
            <img
              loading="lazy"
              src="/sectionImg2.webp"
              alt="College Details"
              className="w-full h-full object-cover rounded-3xl bg-gray-100"
            />
          </div>

          {/* Column 2 - Two Phone Mockups */}
          <div className="flex flex-col gap-4 ">
            <img
              loading="lazy"
              src="/sectionImg3.webp"
              alt="Search Results"
              className="w-full h-full object-cover rounded-3xl bg-gray-100"
            />
            <img
              loading="lazy"
              src="/sectionImg4.webp"
              alt="Chat Interface"
              className="w-full h-full object-cover rounded-3xl bg-gray-100"
            />
          </div>

          {/* Column 3 - Full-height Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl 
                          md:col-span-2 lg:col-span-1 h-80 md:h-[660px] lg:h-auto">
            {/* Background Image */}
            <img
              loading="lazy"
              src="/sectionImgfull-height.webp"
              alt="Graduation Showcase"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-start justify-end p-8 text-white">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight drop-shadow-lg">
                Get ready to experience the future of college applications with UVER
              </h2>
              <a href="#" className="mt-8">
                <button className="w-16 h-16 rounded-full border-2 border-white bg-transparent flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-white/20">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
