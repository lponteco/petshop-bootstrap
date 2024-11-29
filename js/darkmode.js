document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}