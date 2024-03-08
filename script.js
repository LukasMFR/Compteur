// Service Worker
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

function adjustScrolling() {
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;
    console.log('isLandscape', isLandscape);
    const padding = 20; // Additional padding to consider.

    // Total height required by the content plus padding.
    const requiredHeight = document.documentElement.scrollHeight + padding;
    // Current viewport height.
    const viewportHeight = window.innerHeight;

    // Determine if scrolling should be enabled based on content height and orientation.
    // if ((isLandscape && requiredHeight > viewportHeight) || !isLandscape) {
    if (isLandscape) {
        // Enable scrolling for landscape orientation if content exceeds viewport height,
        // or in portrait orientation regardless of content height.
        document.documentElement.style.overflowY = 'auto'
    } else {
        // Disable scrolling if conditions are not met.
        document.documentElement.style.overflowY = 'hidden';
    }
}

// React to changes in orientation and resize.
window.addEventListener('resize', adjustScrolling);
window.addEventListener('orientationchange', adjustScrolling);

// Initial adjustment.
adjustScrolling();

console.log('script.js loaded');