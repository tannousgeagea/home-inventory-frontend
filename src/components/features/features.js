import React from "react";
import FeatureCard from "./feature-card";
import AddProductForm from '../product/AddProductForm'
import './features.css'

function Features () {
    return (
        <div className="featuresContainer">
            <div className="home-features01">
                <div className="home-container02">
                    <span className="overline">
                        Features
                    </span>
                    
                    <h2 className="home-features-heading heading2">
                        Manage Your Home Inventory with Ease
                    </h2>

                    <span className="home-features-sub-heading bodyLarge">
                        Efficiently track, add, and remove products from your home
                        inventory list  
                    </span>
                </div>
                
                <div className="home-container03">
                    <FeatureCard
                        heading="Inventory Tracking"
                        subHeading="Easily track all the products you have at Home"
                    ></FeatureCard>
                    <FeatureCard
                        heading="Add New Products"
                        subHeading="Quickly add new products to your inventory list"
                    ></FeatureCard>
                    <FeatureCard
                        heading="Remove Consumed Products"
                        subHeading="Effortlessly remove products from the list as you consume them"
                    ></FeatureCard>
                    <FeatureCard
                        heading="Organize Your Home Inventory"
                        subHeading="Keep your home inventory organized and up-to-date"
                    ></FeatureCard>
                </div>
            </div>
        </div>
    )
}

export default Features