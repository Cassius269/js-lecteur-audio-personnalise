// On recupère tous les élements nécessaires
let audio = document.querySelector("audio");
let track = document.querySelector("#track");
let elapsed = document.querySelector("#elapsed");
let trackFullTime = document.querySelector("#track-fullTime");
let buttonPlay = document.querySelector("#buttonPlay");
let divButtons = document.querySelector(".lecteurAudioWithButtons")
//let buttonPause = document.querySelector("#buttonPause");
//let buttonStop = document.querySelector("#buttonStop");
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

    if(!Number.isInteger(minutes)){// Dans le cas où la piste a une durée avec des secondes
        // Récuperer les secondes dans la durée
        secondes = (minutes - Math.trunc(minutes))*60;

        // Récuperer les parties entières des unités de temps en minutees et secondes
        secondes = Math.trunc(secondes);
        minutes = Math.trunc(minutes);
    }

    return `/ ${minutes}:${secondes<10 ? "0"+secondes : secondes}`
}

buildDuration(duration);


trackFullTime.textContent = buildDuration(duration);


// Gerer les boutons 

let isButtonPlay = true;

divButtons.addEventListener("click", (event)=>{
    //console.log(event.target);

    if(event.target.nodeName == "IMG"){
        if(isButtonPlay){
            console.log("c'est le bounton play");
            event.target.setAttribute("src", "assets/images/media-pause.svg")
            event.target.setAttribute("alt", "icône représentant le bouton pause")
            audio.play();
            isButtonPlay = false;
        }else {
            console.log("c'est le bouton pause");
            event.target.setAttribute("src", "assets/images/play-circle.svg")
            event.target.setAttribute("alt", "icône représentant le bouton play")
            audio.pause();
            isButtonPlay = true;
        }
    }
})