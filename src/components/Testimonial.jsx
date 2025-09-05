import { useState } from "react";

const Testimonial = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      text: "As a beta tester, I was amazed by how seamlessly it streamlined my college search. The personalized recommendations were spot on, and the application tracker kept me organized. UVER exceeded my expectations, and I'm thrilled to see it launch!",
      author: "Emily S.",
      role: "Beta Tester",
      avatar: "/female-student-avatar.webp",
    },
    {
      text: "UVER made the daunting process of finding the right college so much easier. The interface is clean and intuitive, and the application tracker is a game-changer. I highly recommend it to any student looking for an edge in their college applications.",
      author: "Michael T.",
      role: "Beta Tester",
      avatar: "/male1-student-avatar.webp",
    },
    {
      text: "I loved the personalized college suggestions. It felt like UVER truly understood my needs and preferences. The application tracker was also incredibly helpful, making sure I never missed a deadline. This is a must-have tool!",
      author: "John L.",
      role: "Beta Tester",
      avatar: "/male2-student-avatar.webp",
    },
  ];

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      Math.min(testimonials.length - 1, prevIndex + 1)
    );
  };

  const handlePrevious = () => {
    setCurrentTestimonialIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <blockquote className="text-xl lg:text-3xl text-gray-800 leading-relaxed font-semibold px-4">
            {currentTestimonial.text}
          </blockquote>
          <div className="big-box flex items-center justify-between space-x-4 lg:space-x-8">
            <div className=" navigate flex space-x-4">
              <button
                className={`w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center transition-colors duration-200 ease-in-out ${currentTestimonialIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:border-blue-400"
                  }`}
                onClick={handlePrevious}
                disabled={currentTestimonialIndex === 0}
              >
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className={`w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center transition-colors duration-200 ease-in-out ${currentTestimonialIndex === testimonials.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                  }`}
                onClick={handleNext}
                disabled={currentTestimonialIndex === testimonials.length - 1}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <img
                loading="lazy"
                src={currentTestimonial.avatar || "/placeholder.svg"}
                alt={currentTestimonial.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900">
                  {currentTestimonial.author}
                </div>
                <div className="text-gray-500">{currentTestimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;