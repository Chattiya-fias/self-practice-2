/* part 06 */
//ของตัวเอง
// <!-- 1. find all drinks under <ul id="drink"> -->
const drinks2 = document.getElementById("drink")
const alldrinks = drinks2.children //คืนค่า List ลูกที่เป็น element node
Array.from(alldrinks).forEach(drink => console.log(drink))
// <!-- 2. get <li>Tea</li>  and then
//  2.1 previous element sibling
//  2.2 next element sibling
//  2.3 parent element  -->
const findTea = alldrinks[1]
console.log(findTea.textContent)
console.log(findTea.previousElementSibling)
console.log(findTea.nextElementSibling)
console.log(findTea.parentElement)

//ของเพื่อน
// <!-- 1. find all drinks under <ul id="drink"> -->
const drinks = document.querySelector('#drink')   //selector id ตาม css //ถ้ามี id = "drink" จะอ้างอิงไปที่ element นั้น ถ้าไม่มีจะ null
// ในข้อ 2 เพื่อนไม่ได้แสดงผลตามโจทย์
const firstChildNode = drinks.firstElementChild
const nextFirstChild = firstChildNode.nextElementSibling
const lastChildNode = drinks.lastElementChild
const previousLastChild = lastChildNode.previousElementSibling
 
console.log(firstChildNode)
console.log(nextFirstChild)
console.log(lastChildNode)
console.log(previousLastChild)

//ของอาจารย์
// <!-- 1. find all drinks under <ul id="drink"> -->
let el = document.getElementById("drink")
const allDrinks = el.children //child element
Array.from(allDrinks).forEach((drink) => console.log(drink))
// <!-- 2. get <li>Tea</li>  and then
//  2.1 previous element sibling
//  2.2 next element sibling
//  2.3 parent element  -->
let teaDrink = allDrinks[1]
console.log(teaDrink.textContent)
console.log(teaDrink.previousElementSibling)
console.log(teaDrink.nextElementSibling)
console.log(teaDrink.parentElement)
 
//ของตัวเองที่ทำออกมา เหมือนกับของอาจารย์ เพราะเป็นวิธีการ query ตามแนวทางที่อาจารย์สอน เป็นการเลือกด้วย id

//ของเพื่อนที่ทำออกมาเลือกใช้ property .querySelector() เป็นการเลือกด้วย CSS โดยจะ return element ตัวแรกที่ match 
//(หากอยากได้ทุก element ที่ match ให้ใช้ .querySelectorAll() ที่คืนค่าเป็น NodeList) 

//document.getElementById("drink") VS document.querySelector("#drink") --> selector จะยืดหยุ่นกว่า