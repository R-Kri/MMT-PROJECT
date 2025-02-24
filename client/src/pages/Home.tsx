import Container from "../components/Container";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { TabType } from "../utils/types";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
    const [activeTab, setActiveTab] = useState<TabType>('flights');

    return (
        <div className="app-container">
            <main className="app-background flex flex-col w-[90vw] mx-auto">
                <Header />
                <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
                <Container activeTab={activeTab} />
            </main>
            <div className="faq-spacing" />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Home;
