import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pool from "./db.js";

const app = express();
const PORT = 3000;
// configuracoes do express
app.use(cors());
app.use(express.json());

// post route to handle form submission
app.post("/enviar-formulario", async (req, res) => {
  // extract form data from request body
  const { name, adress, date, time, hasBall, message, email, phone } = req.body;
  // insert form data into the database
  try {
    const queryText =
      "INSERT INTO formulario_contato (nome, email, endereco, data_evento, hora_evento, tem_bola, mensagem) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const values = [
      name,
      email || null,
      adress || null,
      date || null,
      time || null,
      hasBall || null,
      message || null,
    ];
    const result = await pool.query(queryText, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Database insert error", error.stack);
    res.status(500).json({ error: "Database insert failed" });
  }
});

app.post("/formulario/:id/participante", async (req, res) => {
  const { id } = req.params;
  const { name, availability } = req.body;
  try {
    const queryText = `
      insert into participantes (nome_participante, formulario_id, disponibilidade) values ($1, $2, $3) returning *
    `;
    const values = [name, id, availability];
    const result = await pool.query(queryText, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Database update error", error.stack);
    res.status(500).json({ error: "Database update failed" });
  }
});

app.get("/formulario", async (req, res) => {
  try {
    const queryText = `SELECT 
        formulario_contato.id,
        formulario_contato.nome AS name, 
        formulario_contato.email AS email, 
        formulario_contato.endereco AS adress, 
        formulario_contato.data_evento AS date, 
        formulario_contato.hora_evento AS time, 
        formulario_contato.tem_bola AS "hasBall", 
        formulario_contato.mensagem AS message ,
        coalesce(json_agg(json_build_object('name', participantes.nome_participante, 'availability', participantes.disponibilidade)) FILTER (WHERE participantes.nome_participante IS NOT NULL), '[]') AS participants 
       FROM formulario_contato
       left join participantes on formulario_contato.id = participantes.formulario_id
       group by formulario_contato.id
       order by formulario_contato.id desc`;
    const result = await pool.query(queryText);
    res.json(result.rows);
  } catch (error) {
    console.error("Database query error", error.stack);
    res.status(500).json({ error: "Database query failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
