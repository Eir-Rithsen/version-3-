// === Archivo:  ===
const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const legajo = document.getElementById('legajo').value;

    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, legajo })
    });

    const result = await response.json();
    if (response.ok) {
        alert('Login exitoso');
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('charts-container').style.display = 'block';
        // Añadir lógica para mostrar gráficos con datos recibidos
    } else {
        alert('Error: ' + result.error);
    }
});
