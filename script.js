// Service Worker registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

document.querySelectorAll('.bouton-compteur').forEach(bouton => {
    bouton.addEventListener('click', function() {
        const modificateur = parseInt(this.getAttribute('data-modificateur'), 10);
        const valeurActuelle = parseInt(document.getElementById('valeur-compteur').innerText, 10);
        document.getElementById('valeur-compteur').innerText = valeurActuelle + modificateur;
    });
});

document.getElementById('reinitialiser').addEventListener('click', function() {
    document.getElementById('valeur-compteur').innerText = '0';
});
