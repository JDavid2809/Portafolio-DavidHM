import { Footer } from "./components/Footer"
import { About } from "./pages/About"
import { Experience } from "./pages/Experience"
import { Hero } from "./pages/Hero"
import { Stack } from "./pages/Stack"


const App = () => {
  return (
    <div className="min-h-screen"> 
      <Hero/>
      <About/>
      <Experience/>
      <Stack/>
      <Footer/>
    </div>
  )
}

export default App