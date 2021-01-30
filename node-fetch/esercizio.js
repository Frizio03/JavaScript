// Require
const fetch = require("node-fetch")

//Codice
const linkapi = "https://jsonplaceholder.typicode.com/posts"

function Es1 (){
    //Stampare sul terminale l'id di tutti i post dell’utente con id 4
    fetch(linkapi)
        .then(res => res.json())
        .then(data => {
            lista = [];
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
            lista2 = [];
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
            data
                .filter(e => e.title%2 === 0)
                .forEach(e => console.log(e.id))
        })
}

Es1()
Es2()
//Es3()