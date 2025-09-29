const rootNode = window.document //window.document เป็น root node

/* part 01 Document Children */
//document หมายถึง ไฟล์ html
//return เป็น reference เปรียบเทียบเป็น reference 
const html1 = document.documentElement  //จะอ้างถึงอะไรใน ocject ของเอกสารต้องผ่าน root node //return referencd to <html>
const firstNode = document.firstChild //เลือกลูกแรกแบบ any type
const firstElementChildNode = document.firstElementChild  //เลือกเฉพาะลูกที่เป็น element //กรองแค่ element type ให้
const lastNode = document.lastChild
const lastElementChildNode = document.lastElementChild
console.log(document)
console.log(html1)
console.log(firstNode)
console.log(firstElementChildNode)
console.log(lastNode)
console.log(lastElementChildNode)

const head = document.head //common property //return referencd to <head>
const body = document.body //common property //return referencd to <body>

/* part 02 node type */
/*
- Document Type node (!DOCTYPE)
- Element node (หลัก) value 1
- Attribute node (หลัก) value 2
- Text node (หลัก) value 3
- Root/Document node (หลัก) value 9
- Comment node
*/ 
console.log(document.body) //common property
console.log(document.body.nodeName) //common property
console.log(document.body.nodeType) //common property
console.log(document.body.nodeValue) //common property

if (document.body.nodeType === Node.ELEMENT_NODE){
    console.log(`body is an element node type`)
}
if (document.body.nodeType === Node.ATTRIBUTE_NODE){
    console.log(`body is an attribute node type`)
}
if (document.body.nodeType === Node.TEXT_NODE){
    console.log(`body is a text node type`)
}

/*
ลองเช็คดูว่า element node, text node , attribute node 
มี type , name , value อะไร
-> element node
type - 1
name - Element.tagName (ชื่อแท็ก เช่น "DIV", "P", "SPAN") เป็นตัวพิมพ์ใหญ่
value - null
-> text node
type - 2
name - #text
value - ข้อความที่อยู่ใน node นั้น (เช่น "Hello World")
-> attribute node
type - 3
name - ชื่อแอตทริบิวต์ (เช่น "id", "class")
value - ค่าของแอตทริบิวต์ (เช่น "myDiv")
-> document node
name - #documemt
value - null
*/