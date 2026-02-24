import React from "react";
import styles from "../style/styleAngola.module.css";

function NavbarAngola() {
  return (
    <header className={styles.navbar_angola_header}>
      <h2>
        <span className={styles.ao}>AO</span> Muxima Polska
      </h2>
      <address className={styles.adress_angola}>
        <p>
          <a
            className={styles.email_angola}
            href="mailto:tinocotripa@gmail.com"
          >
            <i className="fas fa-envelope"></i> tinocotripa@gmail.com
          </a>
        </p>
        <p>
          <a className={styles.phone_angola} href="tel:+48514510659">
            <i className="fas fa-phone"></i> +48 514 510 659
          </a>
        </p>
        <p>adress: Ul.Rudawa gaj, Poland</p>
      </address>
      <div className={styles.navbar_containerAngola}>
        <nav className={styles.navbar_angola}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavbarAngola;
