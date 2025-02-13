import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {["home", "couple", "gallery", "wedding-party", "rsvp"].map((section) => (
          <li key={section}>
            <Link to={section} smooth={true} duration={500}>
              {section.replace("-", " ").toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;