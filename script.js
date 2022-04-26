//exercice1
//Calcul de l'aire d'un cercle
export function calculateCircumference(radius) {
    return 2 * Math.PI * radius; //Math.PI = 3.14
  }

//exercice2
//Pour trouver si le 1 janvier est un dimanche entre 2014 et 2050

  export function firstSunday () {
    for (var year = 2014; year <= 2050; year++) {
      var d = new Date(year, 0, 1);
      if (d.getDay() === 0) {
        console.log('The first day of ' + year + ' is a Sunday');
      }
    }
  }
  
  firstSunday();

//exercice 3
//Trouver les n premiers termes de Fibonnacci

function fibonacci(nbr) {
  var n1 = 0;
  var n2 = 1;
  var somme = 0;

  for (let i = 2; i <= nbr; i++) {
    //somme des deux derniers nombres
    somme = n1 + n2;
    //assigner la dernière valeur à la première
    n1 = n2;
    //attribuer la somme au dernier
    n2 = somme;
  }

  return nbr ? n2 : n1;
}
console.log(fibonacci(8));

//exercice4
//La méthode CAESAR

function cesar(str, amount) {
  if (amount < 0) return cesar(str, amount + 26);

  // variable pour stocker le résultat
  var result = "";
  // Parcourir chaque caractére
  for (var i = 0; i < str.length; i++) {
    // Récupérer le caractére que nous allons ajouter
    var c = str[i];
    // Vérifier si c'est une lettre
    if (c.match(/[a-z]/i)) {
      // Récupérer son code
      var code = str.charCodeAt(i);
      // Lettres majuscules
      if (code >= 65 && code <= 90)
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      // Lettres minuscules
      else if (code >= 97 && code <= 122)
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
    }
    // Ajouter le caractére
    result += c;
  }
  // Résultat
  return result;
}
console.log(cesar("ABCD", 10));