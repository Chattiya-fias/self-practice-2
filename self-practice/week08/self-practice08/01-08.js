/* part 01 traversing Nodes*/
/*
1.Node Traversal (เข้าถึงทุกชนิดของโหนด: element, text, comment)
เจอทั้ง <div>, เว้นวรรค (text node), และ comment <!-- -->
- parentNode -> เข้าถึงพ่อแม่ของโหนด
- childNodes -> คืนค่า NodeList ของลูกทั้งหมด (รวม text node และ comment)
- firstChild -> ลูกตัวแรก (อาจเป็น text ได้)
- lastChild -> ลูกตัวสุดท้าย
- previousSibling -> โหนดก่อนหน้า (อาจเป็น text/comment)
- nextSibling -> โหนดถัดไป

2.Element Traversal (เข้าถึง เฉพาะ element เท่านั้น
- parentElement → เข้าถึงพ่อแม่ที่เป็น element
- children → คืนค่า HTMLCollection ของลูก element เท่านั้น
- childElementCount → นับจำนวนลูกที่เป็น element
- firstElementChild → ลูก element ตัวแรก
- lastElementChild → ลูก element ตัวสุดท้าย
- previousElementSibling → element ก่อนหน้า
- nextElementSibling → element ถัดไป
*/

/*
ถ้าต้องการจะนับจำนวนลูก ใช้ .length ได้เลย แต่ถ้าจะใช้ method ของ array ต้อง Array.from
Node Traversal -> childNodes.length (ใช้ length เพราะ childNodes return NodeList (array like))
Element Traversal -> children.length หรือ childElementCount
*/
const getid = document.getElementById('soup') 
console.log(getid.childNodes.length) //9 รวมเว้นวรรค (text node) ไปด้วย

console.log(getid.children.length) //4
console.log(getid.childElementCount) //4

////////////////////////////////////////////////////////////////////////

/* part 02 Selecting Nodes */
/*
[NodeList]
- getElementById(idValue) -> return the first object with ID value
- querySelector(cssSelector) -> return the first element that matches selector
- querySelectorAll(cssSelector) -> return all elements that matches selector
[HTMLCollection]
- getElementsByTagName() -> return element ตาม tag ที่เลือก
- getElementsByClassName() -> return element ตาม class ที่เลือก

Single Node -> getElementById, querySelector
Collection nodes (Array-like (length, index) (NodeList|HTMLCollection)) -> 
querySelectorAll, getElementsByName, getElementsByTagName, getElementsByClassName
*/
//1. query an element node that has id "soup"
const getidSoup = document.getElementById("soup")
console.log(getidSoup)       //<ul id="soup"> 
//2. query an element nodes that have class "soup"
const getclassSoup = document.querySelector(".soup")
console.log(getclassSoup)   //<ul id="soup"> 
//3. query any element nodes that have class "meat"
const getclassMeat = document.querySelectorAll(".meat")
console.log(getclassMeat)    //NodeList [<ul#soup]
console.log(getclassMeat.length) //4
getclassMeat.forEach((ele)=>{console.log(ele)})
//หรือ
console.log(getclassMeat[0]) //Chicken Wings
console.log(getclassMeat[1]) //Chicken Wings
console.log(getclassMeat[2]) //Chicken Wings
console.log(getclassMeat[3]) //Chicken Wings

////////////////////////////////////////////////////////////////////////

/* part 03 guestion01 to access each meat element */
//find meat element that has text value equals to "Beef Soup" <li class="meat">Beef Soup</li> 
//and store in variable beefSoupElement
const meatElement = document.querySelectorAll(".meat")
//ของตัวเอง
const arr = Array.from(meatElement)  //ใช้ method ของ array ต้องแปลง Array.from
const beefSoupElement1 = arr.find(el => el.textContent.trim() === 'Beef Soup')
console.log(beefSoupElement1)
//ของอาจารย์
let beefSoupElement
meatElement.forEach((ele) => {  //Nodelist ใช้ ForEach ได้เลย
  const meatElement = ele
  if (meatElement.textContent.trim().includes("Beef Soup")) {
    beefSoupElement = meatElement
    console.log(beefSoupElement)
  }
})

////////////////////////////////////////////////////////////////////////

/* part 04 question02 access node ues firstElementChild() nextElementSibling() */
//find children of appetizer
//ของตัวเอง
//แบบที่ 1 ไม่ยืดหยุ่น มีจำนวนแน่นอน เพราะถ้ามีการเพิ่มลูกจะต้องมาเขียนเพิ่มใหม่ 
const getIdappetizer = document.querySelector("ul#appetizer>li.vegan") //select จาก css ที่เดียวเลยถ้ารู้
console.log(getIdappetizer)
console.log(getIdappetizer.nextElementSibling)
console.log(getIdappetizer.nextElementSibling.nextElementSibling)
//ของอาจารย์
//แบบที่ 2 ยืดหยุ่น เพราะสามารถใช้ลูปลูกได้เรื่อยๆ ไม่จำกัดจำนวน
// const firstUlElement = document.getElementById("appetizer")  //ถ้าใช้แบบนี้จะได้ทั้ง <ul> -> <ul id="appetizer">
const firstLiElement = document.querySelector("ul#appetizer>li.vegan")  //<li class="vegan">Vegetable Rolls</li> //ตัวแรกที่ตรงกับ selector
let currentNode=firstLiElement
while(currentNode !=null){ //เช็คเพิ่มว่ามี first element ไหม ไม่งั้นจะลูปไม่หยุดเกิด error
    console.log(currentNode)
    currentNode = currentNode.nextElementSibling
}

////////////////////////////////////////////////////////////////////////

/* part 05 access node โดยใช้ getElementsByName() getElementsByTagName() getElementsByClassName() */
//getElementsByName - name attributes (NodeList)
const nameAttrElements = document.getElementsByName("fname") //จะได้ ทุก element ที่มี name="fname"
console.log(nameAttrElements) //NodeList [ input#fname, input#fullname ] //input id fname and input id fullname

//getElementsByTagName - tag name (HTMLCollection)
const liElements = document.getElementsByTagName("li")
console.log(liElements) //HTMLCollection { 0: li.vegan, 1: li.meat, 2: li.meat, 3: li.meat, 4: li.vegan, 5: li.meat, 6: li.vegan, length: 7 }

//getElementsByClassName - class name (HTMLCollection)
const veganClassElements = document.getElementsByClassName("vegan")
console.log(veganClassElements) //HTMLCollection { 0: li.vegan, 1: li.vegan, 2: li.vegan, length: 3 }
Array.from(veganClassElements).forEach((ele)=>{console.log(ele)})

////////////////////////////////////////////////////////////////////////

/* part 06 HTMLCollection Vs. NodeList */
/*
HTMLCollection -> เป็น live collection ของ element node ถ้ามีการเปลี่ยนแปลง DOM จะอัปเดตอัตโนมัติ
               ตัวอย่าง -> ถ้าเพิ่ม <li> เข้าไปใน <ul> HTMLCollection ที่เก็บ <li> เหล่านั้นจะมีสมาชิกเพิ่มขึ้นโดยอัตโนมัติ
               -> สามารถเข้าถึงสมาชิกได้โดย name attribute, id attribute หรือ index number

NodeList -> เป็น static collection ถ้ามีการเปลี่ยนแปลง DOM จะไม่อัปเดตตาม
         -> เข้าถึงสมาชิกของ NodeList ได้เฉพาะ index number เท่านั้น

ทั้ง HTMLCollection และ NodeList → เป็น array-like มีลำดับ index และ .length
                               → ไม่ใช่ array จริง ๆ (ไม่มี .map(), .filter() ฯลฯ เว้นแต่ใช้ Array.from() แปลงก่อน)
*/
const sectionDiv = document.getElementById('soup')

const sectionsbySelectorAll = document.querySelectorAll('.vegan')
const sectionsByClassName = document.getElementsByClassName('vegan')

//create a new li class vegan in soup id
const li = document.createElement('li')
li.className = 'vegan'
li.textContent = 'nushroom soup' 
sectionDiv.appendChild(li)

console.log(sectionsbySelectorAll.length) //3 --> NodeList
console.log(sectionsByClassName.length) //4 --> HTMLCollection เพิ่ม class vegan เข้าไปก็อัปเดตตาม

/* 2 ตัวนี้จะแตกต่างกันที่ค่า return
- childNodes -> return NodeList
- children -> return HTMLCollection
*/
const menu = document.querySelector('.menu')
console.log(menu.childNodes)  //NodeList(7) [text, ul#appetizer, text, ul#soup, text, form, text]
console.log(menu.children)    //HTMLCollection(3) [ul#appetizer, ul#soup, form, appetizer: ul#appetizer, soup: ul#soup]

////////////////////////////////////////////////////////////////////////

/* part 07 Manipulating Nodes */
/*
- appendChild() //adds a newly node to the end of the childNodes list
- createElement() //create a new HTML element
- insertBefore(newNode, referenceNode) //The node to insert becomes the previous sibling of the reference node
- replaceChild(newChild, oldChild)//replaces a child node within the given (parent) node
- removeChild(child)//removes a child node from the DOM and returns the removed node
*/
/* insert <li class="vegan">Cabbage Soup</li> Before <li class="meat">Beef Soup</li> 
and append <li class="vegan">Carrot Soup</li>*/
//1. find parent element
const ulParent1 = document.getElementById("soup")
//2. create new element node
const newLiElement1 = document.createElement("li")
newLiElement1.textContent = "Cabbage Soup"
newLiElement1.setAttribute("class", "vegan")
const newLiElement11 = document.createElement("li")
newLiElement11.textContent = "fish Soup"
newLiElement11.setAttribute("class", "meat")
const newLiElement12 = document.createElement("li")
newLiElement12.textContent = "Carrot Soup"
newLiElement12.setAttribute("class", "vegan")
//3. find reference node
let beefElement1 = null
const liChildren1 = ulParent1.children
Array.from(liChildren1).forEach((ele) => {
  if (ele.textContent.trim() === "Beef Soup") {
    beefElement1 = ele
  }  
})
//4. insertBefore
ulParent1.insertBefore(newLiElement1, beefElement1)
ulParent1.insertBefore(newLiElement11, null)   //เป็นการ insert ไปเป็นตัวสุดท้าย //วิธีที่ 1 
//5. append
ulParent1.appendChild(newLiElement12)    //ใช้ append ก็คือการ insert ไปเป็นตัวสุดท้ายเหมือนกัน //วิธีที่ 2

/* replace Beef Soup with Pork Soup */
//1. find parent element
const ulParent2 = document.getElementById("soup")
//2. create new element node
const newLiElement2 = document.createElement("li")
newLiElement2.textContent = "Pork Soup"
newLiElement2.setAttribute("class", "meat")
//3. find reference node
let beefElement2 = null
const liChildren2 = ulParent2.children
Array.from(liChildren2).forEach((ele) => {
  if (ele.textContent.trim() === "Beef Soup") {
    beefElement2 = ele
  }
})
//4. replace
ulParent2.replaceChild(newLiElement2, beefElement2)

/* remove Vegetable Soup */
//1. find parent element
const ulParent3 = document.getElementById("soup")
//2. get its children
const ulChildren3 = ulParent1.children
let vegetElement3 = null
//3. find element node that satifies condition "Vegetable Soup"
Array.from(ulChildren3).forEach((liEle) => {
  if (liEle.textContent.trim() === "Vegetable Soup") {
    vegetElement3 = liEle
  }
})
//4. remove element 3.
ulParent3.removeChild(vegetElement3)

/* part 08 Node Relationships */
const pElement = document.createElement('p')
const idAttr = document.createAttribute('id')
idAttr.value = 1001
pElement.setAttributeNode(idAttr)
// pElement.setAttribute('id', 1001)
const pText = document.createTextNode('Hello')
pElement.appendChild(pText)
//pElement.textContent = 'Hello'
const divElement = document.querySelector('div')
divElement.appendChild(pElement)

console.log(pElement.parentElement)  //div
console.log(idAttr.parentElement)    //null
console.log(idAttr.ownerElement)     //p#1001
console.log(pText.parentElement)     //p#1101
console.log(pText.parentNode)        //p#1101
/*
  สิ่งที่ตรวจ --> ใช้ property --> หมายเหตุ 
- Node ทั่วไป (Element, Text, etc.) --> parentNode --> ใช้ได้กับทุก node
- เฉพาะ element node --> parentElement --> คืนค่าเฉพาะ element ถ้า parent เป็น text จะได้ null
- Attribute --> ownerElement --> บอกว่า attribute นั้นเป็นของ element ไหน     
- Attribute --> parentElement --> คืนค่า null เพราะ attribute ไม่อยู่ใน DOM tree
*/