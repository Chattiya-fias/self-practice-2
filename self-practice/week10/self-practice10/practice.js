const bgColor = document.getElementById("bgColor")
const fColor = document.getElementById("fontColor")
const fSize = document.getElementById("fontSize")
const saveBtn = document.getElementById("saveBtn")
const resetBtn = document.getElementById("resetBtn")

document.addEventListener('DOMContentLoaded',()=>{
    const getbgColor = localStorage.getItem("Background Color")
    const getfColor = localStorage.getItem("Font Color")
    const getfSize = localStorage.getItem("Font Size")

    if (getbgColor !== null) {document.body.style.backgroundColor = bgColor}
    if (getfColor !== null) {document.body.style.color = fColor}
    if (getfSize !== null) {document.body.style.fontSize = fSize}
})

saveBtn.addEventListener('click',()=>{
    localStorage.setItem("Background Color", bgColor.value)
    localStorage.setItem("Font Color", fColor.value)
    localStorage.setItem("Font Size", fSize.value)

    // อัปเดตหน้าเว็บทันที
    document.body.style.backgroundColor = bgColor.value
    document.body.style.color = fColor.value
    if (fSize.value === 'small') document.body.style.fontSize = "10px"
    if (fSize.value === 'medium') document.body.style.fontSize = "20px"
    if (fSize.value === 'large') document.body.style.fontSize = "30px"
})

resetBtn.addEventListener('click',()=>{
    localStorage.clear()

    // รีเซ็ตหน้าเว็บทันที
    document.body.style.backgroundColor = ""
    document.body.style.color = ""
    document.body.style.fontSize = ""
    
    // รีเซ็ต input fields
    bgColor.value = ""
    fColor.value = ""
    fSize.value = ""

})