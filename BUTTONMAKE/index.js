let bgE1 = document.getElementById("bgcolor")
let colE1 = document.getElementById("color")
let fontE1 = document.getElementById("fontweight")

let radiusE1 = document.getElementById("radius")

let btnE1 = document.getElementById("button")
let newE1 = document.getElementById("new")

btnE1.addEventListener("click",()=>{
   

let bgcol = bgE1.value;
let col = colE1.value
let font= fontE1.value
let rad = radiusE1.value

newE1.style.backgroundColor = bgcol

newE1.style.color = col
newE1.style.fontWeight = font
newE1.style.borderRadius = rad




})


