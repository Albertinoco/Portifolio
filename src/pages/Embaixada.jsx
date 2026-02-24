import React, { useEffect, useState } from "react";
import NavbarAngola from "../components/NavbarAngola.jsx";
import styles from "../style/styleAngola.module.css";
import FooterAngola from "../components/FooterAngola.jsx";
import CartsAngola from "./CartsAngola.jsx";
import DynamicForm from "./Formulario.jsx";

function Embaixada() {
  const [service, setService] = useState("AllCart");
  const [activeForm, setActiveForm] = useState(null);
  const [showAlldata, setShowAlldata] = useState([]);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [participantData, setParticipantData] = useState({
    name: "",
    availability: 50,
  });

  const getColor = (value) => {
    if (value < 40) return "#ff4d4d";
    if (value < 70) return "#ffbd44";
    return "#2ecc71";
  };

  async function handleParticipate() {
    if (!selectedGameId || !participantData.name) return;
    try {
      await fetch(
        `http://localhost:3000/formulario/${selectedGameId}/participante`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: participantData.name,
            availability: participantData.availability,
          }),
        },
      );

      const response = await fetch("http://localhost:3000/formulario");
      const data = await response.json();
      setShowAlldata(data);
      setSelectedGameId(null);
    } catch (error) {
      console.error("Error updating participation data:", error);
    }
  }

  useEffect(() => {
    fetch("http://localhost:3000/formulario")
      .then((response) => {
        if (!response.ok) throw new Error("Erro na rede");
        return response.json();
      })
      .then((data) => {
        setShowAlldata(Array.isArray(data) ? data : []);
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  function showData(newData) {
    setShowAlldata((prevData) => [...prevData, newData]);
  }

  return (
    <div className={styles.embaixadaBackground}>
      <NavbarAngola />
      <main>
        <section className={styles.section_embaixada1}>
          <video autoPlay loop muted className={styles.videoBackground}>
            <source src="/video/video_main.mp4" type="video/mp4" />
          </video>
          <div className={styles.video_overlay}></div>
          <h1 className={styles.mainText_embaixada}>
            Welcome to your
            <span className={styles.highlight}>home in Poland.</span>
          </h1>
          <p className={styles.subText_embaixada}>
            We offer comprehensive support for Angolans living or planning to
            live in Poland.
          </p>
          <div className={styles.a_embaixada}>
            <a className={styles.btn_services} href="#services">
              Our Services
            </a>
            <a className={styles.btn_contact} href="#contactUs">
              Contact Us
            </a>
          </div>
        </section>

        <section className={styles.section_embaixada2}>
          <div className={styles.services}>
            <h2 className={styles.services_title}>Our Services</h2>
            <div className={styles.btn_list} id="services">
              <button
                onClick={() => setService("AllCart")}
                className={styles.btn_all}
              >
                All services
              </button>
              <button
                onClick={() => setService("Football Matches")}
                className={styles.btnname}
              >
                Football Matches
              </button>
              <button
                onClick={() => setService("Legal Assistance")}
                className={styles.btnname}
              >
                Legal Assistance
              </button>
            </div>
            <CartsAngola
              service={service}
              aoAbrirFrom={(nameOFService) => setActiveForm(nameOFService)}
            />
          </div>
        </section>

        {activeForm && (
          <DynamicForm
            servicoAtivo={activeForm}
            setShowForm={setActiveForm}
            showData={showData}
          />
        )}

        <section className={styles.showDataSection}>
          {showAlldata.map((gameData, index) => {
            const isFutebol = gameData.serviceType === "Football Matches";

            return (
              <div key={gameData.id || index} className={styles.gameCard}>
                <h3 className={styles.showDataName}>
                  <span className={styles.serviceBadge}>
                    {gameData.serviceType}
                  </span>
                  <br />
                  Organizer: {gameData.name}
                </h3>

                {isFutebol ? (
                  <>
                    <div className={styles.infoGroup}>
                      <i className="fa-solid fa-location-dot"></i>
                      <p>Address: {gameData.adress}</p>
                    </div>
                    <div className={styles.infoGroup}>
                      <i className="fa-solid fa-calendar-days"></i>
                      <p>Date: {gameData.date}</p>
                    </div>
                    <div className={styles.infoGroup}>
                      <i className="fa-solid fa-clock"></i>
                      <p>Time: {gameData.time}</p>
                    </div>
                    <div className={styles.infoGroup}>
                      <i className="fa-solid fa-soccer-ball"></i>
                      <p>Has Ball: {gameData.hasBall}</p>
                    </div>
                    {gameData.message && (
                      <div className={styles.infoGroup}>
                        <i className="fa-solid fa-sticky-note"></i>
                        <p>Notes: {gameData.message}</p>
                      </div>
                    )}
                    {gameData.participants?.length > 0 && (
                      <div className={styles.participantsGroup}>
                        <h4>Participants:</h4>
                        {gameData.participants.map((p, pIdx) => (
                          <div key={pIdx} className={styles.participant}>
                            <strong>{p.name}</strong>
                            <span style={{ color: getColor(p.availability) }}>
                              {p.availability}%
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className={styles.infoGroup}>
                      <i className="fa-solid fa-envelope"></i>
                      <p>Email: {gameData.email}</p>
                    </div>
                    <div className={styles.infoGroup}>
                      <i className="fa-solid fa-phone"></i>
                      <p>Phone: {gameData.phone}</p>
                    </div>
                    <div className={styles.infoGroup}>
                      <i className="fa-solid fa-circle-info"></i>
                      <p>Details: {gameData.message}</p>
                    </div>
                  </>
                )}

                {isFutebol && (
                  <div className={styles.buttonWrapper}>
                    {gameData.id === selectedGameId ? (
                      <div className={styles.participationForm}>
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={participantData.name}
                          onChange={(e) =>
                            setParticipantData({
                              ...participantData,
                              name: e.target.value,
                            })
                          }
                        />
                        <div className={styles.rangeHeader}>
                          <span>Availability: </span>
                          <strong
                            style={{
                              color: getColor(participantData.availability),
                            }}
                          >
                            {participantData.availability}%
                          </strong>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="100"
                          step="10"
                          value={participantData.availability}
                          onChange={(e) =>
                            setParticipantData({
                              ...participantData,
                              availability: Number(e.target.value),
                            })
                          }
                        />
                        <button
                          className={styles.btnParticipar}
                          onClick={handleParticipate}
                        >
                          Confirm
                        </button>
                      </div>
                    ) : (
                      <button
                        className={styles.btnParticipar}
                        onClick={() => setSelectedGameId(gameData.id)}
                      >
                        Click to participate
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </main>
      <FooterAngola />
    </div>
  );
}

export default Embaixada;
