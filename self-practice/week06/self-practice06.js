/* part 01 functional programming concept*/
//แนวคิดที่โปรแกรมถูกสร้างขึ้นจากการนำฟังก์ชันมาประยุกต์ใช้และประกอบเข้าด้วยกัน
//หลีกเลี่ยงการเปลี่ยนแปลง state และ mutable data ได้
//มองฟังก์ชันเป็น first-class citizens (เช่น string, number หรือ object)
//เขียนแบบ Declarative และ Composable ได้

//Compose Function คือ การนำหลายฟังก์ชันมาผสานเข้าด้วยกัน 
//ฟังก์ชันตัวหนึ่งจะใช้ output ของอีกฟังก์ชันเป็น input ต่อไป

const greet = (name,formatter) => formatter(name)  //higher-order function
const shout = text => text.toUpperCase() + '!!!'   //first-class citizens
const hello = text => 'Hello' + ' ' + text         //first-class citizens
console.log(greet('Alice' , shout)) //Alice!!!
console.log(greet('Alice' , hello)) //Hello Alice

/* part 02 Declarative code VS Imperative code */
//Declarative code บอกว่าต้องการอะไร
const numbersD = [1, 2, 3, 4, 5]
const doubledEvenNumbersD = numbersD
  .filter(num => num % 2 === 0)   // เลือกเฉพาะเลขคู่
  .map(num => num * 2)            // คูณสองกับเลขคู่เหล่านั้น
console.log(doubledEvenNumbersD)  // [4, 8]
//Imperative code บอกวิธีทำทีละขั้นตอน
const numbersI = [1, 2, 3, 4, 5]
const doubledEvenNumbersI = []
for (let i = 0; i < numbersI.length; i++) {
  if (numbersI[i] % 2 === 0) {
    doubledEvenNumbersI.push(numbersI[i] * 2)
  }
}
console.log(doubledEvenNumbersI) // [4, 8]

/* part 03 Immutability */
//ใน Functional Programming เน้นเรื่อง immutability (ข้อมูลที่ถูกสร้างขึ้นมาแล้วจะไม่ถูกแก้ไขเปลี่ยนแปลง)
//ถ้าอยากได้ผลลัพธ์ใหม่ จะต้องสร้าง data structure ใหม่ แทนที่จะไปแก้ของเดิม
/* ข้อดี : 
1. ปลอดภัยจาก side effect
2. โค้ดอ่านง่าย ทดสอบง่าย
3. สามารถ compose function ต่อได้โดยไม่กลัวข้อมูลต้นฉบับเปลี่ยน
*/
const numbers = [1, 2, 3, 4, 5]

const addOne = (x) => x + 1
const isEven = (x) => x % 2 === 0
const sum = (total, x) => total + x

//compose function
const incrementedNumbers = numbers.map(addOne)
const evenNumbers = incrementedNumbers.filter(isEven)
const total = evenNumbers.reduce(sum, 0)

console.log('Total of even numbers:', total)         
console.log('Original numbers:', numbers)   // เป็น [1, 2, 3, 4, 5] เหมือนเดิมไม่เปลี่ยน

/* part 04 pure function VS impure function */
//pure function ฟังก์ชันที่ output ขึ้นอยู่กับ input เท่านั้น 
//ไม่มี side effect (ไม่แก้ไขตัวแปร global, ไม่เปลี่ยนแปลงค่า input โดยตรง, ไม่ทำงานที่กระทบกับโลกภายนอก)
const pureFunc = (a, b) => a * b
console.log(pureFunc(2, 3)) // 6
console.log(pureFunc(2, 3)) // 6

//impure function ไปอ้างถึงตัวแปรอื่นนอกฟังก์ชัน จะมี side effect ได้ในฟังก์ชัน
let x = 10
let m = 20
function impureFunc(arg){
arg = arg + x * 2   //x เป็นตัวแปรอื่นนอกฟังก์ชัน
return arg
}
console.log(impureFunc(m)) //40

//global variable ประกาศภายนอกฟังก์ชัน เข้าถึงได้ทุกฟังก์ชันในโปรแกรม เกิด side effect ได้ เป็น impure
//local variable ประกาศภายในฟังก์ชันหรือblock  เข้าถึงได้เฉพาะในblock ไม่เกิด side effect เป็น pure
let y = 100    //global
let sum1 = 5   //global
sum1 = 2       //globa
function getScore(x) {
  let y = 10        //local
  let mid = 40      //local
  let final = 30    //local
  function doSomething() {   //เป็น nested function ที่เป็น closure จำค่า environment ของ parent function (y, mid, final, x ของ getScore)
    console.log(`dosomething: ${y + sum1 + x + mid + final}`)
    //83
    //y(global), sum1(global), y(local), x(local(parameter)), mid(local), final(local)
  }
  return y + sum1 + x + mid + final
}
const score = getScore(1)
console.log(score)
//console.log(x, mid, final) //cannot access เพราะเป็น local variable มองเห็นได้เฉพาะภายในฟังก์ชันเท่านั้น นอกฟังก์ชันไม่มีสิทธิ์เข้าถึง

/* part 05 closure */
/*
- Closure คือการรวมกันของ function ที่ถูกห่อหุ้ม (enclosed) เอาไว้
- สามารถอ้างอิงไปยังสภาพแวดล้อมรอบๆ ที่ฟังก์ชันนั้นถูกประกาศได้
- nested function เป็น closure สืบทอดและเข้าถึงตัวแปรหรือ arguments ของ parent function ได้
- แต่ outer function ไม่สามารถเข้าถึงตัวแปรหรือฟังก์ชันที่ถูกประกาศภายใน inner function ได้
*/
const z = 1
function makeAdder(x){
    console.log(x)
    console.log(z)
    function doSomething(y){    //function closure
        return x + y + z
    }
    return doSomething    /* เป็นการ return ฟังก์ชัน (closure ต้อง return function) */
    //return doSomething()  /* เป็นการ return result of function */ 
}
const result = makeAdder(10)
console.log(typeof result) //function
console.log(result) //[Function: doSomething]
console.log(result(10))

/* part 06 practice in class-06*/
//practice-G1
/* 
Design a function idGenerator that generates unique IDs automatically.
Each time the function is called, it should return the next ID number,
staring form 1 and increasing by 1
*/
function idGenerator(){
    let id = 0
    function nextId(){
        id++
        return id
    }
    return nextId
}
const idGen = idGenerator()
console.log(idGen())
console.log(idGen())
console.log(idGen())

//practice-G2
/*
Write function outerFunction(a) that contains a nested function inmerFunction(b).
The outerFunction should return the result of a + b by calling innerFunction.
*/
function outerFunction(a){
    function innerFunction(b){
        return a+b
    }
    return innerFunction
}
const addFive = outerFunction(5)
console.log(addFive(3))
const addTen = outerFunction(10)
console.log(addTen(2))

/* part 07 Project-01 */
// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = []

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  // TODO: Add the quote object to the quotes array
  quotes.push(quote)
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  // TODO: Remove the quote object from the array using the given id
  const index = quotes.findIndex(quote => quote.id === id)
  if (index != -1){
    quotes.splice(index,1)
  }
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  for(let i in quotes){
    if(quotes[i].id === id){
      quotes[i].content = updatedQuote.content
      quotes[i].author = updatedQuote.author
    }
  }
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  // TODO: Return the quotes array
  return quotes
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({ id: 1, content: 'Stay hungry, stay foolish.', author: 'Steve Jobs' })
addQuote({ id: 2, content: 'Do or do not. There is no try.', author: 'Yoda' })
addQuote({
  id: 3,
  content: 'Simplicity is the ultimate sophistication.',
  author: 'Leonardo da Vinci'
})
console.log(getAllQuotes())
// TODO: Delete 1 quote using deleteQuote()
deleteQuote(2)
console.log(getAllQuotes())
// TODO: Update 1 quote using updateQuote()
updateQuote(1, { content: 'Stay hungry. Stay foolish.', author: 'Jobs' })
// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes())
