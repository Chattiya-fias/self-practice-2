/* part 03 nodeName, nodeType, nodeValue Properties */
//query div element with id "exampleElement" //ถ้าไม่มี id return null
const divElement = document.getElementById("exampleElement") //จะ return reference สามารถเอา reference ไปถามต่อได้

//div childNodes
const divChild= divElement.childNodes //return NodeList data type (static) //คืนค่าเป็น NodeList ที่รวมทุก node ลูก ทุก node type
console.log(`length: ${divElement.childNodes.length}`) //5
divChild.forEach((child) => { //NodeList มี forEach มาให้ เราใช้ได้เลย แต่ถ้าจะใช้อะไรเกี่ยวกับ array ต้อง Array.from()
  console.log(child.nodeName)
  console.log(child.nodeType)
  console.log(child.nodeValue)
})

//div children 
const divChildren = divElement.children //return HTMLCollection data type (dynamic) //คืนค่า List ลูกที่เป็น element node
console.log(`length: ${divElement.children.length}`)  //1
Array.from(divChildren).forEach((child) => {  //ทุกอันที่ return แบบ HTMLCollection ต้อง Array.from ก่อนเสมอ ไม่มี forEach มาให้
    console.log(child.nodeName)
    console.log(child.nodeType)
    console.log(child.nodeValue)
})

//childNodes length ไม่เท่ากับ children
/*
> childNodes
1. Text node → ช่องว่าง/ขึ้นบรรทัดก่อน comment (\n )
2. Comment node → <!-- This is a comment node -->
3. Text node → ช่องว่าง + ข้อความ " This is some "
4. Element node → <span style="display: none">hidden</span>
4. Text node → " text content.\n"

>children
1. Element node → <span style="display: none">hidden</span>
*/