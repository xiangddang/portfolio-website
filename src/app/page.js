import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Timeline from "./components/Timeline";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* <AchievementsSection /> */}
        {/* <div id="about"><AboutSection /></div> */}
        <div id="about"><Timeline /></div>
        <div id="projects"><ProjectsSection /></div>
        <div id="contact"><EmailSection /></div>
      </div>
      <Footer />
    </main>
  );
}
