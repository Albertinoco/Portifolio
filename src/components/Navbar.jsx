import React from "react";
import "../style/style.css";
export default function Navbar() {
  return (
    <header>
      <address className="adress_loja">
        <p>
          <a className="email_loja" href="mailto:tinocotripa@gmail.com">
            <i className="fas fa-envelope"></i> tinocotripa@gmail.com
          </a>
        </p>
        <p>
          <a className="phone_loja" href="tel:+48514510659">
            <i className="fas fa-phone"></i> +48 514 510 659
          </a>
        </p>
        <p>adress: Ul.Rudawa gaj, Poland</p>
      </address>
      <div className="navbar_container">
        <h2>
          <spam className="prime">Prime</spam> Flavor
        </h2>
        <nav className="navbar_loja">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#orderNow">Contact</a>
            </li>
            <a>
              <i className="fas fa-shopping-cart"></i>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}
