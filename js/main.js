 /*
    1. visualizzare in pagina 5 numeri casuali
    2. parte un timer di 30 secondi
    3. appiono 5 prompt che chiedono all'utente i numeri che sono apparsi
    4. dopo averli inseriti il computer mostra quanti e quali numeri sono stati indovinati
*/

 // seleziono i contenitori per i numeri e per il risultato
 let numCont = document.getElementById('cont');
 let numRes = document.getElementById('res');

 //genero 5numeri casuali
 
  let numbers = [];
   while (numbers.length < 5){
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (!numbers.includes(randomNumber)){
        numbers.push(randomNumber);
    }
    
   }
console.log(numbers);

//stampo i numeri casuali in pagina
numCont.innerHTML= numbers;