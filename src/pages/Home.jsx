import React from "react";
import Header from "../components/header/Header";
import Skills from "../components/skills/Skills";

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <div className="container">
                    <Skills />
                </div>
            </main>
        </>
    )
}

export default Home;