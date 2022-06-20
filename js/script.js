/* Chiedi all’utente il suo nome
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21


/* 1. creare una variabile per contenere il nome dell'utente e chiedere all'utente il proprio nome */
const nome = prompt(`Qual è il tuo nome?`)
console.log(nome);

/* 2. creare una variabile per contenere il cognome dell'utente e chiedere all'utente il proprio cognome */
const surname = prompt (`Qual è il tuo cognome?`)
console.log(surname);

/* 3a. creare una variabile per contenere il colore preferito dell'utente e chidere il colore all'utente */
const color = prompt(`Qual è il tuo colore preferito`)
console.log(color);

/* 4. recupero l'elemento in pagina che dovrò modificare*/
const resultpassword = document.getElementById(`password`)
console.log(resultpassword);

/* 5. Genero password */
const password = nome + surname + color + "21"
console.log(password);

/* 6. inserisco il risulatato da stampare*/
const result = "La tua password è: <strong>" + password + '</strong>'
console.log(result);

/* 7. inserisco il risulatato nel paragrafo*/
resultpassword.innerHTML = result
console.log(resultpassword);


