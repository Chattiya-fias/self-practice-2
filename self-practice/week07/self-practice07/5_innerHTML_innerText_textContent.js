/* part 05 innerHTML, innerText, and textContent */
/*
innerHTML 
– คืนค่า HTML ทั้งหมด
innerText 
- คืนค่าข้อความที่มองเห็นจริง ๆ บนหน้าเว็บ
- ละเว้นแท็ก HTML แต่ยังประมวลผล CSS
textContent 
– คืนค่า ข้อความทั้งหมดที่อยู่ใน element
- จะรวมข้อความที่ซ่อนด้วย (display:none)
- ไม่สนใจ CSS
*/

let el = document.getElementById("demo")
console.log(el.innerHTML)    // <b>Hello</b> world (Hello เป็นตัวหนาจริง)
console.log(el.innerText)    // Hello \n world (ไม่มี hidden)
console.log(el.textContent)  // Hello hidden world

const p1Element = document.createElement('p')
p1Element.innerHTML = "<i>Sample Content</i>"
const p2Element = document.createElement('p')
p2Element.innerText = "<i>Sample Content</i>"
const p3Element = document.createElement('p')
p3Element.textContent = "<i>Sample Content</i>"
document.body.appendChild(p1Element)
document.body.appendChild(p2Element)
document.body.appendChild(p3Element)