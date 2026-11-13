const notes = [12, 15, 8, 18, 10, 20];

console.log("Nombre de notes :", notes.length);

let somme = 0;

for (const note of notes) {
    somme += note;
}

const moyenne = somme / notes.length;

console.log("La moyenne est :", moyenne);


function mention(moyenne) {

    if (moyenne >= 16) {
        return "Très bien";
    } 
    else if (moyenne >= 14) {
        return "Bien";
    } 
    else if (moyenne >= 10) {
        return "Passable";
    } 
    else {
        return "Insuffisant";
    }
}

console.log("Mention :", mention(moyenne));

const notesAdmis = notes.filter(note => note >= 10);

console.log("Notes >= 10 :", notesAdmis);


const etudiants = [
    { nom: "Ahmed", note: 12 },
    { nom: "Taha", note: 15 },
    { nom: "Youssef", note: 8 },
    { nom: "Mohamed", note: 20 },
    { nom: "Amine", note: 10 }
];


for (const etudiant of etudiants) {
    console.log(`${etudiant.nom} a obtenu ${etudiant.note}/20`);
}


const premier20 = etudiants.find(etudiant => etudiant.note === 20);

console.log("Premier étudiant avec 20 :", premier20);


const resultatJSON = JSON.stringify(etudiants);

console.log("Résultat JSON :", resultatJSON);
