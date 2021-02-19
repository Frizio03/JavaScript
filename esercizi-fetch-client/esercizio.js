//variabili e require
const IP = "http://192.168.178.33:8080"
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

const Es11 = (nes) => {
    let soluzione = null
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            soluzione = data.map(e => e.toLowerCase())
            f.tentaEsercizio(IP, nes, soluzione.sort())
        })
        .catch(err => console.log(err))
}

const Es12 = (nes) => {
    let soluzione = null
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            soluzione = data.map(e => e -= 1)
            f.tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es13 = (nes) => {
    let soluzione = null
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            for(let i=0; i<data.length; i++){
                if(i !== (data.length-1)){
                    data[i] += data[i+1]
                }
            }
            f.tentaEsercizio(IP, nes, data)
        })
        .catch(err => console.log(err))
}

const Es14 = (nes) => {
    let soluzione = {positivi: 0, negativi: 0, zeri: 0}
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            data.forEach(e => {
                if(e === 0){soluzione.zeri+=1}
                else if (e>=0){soluzione.positivi +=1}
                else {soluzione.negativi +=1}
            })
            f.tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es15 = (nes) => {
    let soluzione = [];
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            for(let i=0; i<data.length; i++){
                if(data[i].length%2 === 0){
                    soluzione.push(data[i].toUpperCase())
                }
                else{
                    soluzione.push(data[i].toLowerCase())
                }
            }
            f.tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es16 = (nes) => {
    let soluzione = ""
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            data.forEach(e => {
                soluzione = soluzione + e + " "
            })
            len = soluzione.length
            soluzione = soluzione.substring(0, len-1)
            f.tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es17 = (nes) => {
    let soluzione = ""
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            data.forEach(e => {
                soluzione = soluzione + e[e.length-1]
            })
            f.tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es18 = (nes) => {
    let soluzione = ""
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            data.forEach(e => {
                if(e.length>4){
                    soluzione = soluzione + e[0]
                }
            })
            f.tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es19 = (nes) => {
    let soluzione = [];
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            for(let i=1; i<data+1; i++){
                if(data%i === 0){
                    soluzione.push(i)
                }
            }
            f.tentaEsercizio(IP, nes, soluzione.sort())
        })
        .catch(err => console.log(err))
}

const Es28 = (nes) => {
    let dict = {};
    let soluzione = 0
    f.richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            console.log(data)

            data.negozio.forEach(e => {
                dict[e] = 0
            })
            
            for(let i=0; i < data.negozio.length; i++){
                data.negozio.forEach(el => {
                    if(el === data.negozio[i]){
                        dict[el] += 1
                    }
                })
                data.magazzino.forEach(el => {
                    if(el === data.negozio[i]){
                        dict[el] += 1
                    }
                })
            }

            console.log(dict)
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
module.exports.Es11 = Es11
module.exports.Es12 = Es12
module.exports.Es13 = Es13
module.exports.Es14 = Es14
module.exports.Es15 = Es15
module.exports.Es16 = Es16
module.exports.Es17 = Es17
module.exports.Es18 = Es18
module.exports.Es19 = Es19
module.exports.Es28 = Es28