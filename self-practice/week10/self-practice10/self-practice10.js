/* part 04 Cookies in JavaScript */
/*
- document.cookie ใช้เพื่ออ่านและเขียนคุกกี้ที่เชื่อมโยงกับหน้าเว็บนั้น
- เมื่อต้องการอ่านค่า จาก document.cookie จะได้ค่าทั้งหมดของคุกกี้ในหน้านั้นเป็น string เดียว โดยคุกกี้แต่ละตัวคั่นด้วยเครื่องหมาย ;
เช่น name1=value1; name2=value2; name3=value3
- การเขียนจะอัปเดตเฉพาะคุกกี้ที่ระบุชื่อไว้เท่านั้น ไม่กระทบคุกกี้อื่น ๆ ที่มีอยู่ก่อนหน้า
- หากคุกกี้นั้นไม่มี HttpOnly JavaScript จะสามารถ read หรือ write ได้ตามปกติ
- รูปแบบการตั้งค่าคุกกี้จะเหมือนกับ Set-Cookie header ของฝั่งเซิร์ฟเวอร์
*/
document.cookie = `theme=dark; expries=${new Date(2925,9,15)}`
document.cookie = "theme=light"  //light ไปเขียนทับ dark
document.cookie = "username=Chattiya; domain=example.com; path=/; max-age=60";  //คุกกี้นี้ใช้ได้ทุกหน้าใน example.com และจะมีอายุ 60 วินาที
console.log(document.cookie)

/*
//encodeURIComponent()
- ฟังก์ชันที่ใช้เข้ารหัส (encode) ค่าคุกกี้ เพราะค่าของคุกกี้ห้ามมีเครื่องหมายบางตัว
- ปลอดภัย best practice
- ตัวอักษรบางตัว จะไม่ถูกเข้ารหัส [A–Z, a–z, 0–9, -, _, ., !, ~, *, ', (, )]
- อักขระพิเศษที่ “จะถูกเข้ารหัส” [; , / ? : @ & = + $ #]

//decodeURIComponent()
- ใช้แปลงกลับ
*/
console.log(document.cookie = encodeURIComponent("username") + "=" 
                            + encodeURIComponent("Chattiya") 
                            + "; domain=example.com; path=/")

const url = "https://www.sit.kmutt.ac.th"
console.log(`${encodeURIComponent(url)}`)   //https%3A%2F%2Fwww.sit.kmutt.ac.th
console.log(`${decodeURIComponent(url)}`)   // expected output: https://www.sit.kmutt.ac.th


import { CookieUtil } from "./cookieUtil.js"
CookieUtil.set("cartId", "abc123", new Date(2025, 9, 20))
console.log(CookieUtil.get("cartId"))
console.log(document.cookie)

CookieUtil.unset("theme")
console.log(document.cookie)

//////////////////////////////////////////////////////////

/* part 05 Web Storages*/
/*
- สามารถเก็บคู่ค่า key/value ได้โดยวิธีนี้เข้าใจง่ายกว่าการใช้คุกกี้มาก
- ให้การเข้าถึง session storage หรือ local storage ของโดเมนใดโดเมนหนึ่ง โดยสามารถเพิ่ม แก้ไข หรือ ลบข้อมูลที่เก็บไว้ได้
- ใช้งานผ่าน property Window.sessionStorage และ Window.localStorage สามารถใช้เพื่อบันทึก อ่าน หรือ ลบข้อมูลได้
- จะมีออบเจ็กต์ Storage แยกกันสำหรับ sessionStorage และ localStorage ทำงานและควบคุมแยกจากกัน

//Cookies vs Session Storage vs Local Storage
- cookies -> มีวันหมดอายุตามที่ตั้งไว้ | ใช้ได้ทั้ง Client และ Server | ส่งไปพร้อม HTTP Request 
- session storage -> ลบเมื่อปิดแท็บหรือเบราว์เซอร์ การเปิดแท็บใหม่ของหน้าเดียวกันจะถือเป็น session ใหม่ | ใช้ได้เฉพาะ Client | ไม่ถูกส่งพร้อม HTTP Request 
- local storage -> ไม่มีวันหมดอายุ (ถาวรจนกว่าจะลบ) เก็บข้อมูลข้าม session ได้ | ใช้ได้เฉพาะ Client | ไม่ถูกส่งพร้อม HTTP Request 

--> cookies เหมาะสำหรับข้อมูลที่ต้องใช้ร่วมกับเซิร์ฟเวอร์ (เช่น token, session ID)
--> Session Storage และ Local Storage เหมาะกับการเก็บข้อมูลชั่วคราวหรือถาวรฝั่งผู้ใช้ เช่น การตั้งค่าธีม, ฟอนต์ ฯลฯ
*/

//Session Storage
let visit1 = sessionStorage.getItem('visit')
if (visit1 === null) {sessionStorage.setItem('visit', 1)} 
else {sessionStorage.setItem('visit', ++visit1)}
alert(`Session Storage visit: ${sessionStorage.getItem('visit')}`)

sessionStorage.setItem('image', 'myCat.png')
sessionStorage.removeItem('image')
// sessionStorage.clear() ลบทั้งหมด

//Local Storage
let visit2 = localStorage.getItem('visit')
if (visit2 === null) {localStorage.setItem('visit', 1)} 
else {localStorage.setItem('visit', ++visit2)}
alert(`Local Storage visit: ${localStorage.getItem('visit')}`)

localStorage.setItem('image', 'myCat.png')
localStorage.removeItem('image')
// localStorage.clear() ลบทั้งหมด

console.log(localStorage.length) // แสดงจำนวน key

for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i)) // แสดงชื่อ key ทั้งหมด
}

