

// inizio esercizio di oggi


// dichiarazione variabile
let name ;


// comando usato per interfaccia con utente ed associazione a variabile scritta in blu
name = prompt ("quale è il tuo nome?")

// comando che ci permette tramite l'inspector di vedere il valore salvato nella variabile
console.log(name);


// dichiarazione variabile
let cognome;


// comando usato per interfaccia con utente ed associazione a variabile scritta in blu
cognome = prompt ("quale è il tuo cognome?")

// comando che ci permette tramite l'inspector di vedere il valore salvato nella variabile
console.log(cognome);

// dichiarazione variabile
let colore;

// comando usato per interfaccia con utente ed associazione a variabile scritta in blu
colore = prompt ("quale è il tuo colore preferito?")

// comando che ci permette tramite l'inspector di vedere il valore salvato nella variabile
console.log(colore);



// coamndo usato per dichiarazione a schermo 
document.getElementById("title").innerHTML = `Questa è la tua password poco sicura ${name}${cognome}${colore}${666} !!!!`;

// fine