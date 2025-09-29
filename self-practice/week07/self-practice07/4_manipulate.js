/* part 04 Manipulating Nodes */
//create <p id="int141">INT141</p> as a child of <div id="subject">

//1. create <p> element
const divElement = document.getElementById('subject')
const pElement = document.createElement("p")

//1.5 create attribute id
const idAttr = document.createAttribute('id')
idAttr.value = "int141"
const styleAttr = document.createAttribute('style')
styleAttr.value = "color: red"
const nameAttr = document.createAttribute('name')
nameAttr.value = "core"
pElement.setAttributeNode(idAttr)
pElement.setAttributeNode(styleAttr)
pElement.setAttributeNode(nameAttr)
// pElement.setAttribute("id", "INT141") //วิธีลัด
// pElement.setAttribute("style", "color: red") //วิธีลัด
// pElement.setAttribute("name", "core") //วิธีลัด

//2. create text node 3. then append to <p> child
const pText = document.createTextNode('INT141')
pElement.appendChild(pText)
// pElement.textContent = 'INT141' //ใช้แบบนี้แทนที่ 2 บรรทัดบนได้ ได้ผลแบบเดียวกัน เป็นวิธีลัด

//4. append <p> with text node to div element
divElement.appendChild(pElement)

/* 
- Attribute node ไม่ถือเป็นส่วนนึงของ DOM tree
- อ้างถึง parent หรือ sibling จะเป็น null ทั้งหมด
- ให้ข้อมูลได้แค่ว่า attribute เป็นของ element ไหน โดยเรียกผ่าน owner element
- จะเข้าถึง owner ต้องเข้าถึง attribute ตัวที่ต้องการให้ได้ก่อน
*/

//get attribute value of 'id'
console.log(pElement.getAttribute("id")) //int141
//get attribute value of 'style'
console.log(pElement.getAttribute("style")) //color: red
console.log(pElement.getAttributeNode("id").ownerElement) //<p id="int141" style="color: red">INT141</p>

/* 
กรณีใช้วิธีลัด 
-> pElement.setAttribute("id", "INT141") 
-> pElement.setAttribute("style", "color: red")
-> pElement.setAttribute("name", "core")
มันจะไม่มีตัวแปรเก็บ attribute ต้องเข้าถึง attribute node ผ่าน index 
แต่ถ้ามีหลายตัวเป็นวิธีที่ไม่ค่อยดี 
*/
console.log(pElement.attributes[0]) //id="int141"
console.log(pElement.attributes[1]) //style="color:red"
console.log(pElement.attributes[0].ownerElement) //<p id="int141" style="color: red">INT141</p>

const pAttributes = pElement.attributes //get all attributes
for (let i = 0; i < pAttributes.length; i++) {
    const name = pAttributes[i].name //get attribute name
    const value = pAttributes[i].value //get attribute value
    if (pAttributes[i].name === "id") console.log(name, value)
}