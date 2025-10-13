/* part 01 System Dialogs */
/*
- alert() ให้ information แสดงผลด้านเดียว มี ok ให้กด 
- confirm() ให้ ok กับ cancel เป็น boolean
- prompt() รับ input จาก user โดยมี 2 parametors ให้ใส่คือ
-> 1. text to display to the user
-> 2. default value for the text box 
-> โดยจะ return value จาก text box ซึ่งถ้ามี text box จะเป็น text box แต่ถ้าไม่มีจะ empty
-> ถ้ากด cancel หรือ ปิด จะ return null
*/
                    //text to display        //default value 
const whom = prompt("what is your name?","typing your name")
const confirmYourName = confirm(`You are ${whom}`)
confirmYourName ? alert(`hello, ${whom}`) : alert(`hello ,quest`)

////////////////////////////////////////////////////////////// 

/* part 02 Event Concept*/
/*
- เมื่อหน้าเว็บมีปฏิสัมพันธ์กับผู้ใช้จะเกิดการเปลี่ยนแปลงบน DOM object
- เมื่อเกิด event จะเกิด event object ทำให้รู้ว่าเกิด event ที่ DOM object ไหนและเป็นประเภทอะไร
- event มี handlers function ไว้จัดการเมื่อเกิดเหตุการณ์
- event สามารถนำไปผูกกับ object ใดๆที่อยู่ใน DOM ได้
- การใช้งาน ให้เอา event ไป subscribed กับ node ที่เราต้องการหรือสนใจ (to using listeners) (also called handlers) 
  และเมื่อ event นั้นมาถึง จะส่ง function ที่กำหนดไว้ไปจัดการ
- observer pattern คือหนึ่งใน pattern ที่ใช้เขียนโปรกแกรม โดย pattern นี้ถูกใช้นำมาจัดการ event
*/

////////////////////////////////////////////////////////////// 

/* part 03 Event Propagation */
/* 
- หมายถึง ทิศทางการไหลหรือการแพร่กระจายตอนเกิดเหตุการณ์
- โดยมี three phases event flow สามารถไหลได้ 2 ทิศทาง
คือ บนลงล่างหรือล่างขึ้นบน ขึ้นอยู่กับ parametor ที่ส่งไปตอนเกิด event
-> 1. in the capturing phase -> ไหลจาก root ไป object จุดที่เกิดเหตุการณ์
-> 2. in the target phase -> จุดเกิดเหตุการณ์
-> 3. in the bubbling phase -> ไหลจาก object จุดที่เกิดเหตุการณ์ ขึ้นไปยัง root (default)

- property .eventPhase เอาไว้ดูได้ว่าอยู่ phase ไหน return เป็น ตัวเลข
-> 1 = capturing phase
-> 2 = at target node
-> 3 = bubbling phase
(ทำ event flow capturing จะเห็น 1 กับ 2)
(ทำ event flow bubbling จะเห็น 2 กับ 3)
*/

//กำหนด Event Flow ใน Boolean value (parametor ตัวที่ 3)
//true -> capturing 
//false -> bubbling
const buttonElement1 = document.querySelector("div>button")
buttonElement1.addEventListener("click", (e) => {
    console.log("part 03 : Button was clicked!")
    console.log(`part 03 : event.eventPhase: ${e.eventPhase}`)
},true)
const divElement1 = document.querySelector("div")
divElement1.addEventListener("click", (e) => {
    console.log("part 03 : Div element eas click!")
    console.log(`part 03 : event.eventPhase: ${e.eventPhase}`)
},true)
const bodyElement1 = document.body
bodyElement1.addEventListener("click", (e) => {
    console.log("part 03 : Body element was click!")
    console.log(`part 03 : event.eventPhase: ${e.eventPhase}`)
},true)

////////////////////////////////////////////////////////////// 

/* part 04 Event Handlers */
/*
//ways of using web events
-> 1. event handlers properties (ควรเลี่ยง)
-> 2. adding and removing event handlers (ให้ใช้วิธีนี้)

ต้องมี three arguments --> addEventListener/removeEventListener(eventType, handlerFunction, eventFlow)
1.the event type's name to handle
2.the event handler or event listener function (แนบ listener function)
3.Boolean value to call handler during the capturing phase (true) or the bubbling phase (false)

addEventListener()
- adding สามารถ add ได้มากกว่า 1 (เป็น event type เดียวกันก็ได้) แล้วมันจะทำงานตามลำดับ
removeEventListener()
- remove ต้องไม่เขียนแบบ anonymous function ให้เขียนเป็น function ที่อ้างถึงชื่อ 
- ต้องเขียนจาก parametor และ pattern เดียวกับตอน add
- ถ้าเขียน add มาเป็น anonymous function ก็ remove ไม่ได้
*/

const okButton = document.querySelector("div>button")
console.log(okButton)

//1. annonymous handler fuction with bubble event flow (default)
// okButton.addEventListener("click", () => {
//     alert("part 04 : Button was clicked!")
// })
// okButton.removeEventListener("click", () => {  //anonymous function remove ไม่ได้
//     alert("part 04 : Button was removed!")
// })

//2. name function with bubble event flow (default)
function getTarget(event){                                     //เวลาเกิด event เบราว์เซอร์จะโยน event object มาให้ ถ้าจะใช้งาน ต้องกำหนด parametor เพื่อรับมันมาใข้
    alert(`part 04 : ${event.target.tagName} was fired!`)      //event object มีหลาย property
}                                                              //.tagname หรือ .nodeName เป็น property เอาไว้โชว์ชื่อ
function getMessage(){
    const yourMessage = prompt("part 04 : What is your message", "typing your message...")
    alert(yourMessage)
}

//3. add more than one handler function (ทำงานตามลำดับ)
okButton.addEventListener('click',getTarget)
okButton.addEventListener("click", getMessage)

//4. remove handler function
okButton.removeEventListener("click", getTarget) //เหลือ function getMessage อย่างเดียว

////////////////////////////////////////////////////////////// 

/* part 05 Event properties amd method */
const buttonElement2 = document.querySelector("div>button")
buttonElement2.addEventListener("click", (e) => {
    console.log(`part 05 : event.target: ${e.target}`)  //เกิดเหตุการณ์ที่จุดไหนให้โยน node onject ของ DOM มา
    console.log(`part 05 : event.currentTarget: ${e.currentTarget}`)  //
    console.log(`part 05 : event.type: ${e.type}`)
    console.log(`part 05 : event.eventphase: ${e.eventPhase}`)
    console.log("part 05 : Button was clicked!")
})
const divElement2 = document.querySelector("div")
divElement2.addEventListener("click", (e) => {
    console.log(`part 05 : event.target: ${e.target}`)
    console.log(`part 05 : event.currentTarget: ${e.currentTarget}`)
    console.log(`part 05 : event.type: ${e.type}`)
    console.log(`part 05 : event.eventphase: ${e.eventPhase}`)
    console.log("part 05 : Div element eas click!")
})
const bodyElement3 = document.body
bodyElement3.addEventListener("click", (e) => {
    console.log(`part 05 : event.target: ${e.target}`)
    console.log(`part 05 : event.currentTarget: ${e.currentTarget}`)
    console.log(`part 05 : event.type: ${e.type}`)
    console.log(`part 05 : event.eventphase: ${e.eventPhase}`)
    console.log("part 05 : Body element was click!")
})

/*
//target VS currenttarget (ถ้าใส่ true จะมองเห็นความแตกต่างชัดเจน)
- target คือ จุุดที่เกิดเหตุการณ์
- currentTarget คือ node ที่ลงทะเบียน listener function ที่ถูกแนบเอาไว้
*/

/* 
preventDefault() เป็น method type function เอาไว้ยกเลิก default behavior
*/
const aELement = document.querySelector("a")
aELement.addEventListener("click",(e) => {
    e.preventDefault()
    console.log("part 05 : visit link was canceled")
})

//when click submit button, prevent default behavior and validate form data
const submitButton = document.querySelector("input[type='submit']")
console.log(submitButton)
// function validate() {  //ใช้แบบนี้ก็ได้ กรณีรู้ชื่อ element แต่จะไม่ general
//     const fname = document.getElementsByName('fname')[0].value
//     const lname = document.getElementsByName('lname')[0].value
//     if (fname.trim() == '' || lname.trim() == '') {
//         console.log('part 05 : input is empty')
//     } else {console.log('input already')}
// }
submitButton.addEventListener("click",(e)=>{
    //prevent default behavior
    e.preventDefault()
    //validation data
    //validate()  เขียน function validate แยกแล้วเรียกใช้
    const inputElements = document.querySelectorAll("input")
    inputElements.forEach((ele)=>{  //ใช้วนลูปเอาจะ gerenal 
        const attr = ele.getAttribute("type")
        if (attr === "text"){
            if(ele.value.trim().length === 0){  //element ที่เป็น input ถ้าอยากได้ค่าต้องใช้ .value property
                console.log("part 05 : invalid data")
            }
        } else {
            console.log("part 05 : valid data")
        }
    })
})

//////////////////////////////////////////////////////////////

/* part 06 Event types */
/*
-> state change events -> กลุ่ม event ที่ไม่ต้องมี user มาปฏิสัมพันธ์ สถานะของแอพเปลี่ยน
- DOMContentLoaded ใช้กับ document
- load ใช้กับ window
- beforeunload
- unload(deprecated)
- resize ใช้กับ window
- scroll ใช้กับ window
*/
document.addEventListener('DOMContentLoaded', () => {  //DOMContentLoaded มาก่อน load
    console.log('part 06 : DOM is ready!')
    const heading = document.createElement('h2')
    heading.textContent = 'part 06 : This was added when DOM was ready!'
    document.body.appendChild(heading)
    console.log('part 06 : Heading added now.')
})
window.addEventListener('load', () => {
    console.log('part 06 : All resources (images, CSS, scripts) are fully loaded!')
    console.log('part 06 : Page is fully loaded')
})

const info = document.getElementById('info')
window.addEventListener('resize', () => {
    info.textContent = `part 06 : Window resized: ${window.innerWidth} x ${window.innerHeight}`
})
window.addEventListener('scroll', () => {
    info.textContent = `part 06 : Scrolled to Y: ${window.scrollY}`
})

/*
-> focus events
- focus
- blur
*/

/*
-> mouse event
mousedown -> mouseup -> click
- click
- mousedown
- mouseup
- mouseover เม้าส์ over ที่ element ไหน
- mouseout เอาเม้าส์ออกจาก over
- mousemove เคลื่อนย้าย cursor คือการ move
*/
info.addEventListener('mouseout', (event) => {
    console.log('part 06 : mouse out')
})
info.addEventListener('mouseover', (event) => {
    // console.log('part 06 : mouse over')
    window.addEventListener('mousemove', (event) => {  //เอา mouse over เข้าไปถึง detect mouse move
        console.log("part 06 : mouse move")
        info.textContent = `part 06 : Mouse at X: ${event.clientX}, Y: ${event.clientY}`
    }) 
})
// window.addEventListener('mousemove', (event) => {
//   info.textContent = `Mouse at X: ${event.clientX}, Y: ${event.clientY}`
// }) 

/*
-> keyboard events
keydown -> keypress -> keyup
- keydown and keypress จะถูก fired ก่อนที่จะมีการ change ใน text box
- keyup จะถูก fired หลังการ change ใน text box แสดงผลออกมาแล้ว
*/
//สามารถใช้ .key property เช็ค key ที่กดได้
const inputMessage = document.getElementById('message')
inputMessage.addEventListener('keyup', (event) => {
  if (event.key === 'Enter')  console.log(event.target.value)  //event.target คือ text box
})

/*
-> input events
เอาไว้ใช้กับ <input> <select> หรือ <textarea> (change ใช้กับ textarea ไม่ work)
*/
const messsage = document.querySelector('#message')
const display = document.querySelector('p')
messsage.addEventListener('input',function(){   //input detect ทุกๆ key ที่พิมพ์ มาแสดง
    display.textContent = messsage.value
})
messsage.addEventListener('change',function(){     //change รอ enter ถึงเอา text box มาแสดง
    display.textContent = messsage.value
})

