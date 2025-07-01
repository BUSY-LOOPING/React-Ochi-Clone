import './App.css';
import Navbar from "./components/Navbar.tsx";
import LandingPage from "./components/LandingPage.tsx";
import Marquee from "./components/Marquee.tsx";

function App() {

  return (
    <div className="w-full h-screen  text-white">
        <Navbar/>
        <LandingPage/>
        <Marquee/>
    </div>
  )
}

export default App
