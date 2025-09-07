import { useState } from 'react';
import { motion } from 'framer-motion';
import sectionTwoImage from '/sectionTwo.webp';

const ComprehensiveSearch = () => {
  const [activeTab, setActiveTab] = useState('College Search');

  const tabs = [
    'College Search',
    'Recommendations',
    'Tracker',
    'Chat',
    'Application'
  ];

  const tabContent = {
    'College Search': {
      title: 'Comprehensive College Search',
      description: 'Effortlessly explore a vast database of colleges and universities worldwide. Filter results based on your preferences, including location, majors, campus facilities, and more. Find the perfect fit for your educational journey.'
    },
    'Recommendations': {
      title: 'Personalized Recommendations',
      description: 'Get tailored suggestions based on your interests, academic goals, and preferences. Discover colleges that match your profile perfectly.'
    },
    'Tracker': {
      title: 'Application Tracker',
      description: 'Keep track of your application status, deadlines, and required documents in one convenient place.'
    },
    'Chat': {
      title: 'Live Chat Support',
      description: 'Connect with our support team for instant help and guidance on your college search journey.'
    },
    'Application': {
      title: 'Application Assistance',
      description: 'Simplify the application process with step-by-step guidance and tools to submit your applications seamlessly.'
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleNextClick = () => {
    document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gray-900 py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr] gap-5  ">
          {/* Navigation Column */}
          <div className="lg:col-span-1 me-[100px]  ">
            <div className="flex flex-col space-y-2  lg:text-left">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={`ps-2 pb-1 text-xs lg:text-sm font-medium cursor-pointer transition-colors w-full ${activeTab === tab
                    ? 'text-white border-l-2 border-blue-400  '
                    : 'text-gray-400 hover:text-white '
                    }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mt-4">
              {tabContent[activeTab].title}
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mt-4">
              {tabContent[activeTab].description}
            </p>
          </div>

          {/* Phone Mockup Column */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                loading="lazy"
                src={sectionTwoImage}
                alt="College Search Interface"
                className="w-34 lg:w-50 h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left Scroll Button */}
      <div className="absolute xs:bottom-10   right-[-10px] md:right-[-100px] bottom-32 w-full flex justify-start items-center pl-4 sm:pl-6 lg:pl-8">
        <a href="#steps">
          <div className="w-[30px] h-[54px] rounded-3xl border-4 border-gray-600 flex justify-center items-start p-2 xs:ml-[-80px]">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gray-600 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ComprehensiveSearch;