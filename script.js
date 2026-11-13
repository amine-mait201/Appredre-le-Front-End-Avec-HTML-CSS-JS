const bot = {
    nom: "Nova",
    statut: "En ligne",

    presenter: function() {
        return "Bonjour, je suis " + this.nom;
    }
};

console.log(bot.presenter());

const reponses = [
    {
        motCle: "tarif",
        texte: "Nous proposons les formules Starter, Pro et Entreprise."
    },
    {
        motCle: "formule",
        texte: "Nos formules sont Starter, Pro et Entreprise."
    },
    {
        motCle: "prix",
        texte: "Nos tarifs dépendent de la formule choisie."
    },
    {
        motCle: "installation",
        texte: "Suivez notre guide d'installation étape par étape."
    },
    {
        motCle: "widget",
        texte: "Le widget peut être intégré dans votre site web."
    },
    {
        motCle: "aide",
        texte: "Bien sûr ! Je suis là pour vous aider."
    },
    {
        motCle: "bonjour",
        texte: "Bonjour ! Comment puis-je vous aider ?"
    },
    {
        motCle: "merci",
        texte: "Avec plaisir !"
    },
    {
        motCle: "contact",
        texte: "Consultez notre page Contact."
    }
];


function repondre(message) {

    message = message.toLowerCase();

    const resultat = reponses.find(function(reponse) {
        return message.includes(reponse.motCle);
    });

    if (resultat) {
        return resultat.texte;
    } else {
        return "Désolé, je n'ai pas compris votre question.";
    }
}


console.log(repondre("Bonjour"));
console.log(repondre("Quels sont vos tarifs ?"));
console.log(repondre("Je veux connaître vos formules."));
console.log(repondre("Comment faire l'installation ?"));
console.log(repondre("Quelle est la météo ?"));


const formulaire = document.querySelector(".saisie");
const champ = document.querySelector(".saisie input");
const messages = document.querySelector(".messages");



function ajouterMessage(texte, type) {

    const nouveauMessage = document.createElement("div");

    nouveauMessage.classList.add("message", type);

    nouveauMessage.textContent = texte;

    messages.appendChild(nouveauMessage);
}


formulaire.addEventListener("submit", function(event) {

    event.preventDefault();

    const message = champ.value.trim();

    if (message === "") {
        return;
    }


    ajouterMessage(message, "user");

    champ.value = "";



    const reponse = repondre(message);

    ajouterMessage(reponse, "bot");

});
