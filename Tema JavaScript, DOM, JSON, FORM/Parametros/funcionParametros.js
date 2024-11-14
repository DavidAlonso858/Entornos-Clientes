function demoParams() {
    console.log("in");
    console.log(arguments.length); // aunque no espere parametros te dice lo que le pasas
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);

}

demoParams(1, 2, 4, 6);

function createPerson(name, surname, ...cities) {
    const person = {};
    person.name = nameA;
    person.surname = surnameA;
    person.locations = cities;

    cities.forEach(e => console.log(e));

    console.log(person);
    console.log(person.locations);

    cities.foreach(e => console.log(e)
    )
        ;
}

console.log("David", "Ivan", ["malaga", "sevilla", "madrid"]);
