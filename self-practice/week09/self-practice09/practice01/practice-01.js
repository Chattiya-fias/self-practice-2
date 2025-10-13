const createButton = document.getElementById('submit')
const pElement = document.querySelector('p')

// ตรวจสอบว่ามีช่องไหนว่าง
const inputValidation = document.querySelectorAll("input")
inputValidation.forEach(input =>
    input.addEventListener("blur", (event) => {
        if (event.target.value.trim().length === 0) {
            pElement.style.color = "red"
            pElement.textContent = "missing some values, please try again!"
        }
    }
))

createButton.addEventListener("click",(event)=>{
    event.preventDefault()
    
    // ตรวจสอบ password กับ confirm password
    const completed = document.querySelectorAll("input")
    const allFilled = Array.from(completed).every(input => input.value.trim().length !== 0)
    if (allFilled) {
        pElement.style.color = "green"
        pElement.textContent = "your data completed"

        const password = document.querySelector("input[name='password']")
        const confirmPassword = document.querySelector("input[name='confirm-password']")
            if(confirmPassword.value !== password.value){
                pElement.style.color = "red"
                pElement.textContent = "password and confirm do not match, check again"
            }
    }
})