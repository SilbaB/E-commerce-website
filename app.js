let btn=document.querySelector('.btn');

btn.onclick= function(){
    btn.classList.toggle('dark-version');
}


// let menuIcon= document.querySelector('.menu');
// let menuList=document.querySelector('.nav-links');

// console.log(menuIcon);
// menuIcon.onclick = function(){
//     menuList.classList.toggle('show-menu');
//     if(menuList.style.display==="block"){
//         menuList.style.display='none';
//     }else{
//         menuList.style.display="block";
//     }
// }
function displayMenu(){
    let x=document.querySelector('.nav-links');
    if(x.computedStyleMap.display === "block"){
        x.style.display="none";
    }else{
        x.style.display="block";
    }
}