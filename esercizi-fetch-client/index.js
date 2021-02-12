"use strict"
const fetch = require("node-fetch")
const IP = "192.168.1.231"
myName = "Fabrizio Tedeschi"

//JSON di configurazione da passare al fetch

const configAccreditamento = {
    method: "post",
    headers: {"Content-Type": "application.json"},
    body: JSON.stringify({nome: myName})
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
            data = resBody.data
        })
}

//Esercizi

const Es1 = () => {
    let soluzione = null
    richiediEsercizio(IP, "1")
        .then(soluzione => {
            
            /*SCRIVERE QUI IL CODICE PER TROVARE LA SOLUZIONE*/
            soluzione = data.toLowerCase(),

            tentaEsercizio(IP, "1", soluzione)
        })
        .catch(err => console.log(err))
}

accreditamento()
Es1()