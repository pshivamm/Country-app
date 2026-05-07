import { HeroSection } from "../components/UI/HeroSection";
import { About } from "../pages/About";
import { Country } from "../pages/Country";
import { Contact } from "../pages/Contact";


export const Home = () => {
    return (
        <main>
            <HeroSection />
            <About />
            {/* <Country /> */}
            <Contact />
        </main>
    );
}