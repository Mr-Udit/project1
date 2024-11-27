import BlurBackground from "./components/BlurBackground";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TeamDetails from "./components/Team Details";
import Testmonial from "./components/Testmonial";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <BlurBackground/>
      <Navbar/>
      <main className="relative z-10 mx-auto overflow-hidden antialiased max-w-7xl">
        <Hero/>
        <TeamDetails/>
        <Testmonial/>
        <Contact/>
      </main>
    </div>
  )
}