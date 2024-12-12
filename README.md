# version-3-

project-root/
│
├── backend/
│   ├── app.js          // Código principal del servidor Express
│   ├── db.js           // Configuración de la conexión a la base de datos
│   └── routes/
│       ├── auth.js     // Rutas relacionadas con la autenticación
│       ├── upload.js   // Rutas relacionadas con la carga de archivos
│
├── frontend/
│   ├── index.html      // Página principal de la aplicación
│   ├── styles.css      // Estilos para el frontend
│   ├── script.js       // Lógica del frontend
│
├── uploads/            // Carpeta para almacenar archivos subidos (generada dinámicamente)
│
├── package.json        // Dependencias y configuración del proyecto
├── package-lock.json   // Detalles de las dependencias instaladas
└── README.md           // Instrucciones para la implementación y uso del proyecto


Explicación de los archivos
backend/app.js
El archivo principal del backend, donde se configura el servidor Express y se registran las rutas principales.

backend/db.js
Contiene la lógica para conectar y configurar la base de datos MySQL.

backend/routes/auth.js
Maneja las rutas relacionadas con el inicio de sesión y la verificación de usuarios.

backend/routes/upload.js
Maneja la lógica de carga y procesamiento de archivos.

frontend/index.html
El archivo HTML para la interfaz del usuario.

frontend/styles.css
Los estilos CSS para dar formato y diseño a la interfaz.

frontend/script.js
Contiene la lógica del frontend, como el manejo del formulario de inicio de sesión y la interacción con los gráficos.

uploads/
Carpeta donde se almacenan temporalmente los archivos subidos por los tutores antes de procesarlos.
