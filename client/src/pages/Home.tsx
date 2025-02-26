import { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import SearchButton from "../components/SearchButton";

const Home = () => {
    const [activeTab, setActiveTab] = useState<"flights" | "hotels" | "tours">("flights");

    return (
        <div className="app-container">
            <main className="app-background flex flex-col w-[90vw] mx-auto">
                <Header />
                <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
                <Container activeTab={activeTab} />
                <div className="relative">
                    <SearchButton activeTab={activeTab} />
                </div>
            </main>
            <div className="py-8 sm:py-10 md:py-12 lg:py-16" />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Home;
