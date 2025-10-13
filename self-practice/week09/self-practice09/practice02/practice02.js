const divElement = document.getElementById('keyLog')

const inputElement = document.querySelector("input[type='text']")
inputElement.addEventListener('keydown', (event) => {
    const pElement = document.createElement('p')

    if(event.key === 'Enter'){
        pElement.style.color = 'blue'
        pElement.textContent = 'You pressed: Enter'
    } else {
        pElement.style.color = 'black'
        pElement.textContent = `You pressed: ${event.key}`
    }

    divElement.appendChild(pElement)
})

/*
-> keydown	เกิดเมื่อตอนเริ่มกด ตรวจจับปุ่มพิเศษเช่น Enter หรือ Backspace เป็นต้นได้ (สามารถใช้ได้กับทุกปุ่ม)
-> keypress เกิดเมื่อตอนกดปุ่มตัวอักษร ตรวจจับปุ่มพิเศษไม่ได้ (ใช้ได้เฉพาะปุ่มพิมพ์)
-> keyup เกิดเมื่อตอนปล่อยปุ่ม ตรวจจับปุ่มพิเศษได้ (เหมาะกับการตรวจค่าหลังพิมพ์)
*/