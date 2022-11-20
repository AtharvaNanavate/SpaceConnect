/* ############## Add To Cart Functionality ############### */

let cart_btn = document.querySelector('#cart-btn');
let cart = document.querySelector('#cart');
let product = document.querySelector('.product');
let msg = document.querySelector('#msg')
let cart_badge = document.querySelector('#cart-badge');
let delete_btn = document.querySelector('#delete')
cart_btn.addEventListener('click',() =>{
    cart.style.display == 'block' ? cart.style.display = 'none' : cart.style.display = 'block';
})
let qte = document.querySelector('#quantity');
let total = document.querySelector('#total');


let quantity= 0;
let price = 480.00;

let add_to_cart = document.querySelector('#add-to-cart-btn');
add_to_cart.addEventListener('click', () =>{
    console.log(qte, total)
    quantity = input.value;
    if(quantity != 0){
        cart_badge.innerHTML= quantity;
        cart_badge.style.display='block';
        qte.innerHTML = quantity;
        total.innerHTML = `$${quantity*price}.00`;
        msg.style.display="none";
        product.style.display ="flex"

    }

})
delete_btn.addEventListener('click',()=>{
        quantity = 0;
        msg.style.display="block";
        cart_badge.style.display='none';
        product.style.display ="none"
})


/* ############## Carousel Part ############### */

let next = document.querySelector('#next')
let prev = document.querySelector('#prev')
let carousel = document.querySelector('.carousel-container')
let left = 0;

next.addEventListener('click',() => {
     if (left > -300 ){
       
         carousel.style.left = `${left-100}%`
         left = left-100
         if(left == -300){
            next.classList.add("disabled")
         }
     } 
     if(left < 0){
        prev.classList.remove("disabled")
     }
})
prev.addEventListener('click',() => {
    if(next.classList.contains('disabled')){
        next.classList.remove('disabled');
    }
    
    if (left< 0){
        carousel.style.left =`${left+100}%`
        left = left+100

    }
    if (left==0){
        prev.classList.add("disabled")
    }
})


/* ############## Input number Part ############### */

let minus= document.querySelector('#minus');
let plus = document.querySelector('#plus');
let input = document.querySelector('#qte');
plus.addEventListener('click',() =>{
    input.value = Number(input.value) + 1
})
minus.addEventListener('click',() =>{
    if(Number(input.value)!== 0){
        input.value = Number(input.value) - 1
    }
    
})


/* ############## SlideShow Part ############### */

let img_container = document.querySelector(".image-container");
let thumnails = document.querySelectorAll(".thumbnail-item ");
let last_selected = 0;
let span = document.createElement("span");
span.classList.add('img-mask');

[...thumnails].forEach((thumbnail, index)=>{
   thumbnail.addEventListener('click',() =>{
        img_container.children[0].src = `../images/phoneAssets/image-product-${index+1}.png`;
        thumnails[last_selected].removeChild(document.querySelector('.img-mask'))
        last_selected = index;
        thumnails[last_selected].prepend(span);

    
   })
})


/* ############## Modal Part ############### */

let close_modal = document.querySelector('#close-modal');
let modal = document.querySelector('.modal');
let modal_img_container = document.querySelector('.modal-img-container');
let modal_prev = document.querySelector('#modal-prev');
let modal_next = document.querySelector('#modal-next');
let modal_thumnails = document.querySelectorAll('.modal-thumbs-item')
let modal_span = document.createElement("span");

modal_span.classList.add('modal-img-mask');

img_container.addEventListener('click', ()=>{
    modal.style.display = "flex";
    
})

close_modal.addEventListener('click',()=>{
        modal.style.display = "none";
})
let image_index = 1;
modal_next.addEventListener('click',() =>{
    if(image_index < 4 ){
       modal_thumnails[image_index-1].removeChild(document.querySelector('.modal-img-mask'))
        image_index++;
        modal_img_container.children[1].src = `../images/phoneAssets/image-product-${image_index}.png`
        modal_thumnails[image_index-1].prepend(modal_span)

        
    }else{
        image_index = 1;
        modal_thumnails[image_index-1].prepend(modal_span)
        modal_img_container.children[1].src = `../images/phoneAssets/image-product-${image_index}.png`
    }
 
});
modal_prev.addEventListener('click',() =>{
    if(image_index > 1 ){
        modal_thumnails[image_index-1].removeChild(document.querySelector('.modal-img-mask'))
        image_index--;
        modal_img_container.children[1].src = `../images/phoneAssets/image-product-${image_index}.png`
        modal_thumnails[image_index-1].prepend(modal_span)
        
    }else{
        modal_thumnails[image_index-1].removeChild(document.querySelector('.modal-img-mask'))
        image_index = 4;
        modal_img_container.children[1].src = `../images/phoneAssets/image-product-${image_index}.png`
        modal_thumnails[image_index-1].prepend(modal_span)
    }
 
});
[...modal_thumnails].forEach((thumbs, index)=>{
    thumbs.addEventListener('click',()=>{
        modal_thumnails[image_index-1].removeChild(document.querySelector('.modal-img-mask'))
        image_index = index + 1;
        modal_img_container.children[1].src = `../images/phoneAssets/image-product-${image_index}.png`;
        modal_thumnails[index].prepend(modal_span)
    })
});


/* ############## Hovers ############# */

modal_next.addEventListener('mouseover', () => {
    modal_next.children[0].children[0].style.stroke = '#1AA7EC'
})
modal_next.addEventListener('mouseout', () => {
    modal_next.children[0].children[0].style.stroke = 'black'
})
modal_prev.addEventListener('mouseover', () => {
    modal_prev.children[0].children[0].style.stroke = '#1AA7EC'
})
modal_prev.addEventListener('mouseout', () => {
    modal_prev.children[0].children[0].style.stroke = 'black'
})


var main_img_container = document.getElementById("main-img-container");
var main_img = document.getElementById("main-img");
var magnifying_glass = document.getElementById("mag-glass");
main_img_container.addEventListener("mouseover", func, false);
main_img_container.addEventListener("mouseout", func1, false);

function func()
{
    magnifying_glass.setAttribute("style", "display:block;");
    main_img.setAttribute("style", "opacity:0.6;")
}
function func1()
{
    magnifying_glass.setAttribute("style", "display:none;");
    main_img.setAttribute("style", "opacity:1;")
}

document.getElementById("order_placed_modal_close_button").addEventListener("click", function() {
    document.getElementById("delete").click();
  });