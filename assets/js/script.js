// On recupère tous les élements nécessaires
let audio = document.querySelector("audio");
let track = document.querySelector("#track");
let elapsed = document.querySelector("#elapsed");
let trackFullTime = document.querySelector("#track-fullTime");
let buttonPlay = document.querySelector("#buttonPlay");
let buttonPause = document.querySelector("#buttonPause");
let buttonStop = document.querySelector("#buttonStop");
let volume = document.querySelector("#volume");
let volumeValue = document.querySelector("#volume-value");

// on récupère la durée du MP3
let duration = audio.duration;

console.log(`durée de la piste musicale : ${duration} secondes`);

// Créer une fonction qui récupère les minutes et les secondes de la piste de musique
function buildDuration(duration){
    // Recupérer les minutes
    minutes = duration/60;
    secondes = 0; // Déclarer par défaut les secondes à 0

    if(Number.isInteger(minutes)){// Dans le cas où la piste n'a que des minutes entères
        return minutes;
    }else {// Dans le cas où la piste a une durée en décimal
        // Récuperer les secondes dans la durée
        secondes = (minutes - Math.trunc(minutes))*60;

        // Tronquer les parties décimales
        secondes = Math.trunc(secondes);
        minutes = Math.trunc(minutes);
    }

    return `/ ${minutes}:${secondes}`
}

buildDuration(duration);


trackFullTime.textContent = buildDuration(duration);


// Jouer la piste
