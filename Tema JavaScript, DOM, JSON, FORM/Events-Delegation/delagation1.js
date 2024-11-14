
document.querySelector("#fondo").addEventListener("click", function () {
    const body = document.querySelector("body")
    const fondo = document.querySelector("#fondo").value

    if (fondo === "dark") {
        body.style.background = "black"
    }
    if (fondo === "light") {
        body.style.background = "blue"
    }
    if (fondo === "minimalist") {
        body.style.background = "purple"
    }
})

