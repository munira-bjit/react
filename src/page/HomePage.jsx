import React from "react";
import Header from "../component/Header";

function Homepage() {
    return (
        <div>
            <div className="container">
                <Header />
                <h2>Welcome to the Blood Bank</h2>
                <p>
                    Our mission is to save lives by providing a platform for blood donors
                    and those in need. Join us in our mission to make the world a better
                    place.
                </p>
                <p>
                    <strong>How can you help?</strong>
                </p>
                <ul>
                    <li>Donate blood and save lives.</li>
                    <li>Find a donor for someone in need.</li>
                    <li>Register as a donor and be a hero.</li>
                </ul>
            </div>
        </div>
    );
}

export default Homepage;
