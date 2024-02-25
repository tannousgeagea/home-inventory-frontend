import React from "react";
import './hero.css'


const Hero = (props) => {
    return (
        <div className="heroContainer home-hero1">
            <div className="home-container01">
                <h1 className="home-hero-heading heading1">
                    Track Your Home Inventory Easily
                </h1>
                
                <span className="home-hero-sub-heading bodyLarge">
                    Never run out of essentials again
                </span>


                <div className="home-btn-group">
                    <button className="buttonFilled">Get Started Now</button>
                    <button className="buttonFlat">Learn More →</button>
                </div>

            </div>
        </div>
    )
}

export default Hero