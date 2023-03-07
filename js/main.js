 /*
    1. visualizzare in pagina 5 numeri casuali
    2. parte un timer di 30 secondi
    3. appiono 5 prompt che chiedono all'utente i numeri che sono apparsi
    4. dopo averli inseriti il computer mostra quanti e quali numeri sono stati indovinati
*/

 // seleziono i contenitori per i numeri e per il risultato
 let numCont = document.getElementById('cont');
 let numRes = document.getElementById('res');

 //genero 5 numeri casuali

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

  setTimeout(funzioneDaRichiamare, 30000);

function funzioneDaRichiamare(){
    let userList=[];
    // nascondo i numeri generati dal pc
    numCont.classList.add('nascondi');
   
     for (let i = 0; i < 5; i++){
        
        let userNum = parseInt(prompt('Inserisci un numero che ricordi.'));
        if(numbers.includes(userNum)){
            userList.push(userNum)
         }

     } 
     console.log(userList);

     numRes.innerHTML= userList;

     if (userList == 0){
        numRes.innerHTML = `<h2>Non hai indovinato nessun numero!</h2>`;
     }else{
        numRes.innerHTML=userList;
     }
}
