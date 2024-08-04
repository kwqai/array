/*

Play with List of Perfumes:
===========================

1.	Chanel
2.	Dior
3.	Gucci
4.	Versace
5.	Dolce & Gabbana
6.	Calvin Klein
7.	Armani
8.	Prada
9.	Yves Saint Laurent
10.	Givenchy
11.	Marc Jacobs
12.	Tom Ford
13.	Hermes
14.	Lancôme
15.	Estée Lauder
16.	Ralph Lauren
17.	Viktor & Rolf
18.	Hugo Boss
19.	Jo Malone
20.	Bvlgari
21. Cigar

*/


//  Normal Method: ORIGINAL ARRAY:

/*

let arr_original = ["1. Chanel", "2.	Dior", "3. Gucci", "4. Versace",
"5. Dolce & Gabbana", "6.	Calvin Klein", "7. Armani", "8.	Prada",
"9.	Yves Saint Laurent", "10. Givenchy", "11. Marc Jacobs", "12. Tom Ford", 
"13. Hermes", "14. Lancôme", "15. Estée Lauder", "16. Ralph Lauren", 
"17. Viktor & Rolf", "18. Hugo Boss", "19. Jo Malone", "20. Bvlgari", 
"21. Cigar"];

console.log(arr_original[5]);    //  the sixth element of the array, and prints it.
console.log(arr_original.length);    //  returns the length of the array and prints it.
console.log("My Favourite",arr_original);

*/

/*

=============== OUT PUT ========================================================

6.      Calvin Klein
21
My Favourite [
  '1. Chanel',              '2.\tDior',
  '3. Gucci',               '4. Versace',
  '5. Dolce & Gabbana',     '6.\tCalvin Klein',
  '7. Armani',              '8.\tPrada',
  '9.\tYves Saint Laurent', '10. Givenchy',
  '11. Marc Jacobs',        '12. Tom Ford',
  '13. Hermes',             '14. Lancôme',
  '15. Estée Lauder',       '16. Ralph Lauren',
  '17. Viktor & Rolf',      '18. Hugo Boss',
  '19. Jo Malone',          '20. Bvlgari',
  '21. Cigar'
================================================================================
*/


let arr1 = ["Chanel", "Dior", "Gucci", "Versace", "Dolce & Gabbana",
"Calvin Klein", "Armani", "Prada", "Yves Saint Laurent", "Givenchy",
"Marc Jacobs", "Tom Ford", "Hermes", "Lancôme", "Estée Lauder",
"Ralph Lauren", "Viktor & Rolf", "Hugo Boss", "Jo Malone", 
"Bvlgari", "Cigar"];

console.log(arr1[16]);    //  the sixth element of the array, and prints it.
console.log(arr1.length);    //  returns the length of the array and prints it.
//  console.log("My Favourite",arr1);


//  Conxtructor:

let arr2 = new Array ("vERSACE")
console.log("Array",arr2);

//   Array

let arr3 = Array (34, 656, 45)
console.log("Array",arr3);


//  UNION TYPE

/*
let mobile:string|number|boolean|undefined = "samsung"
mobile=3009223028
mobile=true
mobile=undefined
console.log("Array",mobile);
*/
/*
let mobile: {
    brand: string,
    model: string,
    price: number,
    available: boolean
};

mobile = {
    brand: "Samsung",
    model: "Galaxy S20",
    price: 999,
    available: true
};

console.log("Mobile Details:", mobile);
*/
/*

let mobile: {
    brand: string,
    model: string,
    price: number,
    available: boolean
};

mobile = {
    brand: "Samsung",
    model: "Galaxy S20",
    price: 999,
    available: true
};

console.log("Mobile Information:");
console.log("Brand:", mobile.brand);
console.log("Model:", mobile.model);
console.log("Price:", mobile.price);
console.log("Available:", mobile.available);
*/

/*

let employee: {
    name: string,
    age: number,
    position: string,
    department: string,
    salary: number,
    isEmployed: boolean
};

employee = {
    name: "John Doe",
    age: 30,
    position: "Software Engineer",
    department: "Engineering",
    salary: 80000,
    isEmployed: true
};

console.log("Employee Information:");
console.log("Name:", employee.name);
console.log("Age:", employee.age);
console.log("Position:", employee.position);
console.log("Department:", employee.department);
console.log("Salary:", employee.salary);
console.log("Is Employed:", employee.isEmployed);



*/





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

/*

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

*/

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



//  =========== EX29 PRACTICE    ===============  STARTS HERE ===================

/*

// Define an array of favorite fruits

let favoritePerfumes: string[] = ["armani", "Bvlgari", "versace"];

// Check for certain fruits using independent if statements
if (checkForPerfume("armani")) {
    console.log("You really like armani");
}

if (checkForPerfume("Bvlgari")) {
    console.log("You really like Bvlgari");
}

if (checkForPerfume("versace")) {
    console.log("You really like versace!");
}

if (checkForPerfume("Hugo Boss - orange")) {
    console.log("You really like Hugo Boss - orange!");
} else {
    console.log("You don't like Hugo Boss - orange!!");
}

if (checkForPerfume("Calvin Klein")) {
    console.log("You really like Calvin Klein!");
} else {
    console.log("You don't like Calvin Klein!");
}

// Function to check if a fruit exists in the favoriteFruits array

function checkForPerfume(perfume: string): boolean {
    for (let i = 0; i < favoritePerfumes.length; i++) {
        if (favoritePerfumes[i] === perfume) {
            return true;
        }
    }
    return false;
}


//  ==========================  ENDS HERE ========================================

*/