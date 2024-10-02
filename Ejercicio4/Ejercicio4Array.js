let personas = [{ name: 'Jon', age: 30 },
{ name: 'David', age: 22 },
{ name: 'Juan', age: 16 }];

const filtro = personas.filter((personas) =>
    personas.age >= 18).forEach(p => console.log(p.name)); // al hacerle el log no hace falta llamarlo luego

