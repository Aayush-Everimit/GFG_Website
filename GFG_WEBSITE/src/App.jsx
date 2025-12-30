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
        <div className="app-wrapper bg-gray-900 gfg-pattern">
            <Navbar />
            <Home />
            <About />
            <Resources />
            <Blog />
            <Team />
            <NationSkillUp />
            <Footer />
        </div>
    );
}
