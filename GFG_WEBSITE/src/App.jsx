import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import About from "./components/About";
import Resources from "./components/Resources";
import Blog from "./components/Blog";
import NationSkillUp from "./components/NationSkillUp";
import Footer from "./components/Footer";
import Team from "./components/Team.jsx";


export default function App() {
    return (
        <div className="app-wrapper bg-gray-900 gfg-pattern relative">
            <Navbar />

            {/* Main Content Sections */}
            <main className="relative z-20">
                <Home />
                <About />
                <Resources />
                <Blog />
                <Team />
                <NationSkillUp />
            </main>

            <Footer />

            {/* Vertical green strip accent */}
            <div 
                id="right-accent-strip"
                className="fixed right-0 top-0 bottom-0 w-16 z-30 transition-colors duration-300" 
                style={{ backgroundColor: '#1a3d3a' }}
            ></div>
        </div>
    );
}