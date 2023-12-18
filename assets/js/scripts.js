const menu = document.querySelector("#btn-menu")

menu.addEventListener("click", () => {

    console.log("clicou")

})

const sorte = document.querySelector("html body main div form div.actions button:nth-child(2)")

sorte.addEventListener("click", () => {
    console.log("está com sorte")

    location.href = "https://class.hcode.com.br"

})

