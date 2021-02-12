"use strict"
import {Es1} from './modulo.js'
import {Es2} from './modulo.js'
const fetch = require("node-fetch")
const IP = "http://192.168.178.30:8080"
const myName = "Fabrizio Tedeschi"

//JSON di configurazione da passare al fetch

const configAccreditamento = {
    method: "post",
    body: JSON.stringify({nome: myName}),
    headers: {"Content-Type": "application/json"},
}

const configEsercizioGET = {
    method: "get",
    headers: {"x-data": "true"}
}

let configEsercizioPOST = {
    method: "post",
    headers: {"Content-Type": "application/json"}
}

//Funzioni principali

const accreditamento = () => {
    fetch(IP+"/accreditamento", configAccreditamento)
        .then(res => res.json())
        .then(resBody => console.log(resBody))
        .catch(err => console.log(err))
}

const tentaEsercizio = (link, numeroEs, risultato) => {
    configEsercizioPOST.body = JSON.stringify({data: risultato})
    return fetch(link+"/esercizi/"+numeroEs, configEsercizioPOST)
        .then(res => res.json())
        .then(resBody => console.log(resBody))
        .catch(err => console.log(err))
}

const richiediEsercizio = (link, numeroEs) => {
    return fetch(link+"/esercizi/"+numeroEs, configEsercizioGET)
        .then(res => res.json())
        .then(resBody => {
            let data = resBody.data
            return data
        })
}

//Esercizi

const Es3 = (nes) => {
    let soluzione = null
    richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            soluzione = data["cognome"]

            tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es4 = (nes) => {
    let soluzione = null
    richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            soluzione = data.length
            console.log(soluzione)
            tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es5 = (nes) => {
    let soluzione = [];
    richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            data.forEach((el) => {soluzione.push(el.toUpperCase())})
            console.log(soluzione)
            tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es6 = (nes) => {
    let soluzione = null
    richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            soluzione = data.reduce((acc, el) => {return acc+el}, 0)
            console.log(soluzione)
            tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es7 = (nes) => {
    let v = [];
    let soluzione = 0
    richiediEsercizio(IP, nes)
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
            tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es8 = (nes) => {
    let v = [];
    let soluzione = 0
    richiediEsercizio(IP, nes)
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
            tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es9 = (nes) => {
    let v = [];
    let soluzione = 0
    richiediEsercizio(IP, nes)
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
            tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

const Es10 = (nes) => {
    let soluzione = null
    richiediEsercizio(IP, nes)
        .then(data => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            soluzione = data.sort()
            console.log(soluzione)
            tentaEsercizio(IP, nes, soluzione)
        })
        .catch(err => console.log(err))
}

//Codice principale
sayHi("Mario")
//accreditamento()
/*Es1("1")
Es2("2")
Es3("3")
Es4("4")
Es5("5")
Es6("6")
Es7("7")
Es8("8")
Es9("9")
Es10("10")*/