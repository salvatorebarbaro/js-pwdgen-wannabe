

// inizio esercizio di oggi


// dichiarazione variabile
let name ;


// comando usato per interfaccia con utente ed associazione a variabile scritta in blu
name = prompt ("quale è il tuo nome?")


// dichiarazione variabile
let cognome;


// comando usato per interfaccia con utente ed associazione a variabile scritta in blu
cognome = prompt ("quale è il tuo cognome?")

// dichiarazione variabile
let colore;

// comando usato per interfaccia con utente ed associazione a variabile scritta in blu
colore = prompt ("quale è il tuo colore preferito?")

// coamndo usato per dichiarazione a schermo 
document.getElementById("title").innerHTML = `Questa è la tua password poco sicura ${name}${cognome}${colore}${666} !!!!`;

// fine