const domJour = document.getElementById('jour');
const domHM = document.getElementById('heureMinute');
const domSecondes = document.getElementById('secondes');
const domDate = document.getElementById('date');

const jourSemaine = ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"];

function refresh() {
    const now = new Date();

    const jour = jourSemaine[now.getDay()]; // jour = index de l'array

    //récupération des autres valeurs
    const heures = now.getHours();
    const minutes = now.getMinutes();
    const secondes = now.getSeconds();


    const jourNB = now.getDate(); // jour du mois et non de la semaine
    const mois = now.getMonth() + 1; // pourquoi ca commence à 0?? js!!???
    const an = now.getFullYear();

    //formatage avec un 0 devant merci internet...
    const hMStr = `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    const secondesStr = `${secondes.toString().padStart(2, '0')}`;

    const dateStr = `${jourNB.toString().padStart(2, '0')}/${mois.toString().padStart(2, '0')}/${an.toString()}`;

    //écriture ds le DOM
    domJour.innerText = jour;
    domHM.innerText = hMStr;
    domSecondes.innerText = secondesStr;
    domDate.innerText = dateStr;
}

refresh();
setInterval(refresh, 1000); //se rappelle tt les 1s