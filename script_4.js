const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: "Knowles", year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


console.log(entrepreneurs[0].year)

for(i = 0; i < entrepreneurs.length; i++) {
  if(entrepreneurs[i].year >= 1970 && entrepreneurs[i].year < 1980){
    console.log("Voici un entrepreneur né dans les années 70:")
    console.log(entrepreneurs[i]);
  }
}

fullName = []
for(i = 0; i < entrepreneurs.length; i++) {
  fullName.push(entrepreneurs[i].first + " " + entrepreneurs[i].last);
}

console.log(fullName);


for(i = 0; i < entrepreneurs.length; i++) {
  console.log(`${entrepreneurs[i].first} ${entrepreneurs[i].last} a aujourd'hui ${2019 - entrepreneurs[i].year} ans`)
}


console.log("*******************")
console.log("Voilà la liste des entrepreneurs classés par ordre alphabétique")
console.log("*******************")
console.log(entrepreneurs.sort(function(a, b) {
  var textA = a.last;
  var textB = b.last;
  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
}));
