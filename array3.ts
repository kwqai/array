/*

let arr1 = ["Chanel", "Dior", "Gucci", "Versace", "Dolce & Gabbana",
    "Calvin Klein", "Armani", "Prada", "Yves Saint Laurent", "Givenchy",
    "Marc Jacobs", "Tom Ford", "Hermes", "Lancôme", "Estée Lauder",
    "Ralph Lauren", "Viktor & Rolf", "Hugo Boss", "Jo Malone",
    "Bvlgari", "Cigar"];
console.log(arr1[6]); //  the sixth element of the array, and prints it.
console.log(arr1.length); //  returns the length of the array and prints it.
console.log("My Favourite",arr1);

*/

/*

let arr4 = ["Chanel", "Dior", "Gucci", "Versace", "Dolce & Gabbana",
    "Calvin Klein", "Armani", "Prada", "Yves Saint Laurent", "Givenchy",
    "Marc Jacobs", "Tom Ford", "Hermes", "Lancôme", "Estée Lauder",
    "Ralph Lauren", "Viktor & Rolf", "Hugo Boss", "Jo Malone",
    "Bvlgari", "Cigar"];

arr4.sort(); // Sorting the array alphabetically

console.log("Sorted array:", arr4);

*/

/*

=============== OUT PUT =================================================================



Sorted array: [
    'Armani',             'Bvlgari',
    'Calvin Klein',       'Chanel',
    'Cigar',              'Dior',
    'Dolce & Gabbana',    'Estée Lauder',
    'Givenchy',           'Gucci',
    'Hermes',             'Hugo Boss',
    'Jo Malone',          'Lancôme',
    'Marc Jacobs',        'Prada',
    'Ralph Lauren',       'Tom Ford',
    'Versace',            'Viktor & Rolf',
    'Yves Saint Laurent'
  ]



================================================================================

*/

/*

// Filter words with length greater than 5

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

// Filter words with length greater than 5

let words = ["Chanel", "Dior", "Gucci", "Versace", "Dolce & Gabbana",
"Calvin Klein", "Armani", "Prada", "Yves Saint Laurent", "Givenchy",
"Marc Jacobs", "Tom Ford", "Hermes", "Lancôme", "Estée Lauder",
"Ralph Lauren", "Viktor & Rolf", "Hugo Boss", "Jo Malone",
"Bvlgari", "Cigar"];

// Filter words with length greater than 5
let selectedWords = words.filter(word => word.length > 5);
console.log("Selected Words (Length > 5):", selectedWords); // Output: Selected Words (Length > 5): ["banana", "cherry", "elderberry"]



*/

/*

====================    OUT PUT =============================================

Selected Words (Length > 5): [
    'Chanel',          'Versace',
    'Dolce & Gabbana', 'Calvin Klein',
    'Armani',          'Yves Saint Laurent',
    'Givenchy',        'Marc Jacobs',
    'Tom Ford',        'Hermes',
    'Lancôme',         'Estée Lauder',
    'Ralph Lauren',    'Viktor & Rolf',
    'Hugo Boss',       'Jo Malone',
    'Bvlgari'
  ]

*/


//  =========== REVERSE ALPHABATICAL ORDER  ==========================================

/*

let arr5 = ["Chanel", "Dior", "Gucci", "Versace", "Dolce & Gabbana",
    "Calvin Klein", "Armani", "Prada", "Yves Saint Laurent", "Givenchy",
    "Marc Jacobs", "Tom Ford", "Hermes", "Lancôme", "Estée Lauder",
    "Ralph Lauren", "Viktor & Rolf", "Hugo Boss", "Jo Malone",
    "Bvlgari", "Cigar"];

arr5.sort((a, b) => {
    const aClean = a.replace(/[^\w\s]/gi, '').toUpperCase(); // Remove special characters and convert to uppercase
    const bClean = b.replace(/[^\w\s]/gi, '').toUpperCase(); // Remove special characters and convert to uppercase
    
    // Compare strings
    if (aClean < bClean) return 1;
    if (aClean > bClean) return -1;
    return 0;
});

console.log("Sorted array in reverse alphabetical order:", arr5);

*/

/*

Sorted array in reverse alphabetical order: [
  'Yves Saint Laurent', 'Viktor & Rolf',
  'Versace',            'Tom Ford',
  'Ralph Lauren',       'Prada',
  'Marc Jacobs',        'Lancôme',
  'Jo Malone',          'Hugo Boss',
  'Hermes',             'Gucci',
  'Givenchy',           'Estée Lauder',
  'Dolce & Gabbana',    'Dior',
  'Cigar',              'Chanel',
  'Calvin Klein',       'Bvlgari',
  'Armani'
]

*/

/*

//  ANOTHER ALTERNATE METHOD FOR REVERSE ORDER

let arr6 = ["Chanel", "Dior", "Gucci", "Versace", "Dolce & Gabbana",
    "Calvin Klein", "Armani", "Prada", "Yves Saint Laurent", "Givenchy",
    "Marc Jacobs", "Tom Ford", "Hermes", "Lancôme", "Estée Lauder",
    "Ralph Lauren", "Viktor & Rolf", "Hugo Boss", "Jo Malone",
    "Bvlgari", "Cigar"];

arr6.sort((a, b) => {
    const firstLetterA = a.replace(/[^a-zA-Z]/g, '').toUpperCase()[0]; // Get the first letter of string A
    const firstLetterB = b.replace(/[^a-zA-Z]/g, '').toUpperCase()[0]; // Get the first letter of string B
    return firstLetterB.localeCompare(firstLetterA); // Sort in reverse alphabetical order based on first letters
});

console.log("Sorted array in reverse alphabetical order:", arr6);
*/

let arr7: string[] = [
    "Chanel", "Dior", "Gucci", "Versace", "Dolce & Gabbana",
    "Calvin Klein", "Armani", "Prada", "Yves Saint Laurent", "Givenchy",
    "Marc Jacobs", "Tom Ford", "Hermes", "Lancôme", "Estée Lauder",
    "Ralph Lauren", "Viktor & Rolf", "Hugo Boss", "Jo Malone",
    "Bvlgari", "Cigar"
];

function getRandomWord(arr7: string[]): string {
    const randomIndex = Math.floor(Math.random() * arr7.length);
    return arr7[randomIndex];
}

console.log("Randomly Selected Word:", getRandomWord(arr7));
//console.log("Length of the Array:", arr1.length);
//console.log("All Elements of the Array:", arr1);











/*

// Filter words with length less than 5
let selectedWords1 = words.filter(word => word.length < 5);
console.log("Selected Words (Length < 5):", selectedWords1); // Output: Selected Words (Length > 5): ["banana", "cherry", "elderberry"]


// Filter words equal to "banana"
let selectedWord = words.filter(word => word === "Bvlgari");
console.log("Selected Word (Equal to 'Bvlgari'):", selectedWord); // Output: Selected Word (Equal to 'banana'): ["banana"]

// Filter words not equal to "date"
let selectedWordsNotHugoBoss = words.filter(word => word !== "Hugo Boss");
console.log("Selected Words (Not equal to 'Hugo Boss'):", selectedWordsNotHugoBoss); // Output: Selected Words (Not equal to 'date'): ["apple", "banana", "cherry", "elderberry"]

*/

