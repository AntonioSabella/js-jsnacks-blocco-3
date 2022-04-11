/* Descrizione:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome
e l’indicazione se può guidare, in base all’età. 
*/

const userPilots = [
    {
        nome: 'Franco',
        cognome: 'Concini',
        età: 26
     },
     {
        nome: 'Livia',
        cognome: 'Asdrubali',
        età: 17
     },
     {
        nome: 'Demetrio',
        cognome: 'Falanghini',
        età: 67
     },
     {
        nome: 'Giacomo',
        cognome: 'Vespucci',
        età: 15
     },
     {
        nome: 'Ludovica',
        cognome: 'Mbriani',
        età: 36
     },
     {
        nome: 'Alfonso',
        cognome: 'Vespoli',
        età: 12
     },
     {
        nome: 'Giucas',
        cognome: 'Andreoli',
        età: 31
     },
     {
        nome: 'Roberta',
        cognome: 'Franchi',
        età: 16
     },
     {
        nome: 'Lara',
        cognome: 'Viniard',
        età: 9
     },
]


const canRide = userPilots.filter((userPilot) => {
    if(userPilot.età > 18) {
        console.log(`${userPilot.nome} può guidare perché maggiorenne`);
        return true
    }
    console.log(`${userPilot.nome} non può guidare perché minorenne`);
    return false
})

console.log(canRide);