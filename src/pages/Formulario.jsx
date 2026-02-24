import React, { useState } from "react";
import styles from "../style/styleAngola.module.css";

function DynamicForm({ servicoAtivo, setShowForm, showData }) {
  const isFutebol = servicoAtivo?.toLowerCase() === "Football Matches";

  const [formData, setFormData] = React.useState({
    name: "",
    adress: "",
    message: "",
    notes: "",
    date: "",
    time: "",
    hasBall: "",
    email: "",
    phone: "",
  });

  const hnadleCreateGame = (e) => {
    const { id, value, type } = e.target;
    const targetKey = type === "radio" ? "hasBall" : id;
    setFormData((prevData) => ({
      ...prevData,
      [targetKey]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let dataToSend = {
      serviceType: servicoAtivo,
      name: formData.name,
    };
    if (isFutebol) {
      dataToSend = {
        ...dataToSend,
        adress: formData.adress,
        date: formData.date,
        time: formData.time,
        hasBall: formData.hasBall,
        message: formData.notes,
      };
    } else {
      dataToSend = {
        ...dataToSend,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };
    }

    try {
      const response = await fetch("http://localhost:3000/enviar-formulario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      if (response.ok) {
        alert("Form submitted successfully!");

        showData({ ...dataToSend, id: Date.now() });

        setShowForm(false);
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className={styles.containerForm}>
      <div>
        <h2>{isFutebol ? "Organize New Game" : "Request Assistance"}</h2>
        <p>
          Selected service:
          <strong style={{ color: "red" }}> {servicoAtivo}</strong>
        </p>

        <button onClick={() => setShowForm(false)}>
          <i className={"fa-solid fa-xmark " + styles.closeIcon}></i>
        </button>
      </div>

      <form className={styles.formFotebol} onSubmit={handleSubmit}>
        <div className={styles.formName}>
          <label htmlFor="name" className={styles.labelIcon}>
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your full name"
            required
            value={formData.name}
            onChange={hnadleCreateGame}
          />
        </div>

        {isFutebol && (
          <>
            <div className={styles.formName}>
              <label htmlFor="address" className={styles.labelIcon}>
                <i className="fa-solid fa-location-dot"></i>
                <span>Field Address </span>
              </label>
              <input
                type="text"
                id="adress"
                placeholder="Street, number, city"
                required
                value={formData.adress}
                onChange={hnadleCreateGame}
              />
            </div>

            <div>
              <div className={styles.formName}>
                <label htmlFor="date" className={styles.labelIcon}>
                  <i className="fa-solid fa-calendar-days"></i>{" "}
                  <span>Date </span>
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  value={formData.date}
                  onChange={hnadleCreateGame}
                />
              </div>
              <div className={styles.formName}>
                <label htmlFor="time" className={styles.labelIcon}>
                  <i className="fa-solid fa-clock"></i> <span>Time </span>
                </label>
                <input
                  type="time"
                  id="time"
                  required
                  value={formData.time}
                  onChange={hnadleCreateGame}
                />
              </div>
            </div>

            <div className={styles.radioGroup}>
              <p>Do you have a ball available?</p>

              <label>
                <input
                  type="radio"
                  name="temBola"
                  value="Sim"
                  onChange={hnadleCreateGame}
                  checked={formData.hasBall === "Sim"}
                />
                Yes, I have a ball
              </label>

              <label>
                <input
                  type="radio"
                  name="temBola"
                  value="Alguem"
                  onChange={hnadleCreateGame}
                  checked={formData.hasBall === "Alguem"}
                />
                No, but someone can bring one
              </label>
            </div>
          </>
        )}

        {!isFutebol && (
          <>
            <div className={styles.formName}>
              <label htmlFor="email">Email </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={hnadleCreateGame}
              />
            </div>
            <div className={styles.formName}>
              <label htmlFor="tel">Phone </label>
              <input
                type="tel"
                id="phone"
                placeholder="+1 123 456 789"
                required
                value={formData.phone}
                onChange={hnadleCreateGame}
              />
            </div>

            <div className={styles.textareaGroup}>
              <label htmlFor="message">How can we help? </label>
              <textarea
                id="message"
                placeholder="Describe your need..."
                required
                rows="4"
                value={formData.message}
                onChange={hnadleCreateGame}
              ></textarea>
            </div>
          </>
        )}

        {isFutebol && (
          <div className={styles.textareaGroup}>
            <label htmlFor="notes">Notes / Additional Information</label>
            <input
              type="text"
              id="notes"
              placeholder="Ex: Contribution amount..."
              value={formData.notes}
              onChange={hnadleCreateGame}
            />
          </div>
        )}

        <button className={styles.btnGame}>
          {isFutebol ? "Create Game 🚀" : "Send Request 📩"}
        </button>
      </form>
    </div>
  );
}

export default DynamicForm;
