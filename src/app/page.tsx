"use client";

import store from "../redux/store";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Provider store={store}>
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </Provider>
    </div>
  );
}
