let array1 : number[] = [5, 6, 7];//correct syntax
console.log(array1[2]);//correct syntax


let array2:Array<number> = [1, 2, 3];//alternative correct syntax
console.log(array2[2]);//correct syntax

/*

let array3 : number[] = [];//correct syntax to define an empty array

let array4: number[] = new number[2];//error

let array5: number[] = [];
array5.push(1234);//dynamically adding
*/









/*

//  Normal Method:

let arr = ["kehkashaan", "one", 2, "Arif", "Batool", "Zaitoon BB"]
console.log(arr[5]);
console.log(arr.length);
console.log("Array",arr);

//  Constructor:

let arr2 = new Array ("Bhabi")
console.log("Array",arr2);

//   Array

let arr3 = Array (34, 656, 45)
console.log("Array",arr3);
console.log("KWQ",arr);

//  UNION TYPE


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