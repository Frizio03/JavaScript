Object.defineProperty(exports, '__esModule', { value: true });

export function Es1(nes) {
    let soluzione = null
    richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            soluzione = data.toLowerCase(),

            tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

export function Es2(nes) {
    let soluzione = null
    richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            soluzione = data*data

            tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

export function sayHi(user) {
    alert(`Hello, ${user}!`);
  }