import React from "react";
import styles from "../style/styleAngola.module.css";
function FooterAngola() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footerStyle}>
      <div className={styles.footerContainer}>
        <div className={styles.footerRow}>
          <section className={styles.footer_section}>
            <div className={styles.footerLogo}>
              <span className={styles.ao}>AO</span>
              <div>
                <h2>Muxima Polska</h2>
              </div>
            </div>
            <p className={styles.about}>
              Dedicated to supporting the Angolan community in Poland with
              quality services and personalized attention.
            </p>
          </section>

          <section className={styles.footer_section1}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#services">Service</a>
              </li>
            </ul>
          </section>

          <section className={styles.footer_section2}>
            <h3>Our Services</h3>
            <ul>
              <li>Football</li>
              <li>Legal Assistance</li>
              <li>Family Meetings</li>
              <li>Events and Parties</li>
            </ul>
          </section>
        </div>

        <section className={styles.footer_section4}>
          <p>
            &copy; {year} Muxima Polska. Desenvolvido por Albertino Cotripa.
          </p>
        </section>
      </div>
    </footer>
  );
}

export default FooterAngola;
