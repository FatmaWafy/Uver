import CountdownTimer from './CountdownTimer';
import PhoneMockup from './PhoneMockup';
import FeatureList from './FeatureList';

const Hero = () => {
  return (
    <section className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-1 space-y-8 text-center lg:text-left">
            <div className="  lg:mb-[100px]">
              <p className="text-md lg:text-lg text-gray-600">
                Discover, apply, succeed – UVER makes college search effortless. Your future starts right here.
              </p>
            </div>
            {/* Countdown Timer */}
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-sm lg:text-base text-gray-600 mb-0 flex items-center gap-2">
                🚀 Launching starts in
              </p>
              <CountdownTimer />
            </div>
          </div>

          {/* Center Phone */}
          <div className="lg:col-span-1 flex justify-center">
            <PhoneMockup />
          </div>

          {/* Right Features */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <FeatureList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;