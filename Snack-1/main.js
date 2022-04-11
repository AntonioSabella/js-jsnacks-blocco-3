/* Descrizione:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.  */

const cars = [
    {
		marca: 'fiat',
		modello: 'punto',
		alimentazione: 'diesel'
	},
    {
		marca: 'alfa',
		modello: 'giulietta',
		alimentazione: 'benzina'
	},
    {
		marca: 'bmw',
		modello: 'x1',
		alimentazione: 'benzina'
	},
    {
		marca: 'tesla',
		modello: 'modelS',
		alimentazione: 'elettrica'
	},
    {
		marca: 'fiat',
		modello: 'bravo',
		alimentazione: 'diesel'
	},
    {
		marca: 'lamborghini',
		modello: 'gallardo',
		alimentazione: 'benzina'
	},
    {
		marca: 'ferrari',
		modello: '360',
		alimentazione: 'benzina'
	},
    {
		marca: 'lancia',
		modello: 'ypsilon',
		alimentazione: 'metano'
	},
    {
		marca: 'fiat',
		modello: '500',
		alimentazione: 'gpl'
	},
    {
		marca: 'audi',
		modello: 'a6',
		alimentazione: 'benzina'
	}
]


const cars1 = cars.filter(car => car.alimentazione === 'benzina');
console.log(cars1);

const cars2 = cars.filter(car => car.alimentazione === 'diesel');
console.log(cars2);

const cars3 = cars.filter(car => (car.alimentazione === 'gpl') ||  (car.alimentazione === 'metano') || (car.alimentazione === 'elettrica'));
console.log(cars3);
