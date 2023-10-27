// let myvariable
// myvariable = bob

// ou forma abrevida
// let myvariable = "bob"
const myImage = document.querySelector("img.img-codigo")
let currentImage = "images/gif-do-codigo.gif"


let v1 = "Toque na no gif para trocar para uma imagem"

alert  (v1)
myImage.addEventListener("click",()=>{
	console.log("clicou")
	
	if (currentImage === "./print-codigo.png") {
		myImage.src = currentImage = "./gif-do-codigo.gif"
	} else {
		myImage.src = currentImage = "./print-codigo.png"
	}
})
