import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import About from "./components/About";
import Resources from "./components/Resources";
import Blog from "./components/Blog";
import NationSkillUp from "./components/NationSkillUp";
import Footer from "./components/Footer";
import Team from "./components/Team.jsx";
import 'boxicons/css/boxicons.min.css';


export default function App() {
    return (
        <div className="app-wrapper relative">
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


        </div>

    );
}