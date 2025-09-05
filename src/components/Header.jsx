import { useState } from "react";
import Button from "../components/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" bg-gray-50 backdrop-blur-sm   sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">UVER</h1>
          </div>

           
          <div className="hidden md:block">
            <Button  >
              Get Early Access
            </Button>
          </div>

          {/* Mobile menu button with animation */}
          <div className="md:inline">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hamburger ${isMenuOpen ? 'open' : ''} p-2`}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-4 bg-white border-t border-gray-200">
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Get Early Access
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;