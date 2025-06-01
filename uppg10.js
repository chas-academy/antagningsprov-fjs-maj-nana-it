function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];

    const bigEven = [];
    const smallOdd = [];
    const other = [];

    for (var number of numbers) {
      //bigEven ska innehålla tal större än 10 och jämt delbart med 2
      if (number > 10 && number % 2 === 0) {
        bigEven.push(number);

      }
      // smallOdd ska innehålla tal mindre än 10 och udda
      else if (number < 10 && number % 2 === 1) {
        smallOdd.push(number);
    } 
    //Other
    else {
        other.push(number);
    }
    }
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna

    var objekt = {
      bigEven: bigEven,
      smallOdd: smallOdd,
      other: other
    };

    return objekt;
  
  }
  
  module.exports = { uppg10 };

  console.log(uppg10());
  