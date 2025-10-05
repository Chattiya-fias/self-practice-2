/* part 09 dataset and classList */
/*
dataset -> วิธีที่ให้ JavaScript อ่านค่าใน HTML ที่เราซ่อนไว้ใน attribute ที่ขึ้นต้นด้วย data- เช่น data-id, data-name
        -> เข้าถึงและจัดการกับ custom data attributes (attribute ที่ขึ้นต้นด้วย data-) ที่อยู่ใน element ของ HTML
        -> retuen object ชนิด DOMStringMap เก็บ key–value สำหรับแต่ละ data- attribute ที่อยู่ใน element นั้น
        e.g data-id="123" --> xxx.dataset.id
*/  

//แบบที่ 1
const buttons = document.getElementsByTagName("button")
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    //write your code here
    const selectedColor = button.dataset.color
    const box = document.getElementById("box")
    box.style.backgroundColor = selectedColor
  })
})
 
//แบบที่ 2
// const buttonRed = document.querySelector("button[data-color='red']")
// console.log(buttonRed)
// buttonRed.addEventListener("click", () => {
//     //write your code here (separate code in each button)
//     const box = document.querySelector("#box")
//     box.style.backgroundColor = "red"
// })
// const buttonBlue= document.querySelector("button[data-color='blue']")
// console.log(buttonBlue)
// buttonBlue.addEventListener("click", () => {
//     //write your code here (separate code in each button)
//     const box = document.querySelector("#box")
//     box.style.backgroundColor = "blue"
// })
// const buttonGreen = document.querySelector("button[data-color='green']")
// console.log(buttonGreen)
// buttonGreen.addEventListener("click", () => {
//     //write your code here (separate code in each button)
//     const box = document.querySelector("#box")
//     box.style.backgroundColor = "green"
// })