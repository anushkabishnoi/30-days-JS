/*
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
*/

var bar = document.getElementById('bar');
var nav = document.getElementById('navbar');

nav.style.width="0px";
bar.onclick = function(){
    if(nav.style.width=="300px"){
        nav.style.width=="0px";
    }
    else{
        nav.style.width=="300px";
    }
}
/*
if(bar)
{
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}
*/