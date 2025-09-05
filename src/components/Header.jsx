import Button from "../components/Button";

const Header = () => {
  return (
    <header className="bg-gray-50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              UVER
            </h1>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="block w-8 h-1 bg-gray-300 rounded"></span>
              <span className="block w-8 h-1 bg-gray-300 rounded"></span>
            </div>
          </div>

          <div className="hidden md:flex justify-end">
            <Button>Get Early Access</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
