const accordion= document.getElementsByClassName('container');

// accordion.forEach(item, ()=>{
//     item.addEventListener('click',()=>{
//         item.classList.toggle('active');
//    })
// })
for(let i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click',function (){
        this.classList.toggle('active')
    })
}
