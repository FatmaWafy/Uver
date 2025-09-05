import React from "react";
import Button from "./Button";

const Mission = () => {
  return (
    <section className="relative bg-gray-900 py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
        loading="lazy"
          src="/business-meeting-team-collaboration.webp"
          alt="Team collaboration"
          className="w-full h-full object-cover  overflow-hidden"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative  max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-medium text-white leading-tight">
            At UVER, we're on a mission to simplify the college search and application process. We value personalized support, equal access to education, and making the journey effortless for students worldwide
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl   font-light">
            Our mission is to revolutionize college search and applications, providing personalized support and equal opportunities. We aim to simplify the process and empower students to make informed decisions for their educational journey.
          </p>

          <Button
           >
            Go To Careers →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Mission;