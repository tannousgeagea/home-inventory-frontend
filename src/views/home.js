import React from "react";
import { Helmet } from 'react-helmet'
import './home.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from '../components/header'
import Hero from "../components/hero";
import Features from "../components/features/features";



const Home = (props) => {
    return (
        <Router>
            <div className="home-container">
                <Helmet>
                    <title>Prickly Cooperative Human</title>
                    <meta property="og:title" content="Prickly Cooperative Human" /> 
                </Helmet>

                <div className="header-hero">
                    <div className="home-header">
                        <Header />
                    </div>
                    
                    <div className="home-hero">
                        <Hero />
                    </div>
                </div>

                <div className="home-features">
                    <Features />
                </div>

            </div>
        </Router>
    )
}

export default Home