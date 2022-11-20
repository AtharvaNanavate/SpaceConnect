/* ############## Landing Page Parallax Effect ############### */

var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);


/* ############## Cart Icon Click ############### */

let cart_btn = document.querySelector('#cart-btn');
let cart = document.querySelector('#cart');

cart_btn.addEventListener('click', () => {
    cart.style.display == 'block' ? cart.style.display = 'none' : cart.style.display = 'block';
})
