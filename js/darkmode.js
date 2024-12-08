function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Guardamos la preferencia del usuario en localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
}

// Verificar la preferencia del usuario al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    const darkModePreference = localStorage.getItem('dark-mode');
    
    // Si la preferencia está guardada como 'enabled', activamos el dark mode
    if (darkModePreference === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});

document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);