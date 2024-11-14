let suggerimento = document.getElementById('suggerimento');
let feedback = document.getElementById('feedback');
let difficoltà = document.getElementById('difficoltà');

let personaggi = [
    {nome: "saetta", difficoltà: "", citazioni: ["saetta"]},
    {nome: "storm", difficoltà: "", citazioni: ["Sono sicuro che per te arriveranno tanti altri insuccessi",]},
    {nome: "ramirez", difficoltà: "", citazioni: ["ramres"]},
    {nome: "hicks", difficoltà: "", citazioni: ["L'esordiente Jackson Storm ha letteralmente sverniciato Saetta McQueen",]},
    {nome: "fritter", difficoltà: "", citazioni: ["friter"]},
    {nome: "smokey", difficoltà: "", citazioni: ["smoke"]},
    {nome: "mack", difficoltà: "", citazioni: ["mac"]},
    {nome: "cartrip", difficoltà: "", citazioni: ["cartript"]},
    {nome: "cutlass", difficoltà: "", citazioni: ["cutlaass"]},
];



let sceltaPersonaggio = Math.floor(Math.random() * personaggi.length);
let personaggioSelezionato = personaggi[sceltaPersonaggio];
let reloadBtn = document.getElementById('giocaAncora');

console.log(personaggioSelezionato.nome);

let dropdownNames = document.getElementById('dropdownNames')


console.log(dropdownNames.value);

reloadBtn.style.opacity = 0;
feedback.style.opacity = 0;

suggerimento.innerText = personaggioSelezionato.citazioni[Math.floor(Math.random() * personaggioSelezionato.citazioni.length)];

difficoltà.innerText = personaggioSelezionato.difficoltà;

console.log(personaggioSelezionato.nome);

function tentativoCheck(){
    if (dropdownNames.value === personaggioSelezionato.nome){
        feedback.style.opacity = 1;
        feedback.innerText = "Indovinato!";
        console.log(dropdownNames.value + " if");
        reloadBtn.style.opacity = 1;
    }
    else
    {   
        feedback.style.opacity = 1;
        feedback.innerText = "Riprova";
        console.log(feedback.value);
        suggerimento.innerText = personaggioSelezionato.citazioni[Math.floor(Math.random() * personaggioSelezionato.citazioni.length)];
        console.log(dropdownNames.value + " else");
    }
};

function playAgain(){
    location.reload()
}