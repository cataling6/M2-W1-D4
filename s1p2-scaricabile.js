/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
 string - tipo di dato che può contenere qualsiasi carattere purchè racchiusi tra ",' o `
 number - tipo di dato che può contenere solamente valori numerici (interi o no, positivi o negativi)
 boolean - tipo di dato che può assumere 2 stati: vero o falso; viene usato per appunto determinare se un'istruzione è vera o meno ai fini di ottenere 2 diverse casistiche 
           da gestire a seconda del risultato (se vero fai una cosa se falso un'altra - tipico degli if - else)
 null   - tipo di dato che contiene il nulla; come se esistesse una ciotola(variabile) vuota (tipo) sul tavolo
 undefined - tipo di dato non dichiarato / definito ; una ciotola (variabile) esiste ma non si sa dove 
 BigInt - tipo di dato usato per definire numeri esagerati
 Symbol - non mi è tanto chiaro
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* un oggetto è un raccoglitore di informazioni atte appunto ad identificare l'oggetto stesso; ad esempio, l'oggetto è composto dalle proprietà quindi se pensiamo all'oggetto penna 
del mondo reale, astraendo la penna possiamo scomporla in: inchiostro, materiale, colore, peso, marca; queste proprietà/ attributi compongono il nostro oggetto */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* 
let a = 12
let b = 20
let somma = a + b
console.log(somma)
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12*/

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let name = "Catalin" */


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 
let sottrazione = 4 - x
console.log(sottrazione)
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* let name1 = "john"
let name2 = "John"

console.log(name1 === name2)
console.log(name1 === name2.toLowerCase());
 */


