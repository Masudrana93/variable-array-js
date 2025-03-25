// Array 
var employeeSalary = [200, 300, 500, 700, 800];

console.log(employeeSalary);

// length for total data
var friendsAge = [20, 30, 34, 35, 40];

console.log(friendsAge.length);

var friendsName = ['Anower', "Fysal", "Mamun", 'morshed'];

console.log(friendsName.length);

// indexOf for position
var projectValue = [50, 100, 120, 150, 180, 200]

console.log(projectValue.indexOf(120));

var projectName = ['Anower', "Fysal", "Mamun",];

console.log(projectName.indexOf('Anower'));



var projectValue = [50, 100, 120, 150, 180, 200]

var indexElement = projectValue[3];

console.log(indexElement);


// using data find out index number/ position
var numbers = [20, 25, 35, 78, 58, 48, 45];

console.log(numbers);

var element = numbers.indexOf(78);
console.log(element);

// using  index number/ position find out data
var numbers = [29, 27, 35, 78, 55, 48, 41];

console.log(numbers[4]);

// Or 

var numbers = [29, 27, 35, 78, 55, 48, 41];

var second = numbers[4];

console.log(second);



// data chage in array using index number/ position 

var numbers = [20, 25, 35, 78, 58, 48, 45];

numbers[0] = 50;

console.log(numbers);



console.log(20+15);

console.log("Hello Dhaka");


var friendNames = ['anower', 'anis', 'morshed',]
console.log(friendNames.indexOf('anwer'));  // spelling mistake output(-1)


// data push (add) in array [] using push method 

var friendNames = ['anower', 'anis', 'morshed', 'suboj']

console.log(friendNames)

var friendNames = ['anower', 'anis', 'morshed', 'suboj']

friendNames.push('titon');
friendNames.push('faysal')


console.log(friendNames);

var friendAge = [22, 25, 56, 14]
friendAge.push(80)

console.log(friendAge);

// data pop (delete) in array [] using pop method

var friendNames2 = ['anower', 'anis', 'morshed', 'suboj']

friendNames2.pop();
friendNames2.pop();
friendNames2.pop();


console.log(friendNames2)

var friendAge2 = [22, 25, 56, 14]
friendAge2.pop();
friendAge2.pop();

console.log(friendAge2);

