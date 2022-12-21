const devText = document.querySelector(".main-text")
const buttons = document.querySelectorAll(".buttons")
const smallText = document.querySelector(".small-text")


document.querySelector(".r").addEventListener("click", () =>{
    devText.style.color = 'red'
    smallText.style.color = "red"
    smallText.textContent = "This is RED"
    smallText.classList.add("active")
})
document.querySelector(".g").addEventListener("click", () =>{
    devText.style.color = 'green'
    smallText.style.color = "green"
    smallText.textContent = "This is GREEN"
    smallText.classList.add("active")
})
document.querySelector(".b").addEventListener("click", () =>{
    devText.style.color = 'blue'
    smallText.style.color = "blue"
    smallText.textContent = "This is BLUE"
    smallText.classList.add("active")
})
document.querySelector(".y").addEventListener("click", () =>{
    devText.style.color = 'yellow'
    smallText.style.color = "yellow"
    smallText.textContent = "This is YEllOW"
    smallText.classList.add("active")
})

