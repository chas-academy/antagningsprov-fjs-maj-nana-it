

function uppg9(numbers) {
    for (var number of numbers) {
        if (number % 2 === 0) {
            console.log(number + " jämt");
        } else {
            console.log(number + " udda");
        }
    }
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

  
}

uppg9([1, 2, 3, 4, 5, 6]);

module.exports = { uppg9 };

//svårigheter: jag skrev två namn för en funtion vilket inte är tillåtet
//svårigheter: isttället för + råka jag 
//svårigheter:
//svårigheter: jag glömde att deffinera uppgift 9 och fick syntaxfel 
