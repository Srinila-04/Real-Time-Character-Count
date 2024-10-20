const textArea = document.getElementById("textArea")
const totalChar = document.getElementById("total-char")
const remainingChar = document.getElementById("remaining-char")

textArea.addEventListener("keyup",() => {
    updateCounter()
})
updateCounter()
function updateCounter(){
    totalChar.innerText = textArea.value.length
    remainingChar.innerText = textArea.getAttribute("maxLength") - textArea.value.length
}