//start bring data
let data = [
  {
    product_img: "./images/giorgio-trovato-K62u25Jk6vo-unsplash.jpg",
    product_name: "trovato",
    product_price: 1241,
    added_to_cart: false,
  },
  {
    product_img: "./images/giorgio-trovato-p0OlRAAYXLY-unsplash.jpg",
    product_name: "unsplash",
    product_price: 43,
    added_to_cart: false,
  },
  {
    product_img: "./images/grant-ritchie-n_wXNttWVGs-unsplash.jpg",
    product_name: "richie",
    product_price: 121,
    added_to_cart: false,
  },
  {
    product_img: "./images/kiran-ck-LSNJ-pltdu8-unsplash.jpg",
    product_name: "kiran",
    product_price: 34,
    added_to_cart: false,
  },
  {
    product_img: "./images/olena-sergienko-ElfJDs4LAQk-unsplash.jpg",
    product_name: "olena",
    product_price: 11,
    added_to_cart: false,
  },
  {
    product_img: "./images/ruslan-bardash-4kTbAMRAHtQ-unsplash.jpg",
    product_name: "ruslan",
    product_price: 121,
    added_to_cart: false,
  },
];
let slideArr
let num 
if(localStorage.getItem('dataCart')){

slideArr = JSON.parse(localStorage.getItem('dataCart'))
}else{
  slideArr =[]
}
if(localStorage.getItem('num')){

  num =localStorage.getItem('num')
  }else{
   num =0
  }

//render element in page

const container = document.querySelector(".container");
data.forEach(function (el) {
  const item = `
      
    <div class="product">
    <div class="imgContainer">
     <img src="${el.product_img}" alt="" class="image">
    </div>
    <div class="info">
     <h2 class="name">${el.product_name}</h2>
 
     <span class="price">${el.product_price} <i class="fa-solid fa-dollar-sign"></i></span>

     <div class="buttons">
         <button id="add" class ="add" add__to_cart =${el.added_to_cart} > add</button>
 <button class="show" >show</button>
    </div>
 </div>
 </div>
    
    `;

  container.innerHTML += item;
});
//loop data
function showElement() {
  let showBtn = document.querySelectorAll(".show");
  console.log(showBtn);
  showBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      let productCloned = btn.closest(".product");
      addModul(productCloned);
    });
  });
}
//show element in a moduul
function addModul(elementShowed) {
  let modul = document.querySelector(".modul");
  window.location.href = "#modul";
  let modulcontent = document.getElementById("modulcontent");
  modul.classList.add("show");
  let sourceImg = elementShowed.querySelector("img").src;
  let name = elementShowed.querySelector(".name").innerText;
  let price = elementShowed.querySelector(".price").innerText;
  console.log(price, name);

  modulcontent.innerHTML = `
<img src="${sourceImg}" />
<h2>${name}</h2>
<p>${price} <i class="fa-solid fa-dollar-sign"></i></p>
<button class="deleteFromMODUL"><i class="fa-solid fa-xmark"></i><ibutton>

`;
  let deleteFromMODUL = document.querySelector(".deleteFromMODUL");
  deleteFromMODUL.addEventListener("click", function () {
    modul.classList.remove("show");
  });
}
showElement();
document.getElementById("numProduct").innerText = 0;
//show  down side
function showSide() {
  let minu = document.querySelector(".dropdown");
  let cart = document.querySelector(".cart");
  let hideBtn = document.querySelector(".deleteFromMODUL");
  function downSide() {
    minu.classList.toggle("shown");
  }
  function hide() {
    minu.classList.remove("shown");
  }
  cart.addEventListener("click", downSide);
  hideBtn.addEventListener("click", hide);
}
//
showSide();
///add product to cart
const addCart = function () {
  let addBtn = document.querySelectorAll(".add");

  addBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      console.log(btn);

      if (btn.getAttribute("add__to_cart") === "false") {
        num++;
        document.getElementById("numProduct").innerText = num;
        console.log("add");
        btn.setAttribute("add__to_cart", true);
        btn.innerText = "remove";
        let productAdded = btn.closest(".product");

        let sourceImgAdded = productAdded.querySelector("img").src;
        let nameAdded = productAdded.querySelector(".name").innerText;
        let priceAdded = productAdded.querySelector(".price").innerText;

        let product = {
          name: nameAdded,
          price: priceAdded,
          img: sourceImgAdded,
          id: Math.random(),
        };
        id = product.id;

        slideArr.push(product);
        console.log(slideArr);
        localStorage.setItem("dataCart" ,JSON.stringify(slideArr))
    renderCart()

      } else {
        num--;
        document.getElementById("numProduct").innerText = num;
        console.log("remove");
        btn.innerText = "add";
        btn.setAttribute("add__to_cart", false);
        removeProduct(slideArr, id);

        
      }
    });
  });
};
//
localStorage.setItem("num" ,num)
addCart();

// delete product from array on click
function removeProduct(arr, id) {

  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
    renderCart()
  }

  return arr;
 
}
//render element to cart and delete it 

 function renderCart(){
let itemContent = document.querySelector(".down-container")
console.log(itemContent)
console.log(slideArr)
itemContent.innerHTML =''


slideArr.forEach(function(el)
{

itemContent.innerHTML +=`
<div class="item-container">
<div class="item">
  <img src="${el.img}" alt="">

<h2> ${el.name}</h2>
<p>${el.price} <i class="fa-solid fa-dollar-sign"></i></p>
</div>
</div>

`
})

 }

 renderCart()
 //end