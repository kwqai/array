"use strict";
/*

//  SYNTAX ARROW FUNCTION:
//  ======================

const functionName = (parameters) => {
    // Function body
};

*/
/*
// Easy Example
   =============

const greet = (name: string) => {
    return `Hello, ${name}!`;
};

console.log(greet("Alice"));
*/
/*
//  Medium Example
    ==============
const double = (num: number) => num * 2;

console.log(double(5));
*/
/*

// Hard Example
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);

*/
/*
const numbers = [1, 2, 3, 4, 5];

// Filter values greater than 2
const selectedValues = numbers.filter(num => num > 2);
console.log("Selected Values:", selectedValues); // Output: Selected Values: [3, 4, 5]

*/
/*

const numbers1 = [1, 2, 3, 4, 5];

// Filter values greater than 2
const selectedValues1 = numbers1.filter(num => num === 2);
console.log("Selected Valuess:", selectedValues1); // Output: Selected Values: [3, 4, 5]

*/
/*

const numberss = [1, 2, 3, 4, 5];

// Filter values greater than 2
const selectedValuess = numberss.filter(num => num !== 2);
console.log("Selected Valuess:", selectedValuess); // Output: Selected Values: [3, 4, 5]

*/
/*

const words = ["apple", "banana", "cherry", "date", "elderberry"];

// Filter words with length greater than 5
const selectedWords = words.filter(word => word.length > 5);
console.log("Selected Words (Length > 5):", selectedWords); // Output: Selected Words (Length > 5): ["banana", "cherry", "elderberry"]

// Filter words equal to "banana"
const selectedWord = words.filter(word => word === "banana");
console.log("Selected Word (Equal to 'banana'):", selectedWord); // Output: Selected Word (Equal to 'banana'): ["banana"]

// Filter words not equal to "date"
const selectedWordsNotDate = words.filter(word => word !== "date");
console.log("Selected Words (Not equal to 'date'):", selectedWordsNotDate); // Output: Selected Words (Not equal to 'date'): ["apple", "banana", "cherry", "elderberry"]

*/
/*

const numbers = [5, 2, 8, 1, 3];

//  Sorting in ascending order
//  ==========================

const ascendingOrder = numbers.slice().sort((a, b) => a - b);
console.log("Ascending Order:", ascendingOrder); // Output: Ascending Order: [1, 2, 3, 5, 8]

//  Sorting in descending order
//  ===========================

const descendingOrder = numbers.slice().sort((a, b) => b - a);
console.log("Descending Order:", descendingOrder); // Output: Descending Order: [8, 5, 3, 2, 1]

*/
/*

const fruits = ["banana", "apple", "date", "elderberry", "cherry"];

// Sorting in ascending order
const ascendingOrder = fruits.slice().sort((a, b) => a.localeCompare(b));
console.log("Ascending Order:", ascendingOrder);

// Sorting in descending order
const descendingOrder = fruits.slice().sort((a, b) => b.localeCompare(a));
console.log("Descending Order:", descendingOrder);

*/
const perfumes = ["Chanel", "Dior", "Gucci", "Versace", "Dolce & Gabbana", "Calvin Klein",
    "Armani", "Prada", "Yves Saint Laurent", "Givenchy", "Marc Jacobs", "Tom Ford",
    "Hermes", "Lancôme", "Estée Lauder", "Ralph Lauren", "Viktor & Rolf", "Hugo Boss", "Jo Malone", "Bvlgari"
];
// Sorting in ascending order
const ascendingOrder = perfumes.slice().sort((a, b) => a.localeCompare(b));
console.log("Ascending Order:", ascendingOrder);
// Sorting in descending order
const descendingOrder = perfumes.slice().sort((a, b) => b.localeCompare(a));
console.log("Descending Order:", descendingOrder);
//  ============    OUT PUT ===================================================
/*

Ascending Order: [
    'Armani',        'Bvlgari',
    'Calvin Klein',  'Chanel',
    'Dior',          'Dolce & Gabbana',
    'Estée Lauder',  'Givenchy',
    'Gucci',         'Hermes',
    'Hugo Boss',     'Jo Malone',
    'Lancôme',       'Marc Jacobs',
    'Prada',         'Ralph Lauren',
    'Tom Ford',      'Versace',
    'Viktor & Rolf', 'Yves Saint Laurent'
  ]
  Descending Order: [
    'Yves Saint Laurent', 'Viktor & Rolf',
    'Versace',            'Tom Ford',
    'Ralph Lauren',       'Prada',
    'Marc Jacobs',        'Lancôme',
    'Jo Malone',          'Hugo Boss',
    'Hermes',             'Gucci',
    'Givenchy',           'Estée Lauder',
    'Dolce & Gabbana',    'Dior',
    'Chanel',             'Calvin Klein',
    'Bvlgari',            'Armani'
  ]

  */ 
