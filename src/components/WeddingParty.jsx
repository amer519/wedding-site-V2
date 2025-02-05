import React from "react";
import bridesmaid1 from "../assets/bridesmaid1.jpg";
import bridesmaid2 from "../assets/bridesmaid2.jpg";
import groomsman1 from "../assets/groomsman1.jpg";
import groomsman2 from "../assets/groomsman2.jpg";

const weddingParty = [
    { name: "Ariel", role: "Maid of Honor", img: bridesmaid1, bio: "Ariel has been a close friend for years. She loves coffee and long walks on the beach!" },
    { name: "Willow", role: "Bridesmaid", img: bridesmaid2, bio: "Willow is our adventure buddy and always full of energy!" },
    { name: "James", role: "Best Man", img: groomsman1, bio: "James has known the groom since childhood and is always ready with a joke!" },
    { name: "Michael", role: "Groomsman", img: groomsman2, bio: "Michael is the one who keeps us all on schedule and makes sure everything runs smoothly!" }
];

const WeddingParty = () => {
    return (
        <section id="wedding-party" className="wedding-party-section">
            <h2>Wedding Party</h2>
            <div className="wedding-party-grid">
                {weddingParty.map((member, index) => (
                    <div className="party-member" key={index}>
                        <img src={member.img} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                        <p>{member.bio}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WeddingParty;
