// === Archivo: backend/routes/upload.js ===
const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Configuración para almacenar archivos subidos
const upload = multer({ dest: 'uploads/' });

// Endpoint para subir archivos
router.post('/', upload.single('file'), (req, res) => {
    const filePath = path.join(__dirname, '../../', req.file.path);
    res.json({ message: 'Archivo subido exitosamente', filePath });

    // Aquí se puede procesar el archivo y cargar los datos en la base de datos
});

module.exports = router;
