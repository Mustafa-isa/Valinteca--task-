//start bring data
let data = [
    {
        product_img:"./images/giorgio-trovato-K62u25Jk6vo-unsplash.jpg",
        product_name:"trovato",
       product_price:1241,
       added_to_cart : false

    },
    {
        product_img:"./images/giorgio-trovato-p0OlRAAYXLY-unsplash.jpg",
        product_name:"unsplash",
       product_price:43,
       added_to_cart : false

    },
    {
        product_img:"./images/grant-ritchie-n_wXNttWVGs-unsplash.jpg",
        product_name:"richie",
       product_price:121,
       added_to_cart : false

    },
    {
        product_img:"./images/kiran-ck-LSNJ-pltdu8-unsplash.jpg",
        product_name:"kiran",
       product_price:34,
       added_to_cart : false

    },
    {
        product_img:"./images/olena-sergienko-ElfJDs4LAQk-unsplash.jpg",
        product_name:"olena",
       product_price:11,
       added_to_cart : false

    },
    {
        product_img:"./images/ruslan-bardash-4kTbAMRAHtQ-unsplash.jpg",
        product_name:"ruslan",
       product_price:121,
       added_to_cart : false

    }
]
//render element in page


const container =document.querySelector(".container")
data.forEach(function (el){
    const item = `
      
    <div class="product">
    <div class="imgContainer">
     <img src="${el.product_img}" alt="" class="image">
    </div>
    <div class="info">
     <h2 class="name">${el.product_name}</h2>
 
     <span class="price">${el.product_price} <i class="fa-solid fa-dollar-sign"></i></span>

     <div class="buttons">
         <button id="add" condation =${el.added_to_cart}> add</button>
 <button class="show" >show</button>
    </div>
 </div>
 </div>
    
    `
    
container.innerHTML += item
})
//loop data
function showElement(){

    let showBtn = document.querySelectorAll('.show')
    console.log(showBtn)
   showBtn.forEach(btn =>{

btn.addEventListener('click' ,function(){
   let productCloned =  btn.closest(".product")
addModul(productCloned)
})
})

}
//show element in a moduul
function addModul(elementShowed){


    let modul = document.querySelector(".modul")
    let modulcontent = document.getElementById("modulcontent")
modul.classList.add("show")
let sourceImg = elementShowed.querySelector("img").src
let name  = elementShowed.querySelector(".name").innerText
let price = elementShowed.querySelector(".price").innerText
console.log(price ,name)

modulcontent.innerHTML = `
<img src="${sourceImg}" />
<h2>${name}</h2>
<p>${price} <i class="fa-solid fa-dollar-sign"></i></p>
<button class="deleteFromMODUL"><i class="fa-solid fa-xmark"></i><ibutton>

`
let deleteFromMODUL =document.querySelector(".deleteFromMODUL")
deleteFromMODUL.addEventListener('click' ,function(){

    modul.classList.remove("show")
})
}
showElement()
