// let myvariable
// myvariable = bob

// ou forma abrevida
// let myvariable = "bob"
const myImage = document.querySelector("img.img-codigo")
let currentImage = "images/gif-do-codigo-leve.gif"


let v1 = "Toque na no gif para trocar para uma imagem"

alert  (v1)
myImage.addEventListener("click",()=>{
	console.log("clicou")
	
	if (currentImage === "images/print-codigo.png") {
		myImage.src = currentImage = "images/gif-do-codigo-leve.gif"
	} else {
		myImage.src = currentImage = "images/print-codigo.png"
	}
})
