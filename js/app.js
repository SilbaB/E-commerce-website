const accordion= document.getElementsByClassName('container');

const hamburgerMenu=document.querySelector('.menuBar');
const myList=document.querySelector('.nav-list');

for(let i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click',function (){
        this.classList.toggle('active')
    })
}

hamburgerMenu.addEventListener('click',()=>{
    myList.classList.toggle('activeList');
    menubar.innerHTML="x";
});