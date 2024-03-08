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

// Code to register the service worker for your PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // Registration failed
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
