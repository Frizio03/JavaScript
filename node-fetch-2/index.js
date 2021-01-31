// Require
const fetch = require("node-fetch")

//Codice
const linkapi = "https://jsonplaceholder.typicode.com/posts"

function Es1 (){
    //Stampare sul terminale l'id di tutti i post dell’utente con id 4
    fetch(linkapi)
        .then(res => res.json())
        .then(data => {
            lista = ["Es. 1"];
            data
                .filter(e => e.userId === 4)
                .forEach(e => lista.push(e.id))
            console.log(lista)
        })
}

function Es2 (){
    //Stampare sul terminale l'id di tutti i post con userId dispari
    fetch(linkapi)
        .then(res => res.json())
        .then(data => {
            lista2 = ["Es. 2"];
            data
                .filter(e => e.userId%2 === 0)
                .forEach(e => lista2.push(e.id))
            console.log(lista2)
        })
}

function Es3 (){
    //Stampare sul terminale l'id di tutti i post con un numero pari di parole nel titolo
    fetch(linkapi)
        .then(res => res.json())
        .then(data => {
            lista3 = ["Es. 3"];
            let totaleParole
            data
                .forEach(e => {
                    totaleParole = 1
                    for(let i=0; i<e.title.length; i++){
                        if(e.title[i] === " ")
                            totaleParole +=1
                    }
                    if(totaleParole === 7)
                        lista3.push(e.id)
                })
            console.log(lista3)
        })
}

function eliminaSpazi(stringa){
    for(let i; i<stringa.leght; i++){
        if (stringa[i]===" ")
            stringa[i] = ""
    }
    return stringa
}

function Es4 (){
    //Stampare sul terminale l'id di tutti i post con un numero di lettere nel body che sia multiplo di 3
    fetch(linkapi)
        .then(res => res.json())
        .then(data => {
            lista4 = ["Es. 4"];
            data
                .forEach(e => {
                    e.body = eliminaSpazi(e.body)
                })
            data
                .filter(e => e.body.leght%3 === 0)
                .forEach(e => lista4.push(e.id))
            console.log(lista4)
        })
}

function Es5 (){
    //Stampare sul terminale un’unica stringa che sia formata da tutti i body di tutti i post il cui titolo inizia per “s”
    fetch(linkapi)
        .then(res => res.json())
        .then(data => {
            string = "Es. 5: "
            data
                .filter(e => e.title[0] === "s")
                .forEach(e => string += e.body)
            console.log(string)
        })
}

Es1()
Es2()
Es3()
Es4()
Es5()