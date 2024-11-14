let suggerimento = document.getElementById('suggerimento');
let feedback = document.getElementById('feedback');
let difficoltà = document.getElementById('difficoltà');
let personaggi = [
    {nome: "saetta", difficoltà: "facile", citazioni: ["Ag la fag da per me!", "hei! io so dov'è l'autostrada", "Non si corre solamente per ottenere la vittoria", "Tu vai da 0 a 100 in quanto? 3 anni virgola 5?", "Quello che vedo è un piccolo tatuaggio a righine sottili?"]},
    {nome: "sally", difficoltà: "facile", citazioni: ["Voi auto da corsa un giretto non lo fate mai?", "Allora il bello non era arrivare, il bello era viaggiare."]},
    {nome: "cricchetto", difficoltà: "facile", citazioni: ["Si signore!", "I trattori sono grandissimi citrulli", "Secondo me lo sapeva che uscivi di pista!", "Certo ce l'ho incorporato. Perchè?", "Caspita, allora sono un avvocato super!", "io sono bello e impossibile!", "Che sbudellio!", "Doc è figlio di un Pick-Up?!?", "Ehi, se te lo chiedono, noi eravamo in giro a spaccare cassette delle lettere!"]},
    {nome: "luigi", difficoltà: "facile", citazioni: ["Quella pazza diabolica di una donna", "Guido, guarda Luigi!", "La bandiera... del via... ricordi?", "1 per i soldi, 2 per lo show, 3 per prepararsi e 4 per... non ci posso credere... VIA!!", "Mi zampillano lacrime di gioia dal tergi vetro!"]},
    {nome: "guido", difficoltà: "Molto Facile", citazioni: ["At piès eh? l'è belìsim"]},
    {nome: "flo", difficoltà: "media", citazioni: ["Non ti vedevo con gli ammortizzatori così rilassati da anni", "Benzina e gas, sono piena di gas."]},
    {nome: "doc", difficoltà: "media", citazioni: ["Ehi... Eri elegante come una berlina o eri scattante come un go-kart? Non mi ricordo", "Conosco il tipo. Auto da corsa. La città non ne ha bisogno", "Quando mai ti sei preoccupato di qualcuno che non fossi tu", ]},
    {nome: "lizzie", difficoltà: "Molto difficile", citazioni: ["Se continui a parlare al vento la gente penserà che dai i numeri!", "Luigi con la strada nuova il tuo negozio sembra una discarica", "COSA??", "Una cosina per ricordarvi di noi"]},
    {nome: "ramone", difficoltà: "media", citazioni: ["Pensava che Dov fosse una famosa auto da corsa", "Vogliamo planare?", "Fìcore! Hai sentito che roba?"]},
    {nome: "fillmore", difficoltà: "media", citazioni: ["Rispetta i classici amico", ]},
    {nome: "sergente", difficoltà: "media", citazioni: ["È dal '68, che sei fuori come un paraurti!"]},
    {nome: "sceriffo", difficoltà: "media", citazioni: ["Grazie Doc, sentivo un buco al blocco motore!", "Nella mia città, non si corre!"]},
];
let sceltaPersonaggio = Math.floor(Math.random() * personaggi.length);
let personaggioSelezionato = personaggi[sceltaPersonaggio];
let reloadBtn = document.getElementById('giocaAncora');

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
        console.log(dropdownNames.value);
        reloadBtn.style.opacity = 1;
    }
    else
    {
        feedback.style.opacity = 1;
        feedback.innerText = "Riprova";
        suggerimento.innerText = personaggioSelezionato.citazioni[Math.floor(Math.random() * personaggioSelezionato.citazioni.length)];
        console.log(dropdownNames.value)
    }
}

function playAgain(){
    location.reload()
}