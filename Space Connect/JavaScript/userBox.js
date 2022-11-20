/* ############## cart icon ############# */
let user_btn = document.querySelector('#user-img');
let box = document.querySelector('#guest');

user_btn.addEventListener('mouseover',() =>{
    box.setAttribute("style", "display:block;");
});

user_btn.addEventListener('mouseout',() =>{
    box.setAttribute("style", "display:none;");
});