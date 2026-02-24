import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carts from "./Carts.jsx";
import "../style/style.css";

function Loja() {
  const [categoria, setCategoria] = useState("All");

  return (
    <div>
      <Navbar />
      <main>
        <section className="section1">
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"> </i>
            <span className="star_v">4.9 (2.5k reviews)</span>
          </div>
          <h1 className="mainText">Taste the Magic</h1>
          <p className="subText">
            Great food, better company. Join us for a journey of authentic
            flavors made with love and served with a smile. Your perfect meal is
            just a bite away.
          </p>
          <div className="a_loja">
            <a className="btn-order" href="#orderNow">
              Order Now
            </a>
            <a className="btn-menu" href="#viewMenu">
              View Menu
            </a>
          </div>
          <div className="icon">
            <i className="fas fa-shipping-fast"></i>
            <span>Delivery</span>
            <i className="fas fa-location"></i>
            <span>2 Locations </span>
          </div>
        </section>

        <section className="section2">
          <div className="menu">
            <h4>Our Menu</h4>
            <h2>Delicious Dishes</h2>
            <p>
              Explore our diverse menu filled with mouth-watering dishes crafted
              to satisfy every craving. From appetizers to desserts, each item
              is crafted with care and passion.
            </p>
          </div>
          <div className="nav_Categories" id="viewMenu">
            <button
              onClick={() => setCategoria("All")}
              className="btn-category"
            >
              All
            </button>
            <button
              onClick={() => setCategoria("appetizers")}
              className="btn-category"
            >
              Appetizers
            </button>
            <button
              onClick={() => setCategoria("main courses")}
              className="btn-category"
            >
              Main Courses
            </button>
            <button
              onClick={() => setCategoria("desserts")}
              className="btn-category"
            >
              Desserts
            </button>
            <button
              onClick={() => setCategoria("drinks")}
              className="btn-category"
            >
              Drinks
            </button>
          </div>
          <Carts categoria={categoria} />
        </section>
        <section className="section3">
          <div className="reservation">
            <h4>Make a Reservation</h4>
            <h2>Book Your Table</h2>
            <p>
              Reserve your table online and enjoy a seamless dining experience.
              Whether it's a casual meal or a special occasion, we've got you
              covered.
            </p>
          </div>
          <div className="reservation_container">
            <form className="reservation_form" id="orderNow">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" placeholder="(123) 456-7890" />
              </div>
              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <input
                  type="number"
                  id="guests"
                  placeholder="2"
                  min="1"
                  max="20"
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" required />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input type="time" id="time" required />
              </div>
              <button type="submit">Reserve Now</button>
            </form>

            <div className="important_information">
              <h3>Important Information</h3>
              <p>
                <i className="fas fa-info-circle"></i>
                <span>Reservations are recommended but not required.</span>
              </p>
              <p>
                <i className="fas fa-users"></i>
                <span>
                  For groups of more than 8 people, please contact us directly.
                </span>
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                <span>Confirmation will be sent via email and WhatsApp.</span>
              </p>
              <p>
                <i className="fas fa-clock"></i>
                <span>Open daily from 11 AM to 10 PM.</span>
              </p>
              <p>
                <i className="fas fa-ban"></i>
                <span>Cancellations must be made 24 hours in advance.</span>
              </p>

              <h3>Contact Information</h3>
              <p>
                <i className="fas fa-phone"></i>
                <span>Phone: (+48) 514510659</span>
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                <span>Email: tinocotripa@gmail.com</span>
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                <span>Address: Ul.Rudawa gaj, Poland</span>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Loja;
