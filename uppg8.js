

function uppg8(persons){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

for (var person of persons) {
    if (person.age > 30) {
        console.log(person.name);
    }
}

// anropa funktionen och skicka med arrayen som argument


}

module.exports = { uppg8 };

uppg8([
    {
        name: "Andre",
        age: 25
    },
    {
        name: "Nana",
        age: 27
    },
    {
        name: "Mange",
        age: 40
    },
    {
        name: "Tomas",
        age: 35
    },
    {
        name: "Alex",
        age: 26
    },
]);

//svårighet: jag använde for in istället för for of, vilket gjorde att variabeln person inte skrevs ut då det blev en syntax error. 
//svårighet: Sedan förökte jag använda person.age, vilket inte fungerade efterson stängar som 0 inte har en age-egenskap. 
//svårighet: Jag hade en extra måsving innan modul.exports vilket gav syntaxfel 