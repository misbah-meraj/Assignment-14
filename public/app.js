// //Chap-1 
alert("Please Enter Your Details")

var FirstName = "Misbah ";
var LastName = "Mairaj ";
var Email = "abc56@.gmail.com ";
var Password = "1234567 ";
var PhoneNum = "01234567891 ";

alert( FirstName
    + LastName +
    Email +
    Password)

// // 2. 

alert("You're learning JavaScript");

// //Chap-2 

// //1.
var myAge = 21;
console.log(myAge);

// //2.
var myName;
myName = "misbah";
console.log(myName);

// //3. 

var teamName = "Aliza , Anum , Maha , Amna";
alert(teamName);

// //4. 
var bestMan = "Charlie";
  bestMan = "john";
console.log(bestMan)

// //Chap-3 

// //1. 
// //2.

var caseQty = "karachi";
caseQty = 144;
console.log(caseQty);

// //3. 
// //4. 

var sum = 9;
var sum2 = sum + 2;
console.log(sum2);

// //5.


var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
console.log(orderTotal);

// //6. 

var num = 15;
var num2 = num + 5;
console.log(num2);


// // chap-4

// //1.

var productCost = 3.45;

// //2.

var nameofBand;

// //3.

var myNumber = 11;

// //4.

var myFullName = "Misbah Meraj";

// //5.

// // var 10person (illegal)
// // var person-1 (illegal)
// // var $person (illegal)
// // var pe%rson (illegal)3
// // var pe*rson (illegal)
// // var person name (illegal)
// // var alert (illegal)

// //chap-5

// // 1.

var remainder = 10 % 3; 


// //2.
var num = 20 % 6;
console.log(num);

// //3.

var largeNum = 1000 * 2000;
console.log(largeNum);

// //4.
var num = 15;
var num2 = num - 5;
console.log(num2);

// //5.
var res1 = 20;
var res2 = 10;
var remainderResult = res1 % res2;
console.log(remainderResult);

// //6.
alert(2*4);

// //chap-6

// //1.

var x = 3;
var x = x + 1;
console.log(++x);

// //2.

var x = 100;
x--;
console.log(x);

// //3.

var x = 50;
var y = x++;
console.log(y);

// //4.

var x = 50;
var z = --y;
console.log(y);


// //5.

var num = 5;
var newNum = --num;
console.log(newNum);


// //6. 
var num = 5;
var num2 = ++num;
var num3 = num2;
console.log(num3);

// //7.
var x = 7;
var y = ++x;
alert(y);


// // chap-7

// //

 var calculatedNum = 2 + (2 * 6);
console.log(calculatedNum);

//

var cost = (2 + 2) * (4 + 10);
console.log(cost);

//

var cost = 2 + (2 * 4 )+ 10;
console.log(cost);

//

var cost =  4 / (2 * 4);
console.log(cost);

// //chap-8


var num = "2" + "2";
console.log(num);

// 2.
 var message = "Hello," + "Dolly";
 alert(message);


 // 3.

 var message = ("33" + 3);
 alert(message);


 // 4
  
 var a =" Pakistan";
 var b = "Zindabad";
 alert(a + b);

 //5.

 var x = "22";
 var y = 3;
 console.log(x + y);

 //6.

 var a = "22";
 var b = "3";
 var c = (a + b)
 console.log(c)

 // chap-9

 //1.
 var username = prompt("Enter First Name");
 console.log(username);

//2.

 var country = prompt("Country?", "China");
 alert(country);

 //3.

var yourName = prompt("Enter Your Name");

//4.

var Name = prompt("What is your name ?", "Misbah");
console.log(Name);

 //5.

 var firstString = "where Are You From?";
var secondString = "Pakistan";
var userResponse = prompt(firstString, secondString);
console.log(userResponse);


// 6.

var userResponse = prompt("What's your favorite color?", "Red");
alert("Your favorite color is: " + userResponse);

//chap-10

//1.

var city = "Karachi";
if (city === "Karachi") {
  console.log("The City of Lights");
}

//2
var x = 5
var y = 5
if (x === y) {
  var z = prompt("Enter the value of z?");
  console.log(z);
}

//3.

var city =  10010
 if ( city === 10010 ){
  alert("karachi")
 }else{ alert("Please write correct city")
 }

 //4.

 var x = 1;
 if (x === 1) {
   x = 42;
 }
 console.log(x);

//chap-11

//1.

var num1 = 2; 
var num2 = 5; 
var result;
if (num1 !== num2) {
  result = num1 + num2;
}
console.log(result);

//2.


var value1 = 10; 
var value2 = 5;  
if (value1 >= value2) {
  console.log("The condition is true");
} else {
  console.log("The condition is false");
}

//3.

var myVariable = 5; 

if (myVariable !== 10) {
  myVariable = 20; 
}
console.log(myVariable);

//4.
var number1 = 8; 
var number2 = 5; 
if (number1 !== number2) {
  alert("Congratulations! The numbers are unequal.");
}
//5.

var enterName = prompt("What is your first name?");
var anotherName = "Misbah"; 
if (enterName !== anotherName) {
  alert("No match");
}

//chap-12

//1.

var variable1 = 15;
var variable2 = 10;
if (variable1 >= variable2) { 
  alert("Variable1 is greater than or equal to Variable2");
} else {
  alert("Variable1 is less than Variable2");
}

//2.

var subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
var subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
var subject3 = parseFloat(prompt("Enter marks for Subject 3:"));
var subject4 = parseFloat(prompt("Enter marks for Subject 4:"));
var subject5 = parseFloat(prompt("Enter marks for Subject 5:"));

var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
var percentage = (totalMarks / 500) * 100;

var grade;

if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Total Marks: " + totalMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);

//3.

if (a === 10) {
  alert("a is 10");
} else {
  alert("The correct value of a is " + a);
}

//.4

var userCity = prompt("Enter a city");
if (userCity.toLowerCase() === "karachi") {
  alert("Acknowledging it is Karachi");
} else if (userCity === "lahore") {
  
  alert("Acknowledging it's Lahore");
} else {
  alert("This city is not recognized or acknowledged.");
}


//Chapter 13 

//.1
var a = 5;
var b = 5;
var c = 10;
var d = 10;

if (a === b && c === d) {
  console.log("Both conditions are true!");
}

//.2

var a = 5;
var b = 5;
var c = 10;
var d = 15;

if (a === b || c !== d) {
  console.log("Either or both conditions are true!");
}

//.3

var name = "Hamza"; 
var age = 30; 
if ((name === "Hamza" || name === "Arsalan") && age < 60) {
  console.log("Conditions are true!");
} else {
  console.log("Conditions are false.");
}

//.4
var num1 = 8;
var num2 = 12;
if (num1 < num2 || num1 > num2) {
  alert("The condition is true!");
} else {
  alert("The condition is false.");
}

//.5
var firstName = "YourFirstName"; 
var lastName = "YourLastName";  

var userFirstName = prompt("Enter your first name:");
var userLastName = prompt("Enter your last name:");
if (userFirstName === firstName && userLastName === lastName) {
  alert("Names match! Welcome, " + userFirstName + " " + userLastName + "!");
} else {
  alert("Names do not match. Please check and try again.");
}



//Chapter 14 (If statements nested)

//.1

var password = prompt("Enter your password:");
if (password !== "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5.");
  } else {
    alert("OK");
  }
} else {
  alert("Password cannot be empty.");
}

//.2

var a = 1;
var c = "Max"; 
if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

//.3

var a = 1; 
var c = "Max";
if (a === 1 && c === "Max") {
  alert("OK");
}

//.4

var num1 = 42;
var num2 = 42;
if (num1 === num2) {
  if (num1 <= num2) {
    alert("Conditions are true! The values are equal and num1 is less than or equal to num2.");
  }
}


//Chapter 15 (Array I)
//.1

var emptyArray = [];

//2.
var myArray = ["Hello, Students!"];
console.log(myArray[0]);


//.3
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

//.4

var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var arrayLength = alphabet.length;
alert("Total length of the array is: " + arrayLength);

//.5
var myArray = ["First Element"];
myArray[1] = "Second Element";
alert(myArray[1]);

//Chapter 16 (Array II)
//.1

var myArray = ["Hello, I am a student of class five"];

//var Alphabet=["h","i","j","k"]Remove the last element from the array Alphabet.

var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();
console.log(Alphabet);

//var Alphabet=["h","i","j","k"]Add a new element, a number, to the end of an array.

var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(5);
console.log(Alphabet);

//Chapter 16 (Array III)

//var sizes = ["S", "M", "XL", "XXL", "XXXL"].Remove the first element of an array.

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes);

//var sizes = ["S", "M", "XL", "XXL", "XXXL"].Add three number elements to the beginning of an array.

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);
console.log(sizes);

//Declare an array with one element.Add a second element to the beginning of the array.Create an alert whose message is the new first element.

let Array = ['hello'];
Array.unshift('Hey');
alert(Array[0]);

//var sizes = ["S", "M", "XL", "XXL", "XXXL"].Insert "L" into the array between "M" and "XL".

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
console.log(sizes);


//var sizes = ["S", "M", "XL", "XXL", "XXXL"].Copy the first 3 sizes of the array and put them into a new array,regSizes.

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);
console.log(regSizes);

//var pets = ["dog", "cat", "ox", "duck", "frog"].Add 2 elements after "dog" and remove "cat", "ox", and "duck".

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "rabbit", "fish", "parrot");
console.log(pets);

//var pets = ["dog", "cat", "ox", "duck", "frog"];Remove "cat" and "ox".

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);
console.log(pets);


//var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];Reduce it to "duck" and "frog" using slice.

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var selectedPets = pets.slice(3, 5);
console.log(selectedPets);


//Chapter 17 - 20 (for Loops)

//Write a statement in which loop is to run 10 times.

for (let i = 0; i < 10; i++) {
  console.log("Iteration number:", i + 1);
}

//Code the first line of a for loop with the usual counter name, usualstarting value, and usual increment. Run it 12 times using <= tospecify how many loops.

for (let i = 0; i <= 11; ++i) {
  console.log("Iteration number:", i + 1);
}

//What are the 5 characters missing from this code, excluding any
//spaces that are missing? Type them in order, with no spaces orcommas between them.for var i = 0 i <= 4 i++Note: Complete this statement by yourself

for (var i = 0; i <= 4; i++);

//Code the first line of a for loop with a counter name that's not i.Code the usual starting value and usual increment. Run it 100times using < to specify how many loops.

for (let counter = 0; counter < 100; counter++) {
  console.log("Iteration number:", counter + 1);
}

//Code the first line of a for loop with a counter name that's not i.Code the usual starting value and usual increment. Run it 100times using < to specify how many loops.

for (let count = 0; count < 100; count++) {
  console.log("Iteration number:", count + 1);
}

//The statement assigns the number of elements in the array to thevariable.

var array = [1, 2, 3, 4, 5];
var numberOfElements = array.length;
console.log("Number of elements:", numberOfElements);

//Set a variable named “flag” with an initial Boolean value of yourchoice.

var flag = true;
console.log(flag);

//Code the first line of a for loop with the usual counter, the usualstarting value, and the usual incrementing. Limit the number ofloops by the number of elements in the array pets.

for (let i = 0; i < pets.length; i++) {
  console.log("Iteration number:", i + 1);
}


var userNames = ["Maha", "Yusra", "Amna", "Aiza"];
var firstName = prompt("Enter first name");
for (let i = 0; i < userNames.length; i++) {
  if (firstName === userNames[i]) 
    alert("Enter");
     else {
    alert("Please write correct user name");
  }
}


// //Complete this code to display an alert if a match isn't found.var matchFound = false;
// //for (var i = 0; i < list.length; i++) {if (userInput === list[i]) {alert("Match found");
// //matchFound = true;break}};


var matchFound = false;
var list = ["item1", "item2", "item3"];

var userInput = prompt("Enter something");
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}
if (!matchFound) {
  alert("No match found. Please try again.");
}


// //12.

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < firstArr.length; i++) {
  for (let j = 0; j < secondArr.length; j++) {
    var result = firstArr[i] + secondArr[j];
    console.log(result);
  }
}

// chap-21

//.1
var userInput = "Your User Input"; 
var allLower = userInput.toLowerCase(); 
console.log(allLower);


//2

var x = "hellow";
x = x.toLowerCase();
console.log(x); 

//3

var y = "Misbah"; 
y = y.toUpperCase(); 
console.log(y);

//4
var originalString = "Anum"; 
var lowercasedString = originalString.toLowerCase(); 

console.log("Original String:", originalString);
console.log("Lowercased String:", lowercasedString);

//5

var myArray = ["Aliza"]; 
var newArrayElement = myArray[0].toLowerCase();

console.log("Original Array Element:", myArray[0]);
console.log("Lowercased Array Element:", newArrayElement);
 
 //6

 var myString = "How May I Help You?"; 
var uppercasedString = myString.toUpperCase();

alert(uppercasedString);

//7
var cityName = "kaRacHi";
var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
console.log(capitalizedCityName); 

//Chapter 22 - 25

//1
var sameWords = "captain";
var slicedPart = sameWords.slice(1, 3);

console.log(slicedPart); 

//2
var sameWords = "captain";
var numberOfCharacters = sameWords.length;
console.log(numberOfCharacters);

//3
var animal = "elephant";
var seg = animal.slice(1, 5);
console.log(seg);

//4

var myString = "Hello, World!";
var numberOfCharacters = myString.length;
console.log(numberOfCharacters);

//5

var originalString = "Hello, World!"; 
var numberOfCharacters = originalString.length;
var slicedString = originalString.slice(1, -3);

console.log("Number of Characters:", numberOfCharacters);
console.log("Sliced String:", slicedString);

//6

var text = "To be or not to be.";
var indx = text.indexOf("be");

console.log(indx);

//7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");

console.log(indx);

//8

var text = "Let's go, go, go!";
var indx = text.lastIndexOf("go");
if (indx !== -1) {
  indx = text.lastIndexOf("go", indx);
}
console.log("Index of the first character of the last 'go':", indx);

//9
var text = "Hello, World!";
var indexNum = 7;
if (text.charAt(indexNum) !== undefined) {
  console.log("Segment exists at index " + indexNum + ": " + text.charAt(indexNum));
} else {
  console.log("Segment does not exist at index " + indexNum);
}

//10

var myString = "abcde";
var characterAtIndex2 = myString.charAt(2);

console.log("Character at index 2:", characterAtIndex2);

//11

var text = "This is a sample text.";
var cha = text.charAt(9);

console.log("Character at index 9:", cha);

//12

var str = "This is a sample string";
var x = str.charAt(str.length - 1);

console.log("Last character", x);

//13
var input = "Example Input";
var cha = input.charAt(4);

console.log("5th character:", cha);

//14

var myString = "Hello, World!"; 
var particularCharacter = 'l'; 
if (myString.charAt(2) === particularCharacter) {
  console.log("The 3rd character is " + particularCharacter);
} else {
  console.log("The 3rd character is not " + particularCharacter);
}

//15

var reply = "No, I haven't seen it. Have you?";
var charArray = []; 
for (var i = 0; i < reply.length; i++) {
  charArray.push(reply.charAt(i));
}
var revisedReply = charArray.join('').replace("no", "yes");
console.log(revisedReply);

//16

var str = "1 apple, 2 oranges, 3 bananas";
var newStr = str.replace("1", "one");
console.log(newStr);
 
//17

var x = "banana";
var y = x.replace(/a/g, "z");

console.log(y);


