// === Archivo: backend/routes/auth.js ===
const express = require('express');
const db = require('../db');
const router = express.Router();

// Endpoint para el inicio de sesión
router.post('/login', (req, res) => {
    const { nombre, legajo } = req.body;
    const query = 'SELECT * FROM students WHERE nombre = ? AND legajo = ?';

    db.query(query, [nombre, legajo], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al consultar la base de datos' });
        }
        if (results.length > 0) {
            res.json({ message: 'Login exitoso', student: results[0] });
        } else {
            res.status(401).json({ error: 'Credenciales inválidas' });
        }
    });
});

module.exports = router;
