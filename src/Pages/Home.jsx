import Faq from "../Components/Faq";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Testimonial from "../Components/Testimonial";


export default function Home() {

    return (
        <div className="bg-black pt-10">
        <Navbar />
        <Hero />
        <Features/>
        <Testimonial/>
        <Faq/>
        <Footer/>
        </div>
    );
}