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
