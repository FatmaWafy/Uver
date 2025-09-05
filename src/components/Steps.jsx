
import Button from "../components/Button";

const Steps = () => {
  const steps = [
    {
      icon: "🔍",
      title: "Search for Your Ideal College",
      description:
        "Browse through an extensive database of colleges and universities. Refine your search based on location, majors, campus facilities, and more.",
    },
    {
      icon: "💬",
      title: "Chat with Admissions Experts",
      description:
        "Ask questions, seek advice, and gain valuable insights to make informed decisions about your college applications.",
    },
    {
      icon: "👀",
      title: "Track Deadlines and Requirements",
      description:
        "Receive notifications for upcoming deadlines, document requirements, and submission dates. Keep track of the progress of your applications.",
    },
    {
      icon: "📝",
      title: "Apply with Confidence",
      description:
        "Utilize convenient form filling features, upload required documents seamlessly, and submit applications electronically.",
    },
    {
      icon: "🎯",
      title: "Plan Your College Future",
      description:
        "Once you receive acceptance letters, utilize UVER's tools to compare offers, evaluate financial aid packages, and make informed decisions.",
    },
    {
      title: "Discover, apply, succeed – UVER app makes college search effortless.",
      isSpecial: true,
      image: "/graduation-ceremony-students.webp",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="steps" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between pb-12">
            <div className="text-gray-600 text-sm font-medium mb-4 sm:mb-0 sm:mr-auto border-l-2 border-blue-400 ps-2">
              How It Works
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 text-center flex-1">
              Simple Steps to College Success
            </h1>
            <div className="flex items-center mt-4 sm:mt-0 sm:ml-auto w-12 h-12">
              <span className="text-4xl">🎓</span>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
              steps.map((step, index) => (
                <div
                  key={index}
                  className={`rounded-2xl space-y-4 hover:transform hover:scale-105 transition-all duration-300 relative ${step.isSpecial ? "bg-gray-800 text-white p-0" : "main-card bg-blue-600 text-white p-8"}`}
                  style={{ minHeight: '300px' }}
                >
                  {step.isSpecial ? (
                    <div className="relative h-full">
                      <img
                      loading="lazy"
                        src={step.image || "/placeholder.svg"}
                        alt="Graduation ceremony"
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl overflow-hidden"
                      />
                      <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-end rounded-2xl">
                        <h3 className="text-white text-xl font-bold mb-4 leading-tight">
                          {step.title}
                        </h3>
                        <Button>
                          Get Early Access 📱
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative folder-card ">
                      <div className="text-4xl mb-[15px]">{step.icon}</div>
                      <h3 className="text-xl font-bold mb-[15px]">{step.title}</h3>
                      <p className="text-blue-100 leading-relaxed">{step.description}</p>
                    </div>
                  )}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps;