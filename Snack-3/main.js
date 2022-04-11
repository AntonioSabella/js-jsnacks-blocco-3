/* Descrizione:
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
*/

const arcaDiNoe = [
    {
       nome: 'leone',
       famiglia: 'felidi',
       classe: 'mammiferi'
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
     },
     {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
     },
     {
        nome: 'canguro',
        famiglia: 'macropodidi',
        classe: 'mammiferi'
     },
     {
        nome: 'tigre',
        famiglia: 'felidi',
        classe: 'mammiferi'
     },
     {
        nome: 'falco',
        famiglia: 'falconidi',
        classe: 'uccello'
     },
     {
        nome: 'vipera',
        famiglia: 'viperidi',
        classe: 'rettili'
     },
     {
        nome: 'orca',
        famiglia: 'delfinidi',
        classe: 'mammiferi'
     },
     {
        nome: 'orso',
        famiglia: 'ursidi',
        classe: 'mammiferi'
     },
     {
        nome: 'raganella',
        famiglia: 'ilidi',
        classe: 'anfibi'
     },
]


const mammaliaList = arcaDiNoe.filter(arcaDiNoe => arcaDiNoe.classe === 'mammiferi');
console.log(mammaliaList);