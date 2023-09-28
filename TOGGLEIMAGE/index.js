let imgE1=document.getElementById("img")


let state = true
imgE1.addEventListener("click",()=>{
    if(state==true){
        imgE1.src="nature image.webp"
    }
    else{
        imgE1.src="bird.jpeg"

    }
    state = !state
})