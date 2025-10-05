/* part 09 dataset and classList */
/*
classlist -> เป็นตัวช่วยของ JavaScript สำหรับจัดการ class ของ element ทำให้สามารถเพิ่ม ลบ สลับ หรือเช็ค class ได้ง่าย ๆ
          -> เป็น property ของ element ใน DOM
          -> เป็น read-only (ไม่สามารถเปลี่ยนตัว object ได้ตรง ๆ แต่สามารถแก้ไข class ข้างในได้แบบสะดวก โดยไม่ต้องแก้ string ของ className)
          -> return DOMTokenList ซึ่งเป็น object ที่เก็บ รายชื่อ class ทั้งหมดของ element นั้น
          -> เหมาะกับการเปลี่ยน CSS แบบ dynamic (เช่น คลิกปุ่มแล้วเปลี่ยนสี เปลี่ยน layout ฯลฯ)
*/  

/* ขยายความ " สามารถแก้ไข class แบบสะดวก โดยไม่ต้องแก้ string ของ className " */
<div id="box" class="red big"></div>
//ตัวอย่างการแก้ไข class ด้วย className ***ทุก element มี property ชื่อ className ซึ่งเป็น string ของ class ทั้งหมด***
const box = document.getElementById("box")
box.className = "green big"  // แทนที่ class เดิมทั้งหมด

//ตัวอย่างการแก้ไข class ด้วย classList ที่สะดวกกว่า
box.classList.remove("red")
box.classList.add("green")
box.classList.replace("big","small")
console.log(box.classList.contains("big"))  //false  //ตรวจสอบ class return true or false
console.log(box.classList.item(0))  //small
console.log(box.classList.length)   //2

/* Key features and methods*/
/*
- add(className1, className2, …) -> เพิ่ม class หนึ่งตัวหรือหลายตัวให้กับ element
                                 -> ถ้า class นั้นมีอยู่แล้ว จะไม่เพิ่มซ้ำ
- remove(className1, className2, …) -> ลบ class หนึ่งตัวหรือหลายตัวออกจาก element
- toggle(className, force) -> สลับสถานะของ class
                           -> ถ้ามีอยู่ = ลบออก 
                           -> ถ้าไม่มี = เพิ่มเข้าไป
- force (boolean) -> เป็น option
                  -> true → เพิ่ม class แน่นอน
                  -> false → ลบ class แน่นอน
- contains(className) -> return true or false ว่า element มี class นั้นหรือไม่
- replace(oldClassName, newClassName) -> แทนที่ class เดิมด้วย class ใหม่
- item(index) -> return class ที่อยู่ตำแหน่ง index ใน list ของ class
- length -> returh จำนวน class ทั้งหมดของ element                               
*/
const buttons = document.getElementsByTagName("button")
Array.from(buttons).forEach((button) => {
  const box = document.getElementById("box")
  button.addEventListener("click", () => {
        if (button.id === "add") {
        box.classList.add("bordered")
      } else 
      if (button.id === "remove") {
        box.classList.remove("bordered")
      } else 
      if (button.id === "toggle") {
        box.classList.toggle("bordered")
      }
  })
})