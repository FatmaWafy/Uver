import Header from "./components/Header"
import Hero from "./components/Hero"
import Testimonial from "./components/Testimonial"
import ComprehensiveSearch from "./components/ComprehensiveSearch"
import Steps from "./components/Steps"
import Partnerships from "./components/Partnerships"
import AppShowcase from "./components/AppShowcase"
import Mission from "./components/Mission"

function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ComprehensiveSearch />
        <Steps />
        <Partnerships />
        <Testimonial />
        <AppShowcase />
        <Mission />
      </main>

    </div>
  )
}

export default App
