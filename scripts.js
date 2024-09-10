// scripts.js
// scripts.js
function updateEmail() {
    const newEmail = document.getElementById('userEmail').value;
    localStorage.setItem('userEmail', newEmail);
    alert('Correo actualizado con éxito');
}

function updatePassword() {
    const newPassword = document.getElementById('newPassword').value;
    localStorage.setItem('password', newPassword);
    alert('Contraseña actualizada con éxito');
}

function viewAccessHistory() {
    // Aquí puedes añadir la lógica para mostrar el historial de accesos
    alert('Mostrando historial de accesos...');
}

// Mostrar información del usuario al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('userEmail');
    document.getElementById('userNameDisplay').textContent = storedUsername;
    document.getElementById('userEmail').value = storedEmail || '';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Usuario registrado con éxito');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        document.getElementById('userInfo').style.display = 'block';
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});
