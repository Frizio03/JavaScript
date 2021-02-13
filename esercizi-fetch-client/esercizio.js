//variabili e require
const IP = "http://192.168.178.47:8080"
const f = require("./fetch-funct.js")

//Esercizi

const Es1 = (nes) => {
    let soluzione = null
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            soluzione = data.toLowerCase(),

            f.tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es2 = (nes) => {
    let soluzione = null
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            soluzione = data*data

            f.tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es3 = (nes) => {
    let soluzione = null
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            soluzione = data["cognome"]

            f.tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es4 = (nes) => {
    let soluzione = null
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            soluzione = data.length
            console.log(soluzione)
            f.tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es5 = (nes) => {
    let soluzione = [];
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            data.forEach((el) => {soluzione.push(el.toUpperCase())})
            console.log(soluzione)
            f.tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es6 = (nes) => {
    let soluzione = null
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            soluzione = data.reduce((acc, el) => {return acc+el}, 0)
            console.log(soluzione)
            f.tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es7 = (nes) => {
    let v = [];
    let soluzione = 0
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            v = data.filter((elemento) => {
                if (elemento > 5)
                    return true
                else 
                    return false
                })
            soluzione = v.reduce((acc, el) => {return acc+el}, 0)
            console.log(soluzione)
            f.tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es8 = (nes) => {
    let v = [];
    let soluzione = 0
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            v = data.filter((elemento, indice) => {
                if (indice%2 === 0)
                    return true
                else 
                    return false
                })
            soluzione = v.reduce((acc, el) => {return acc+el}, 0)
            console.log(soluzione)
            f.tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es9 = (nes) => {
    let v = [];
    let soluzione = 0
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            v = data.filter((elemento) => {
                if (elemento%2 !== 0)
                    return true
                else 
                    return false
                })
            soluzione = v.reduce((acc, el) => {return acc+el}, 0)
            console.log(soluzione)
            f.tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es10 = (nes) => {
    let soluzione = null
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            soluzione = data.sort()
            console.log(soluzione)
            f.tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}
//Esporto funzioni
module.exports.Es1 = Es1
module.exports.Es2 = Es2
module.exports.Es3 = Es3
module.exports.Es4 = Es4
module.exports.Es5 = Es5
module.exports.Es6 = Es6
module.exports.Es7 = Es7
module.exports.Es8 = Es8
module.exports.Es9 = Es9
module.exports.Es10 = Es10