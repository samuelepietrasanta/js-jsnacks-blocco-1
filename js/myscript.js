/** SNACK 1
 * 
 * 
 * 
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
 */




/*
QUELLO CON FOR
*/


let somma = 0
for (i = 0 ; i < 5 ; i++){
    let numeroUtente = parseInt(prompt("Inserisci un numero"));
    somma = somma + numeroUtente;
}

document.write("la somma dei numeri scelti è : " + somma)



/* CON WHILE */

let j = 0;
let somma = 0;
while (j <5){
    let numeroUtente = parseInt(prompt("inserisci un numero") );
    document.write(numeroUtente + " ");
 
    somma = somma + numeroUtente;

    j++
}

document.write("  La somma dei numeri scelti è : " + somma)



/** SNACK 2
 * 
 * Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e 
 * una lista di cognomi, Gatsby vuole generare una falsa lista di 8 invitati.
 * Stampiamo la lista in modo ordinato in html come elementi <li> figli di un unico <ul>.
 * 
 */

let listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];

let listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];

let myList = [];

for (i = 0 ; i < 8 ; i++){
    posizioneNome = Math.floor(Math.random() * listaNomi.length);
    posizioneCognome = Math.floor(Math.random() * listaCognomi.length);
    nomeIntero = listaNomi[posizioneNome] + " " + listaCognomi[posizioneCognome];
    myList.push(nomeIntero);

    document.getElementById("lamialista"). innerHTML += '<li>' + nomeIntero + '</li>';

}


console.log(myList);

console.log(myList[2]);


/**
 * 
 * SNACK 3
 * 
 * 
 *  A)
 *   Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
 *   Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
 *   tanti quanti l'altro.
 * 
 *  B)
 *  Mostriamo in HTML le due liste in parallelo
 */


 let listaLunga = ['cane' , 'gatto' , 'lupo' , ' gorilla' , 'tartaruga' , ' piccione', 'gallina' , 'serpente' , 'cavallo', ' bambi'];
 let listaCorta = ['blu' , 'verde' , 'rosso','giallo', 'nero' , 'bianco'];
 
 
 
 
 for (let i = 0 ; i < listaLunga.length; i++){
 
     let parolaACaso = (Math.random() + 1).toString(36).substring(7);
 
     if (listaCorta.length < listaLunga.length){
         listaCorta.push(parolaACaso)
     }
 
     document.getElementById('lamialista1').innerHTML += '<li>' + listaLunga[i] + '</li>'
     document.getElementById('lamialista2').innerHTML += '<li>' + listaCorta[i] + '</li>'
 
 
 }
 
 let listaAddizionata = listaLunga + listaCorta;
 
 for (i = 0; i<listaAddizionata.length; i++){
     if (listaAddizionata[i] % 3 == 0  ||  listaAddizionata[i] % 4 == 0){
         
     }
 }
 
 console.log(listaAddizionata);