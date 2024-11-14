let meses = [
    {
        name: 'Enero',
        number: 1,
        numberDays: 31
    },
    {
        name: 'Febrero',
        number: 2,
        numberDays: 28
    },
    {
        name: 'Marzo',
        number: 3,
        numberDays: 31
    },
    {
        name: 'Abril',
        number: 4,
        numberDays: 30
    },
    {
        name: 'Mayo',
        number: 5,
        numberDays: 31
    },
    {
        name: 'Junio',
        number: 6,
        numberDays: 30
    },
    {
        name: 'Julio',
        number: 7,
        numberDays: 31
    },
    {
        name: 'Agosto',
        number: 8,
        numberDays: 31
    },
    {
        name: 'Septiembre',
        number: 9,
        numberDays: 30
    },
    {
        name: 'Octubre',
        number: 10,
        numberDays: 31
    },
    {
        name: 'Noviembre',
        number: 11,
        numberDays: 30
    },
    {
        name: 'Diciembre',
        number: 12,
        numberDays: 31
    }
]

const mesesFiltro = meses.filter((meses) => meses.numberDays == 30).forEach(m => console.log('los meses con 30 dias', m.name))

meses.filter((meses) => meses.number % 2 == 0).forEach(m => console.log('Los meses pares', m.number));


const mesesSuma = meses.reduce(
    (accumulator, m) => accumulator + m.numberDays, 0); // si no es primitivo hay que ponerlo 

console.log(mesesSuma);
