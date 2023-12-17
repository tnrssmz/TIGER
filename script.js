let links = document.querySelectorAll('.navBar a').forEach(links => {
    links.innerHTML = links.innerText.split('').map((letters, i) => `<span style="transition-delay:${i*40}ms;">${letters}</span>`).join('');
})






let cursor = document.querySelector('#cursor')
document.addEventListener('mousemove', (e) =>{
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
})





const formSearch = document.querySelector('form.search')
const searchButton = document.querySelector('#searchButton')

searchButton.addEventListener('click', ()=>{
    if(formSearch.style.display !='block'){
        formSearch.style.display ='block'
    }else{
        formSearch.style.display ='none'
    }   
})


const shopButton = document.querySelector('#shopButton')
const productSlideCont = document.querySelector('.productSlideContainer')

shopButton.addEventListener('click', ()=>{
    
    if(productSlideCont.style.display !='block'){
        productSlideCont.style.display ='block'
    }else{
        productSlideCont.style.display ='none'
    }
})

const closeIcon = document.querySelector('#closeIcon')

productSlideCont.style.display ='none'
closeIcon.addEventListener('click', ()=>{
    if(productSlideCont.style.display = 'block'){
        productSlideCont.style.display = 'none'
    }
})

window.addEventListener('resize', ()=>{
    if(productSlideCont.style.display = 'block'){
        productSlideCont.style.display = 'none'
       
    }
    
})








const boxes = document.querySelectorAll('.boxSlide')
const boxes2 = document.querySelectorAll('.boxSlide2')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
   const triggerBottom = window.innerHeight / 5 * 3

   boxes.forEach(box =>{
    const boxTop = box.getBoundingClientRect().top

    if(boxTop < triggerBottom){
        box.classList.add('boxSlideShow')
    }else{
        box.classList.remove('boxSlideShow')
    }
   })
   boxes2.forEach(box =>{
    const boxTop = box.getBoundingClientRect().top

    if(boxTop < triggerBottom){
        box.classList.add('boxSlideShow')
    }else{
        box.classList.remove('boxSlideShow')
    }
    
   })   
}




// const paw = document.querySelector('.paw')

// window.onscroll = ()=>{
    
// let pos = window.scrollY - 800;
// paw.style.left = `${pos}px`
// }





VanillaTilt.init(document.querySelectorAll(".productCategoriesBox"), {
    max: 25,
    speed: 400
});






const tigerHead = document.querySelector('.tigerHead')
window.addEventListener('scroll', function(){

    let value = window.scrollY;
    tigerHead.style.bottom = value * 0.47 + 'px';

})



const notes1 = document.querySelector('.notes1')
window.addEventListener('scroll', function(){

    let value = window.scrollY;
    notes1.style.bottom = value * 0.8 + 'px';

})
const notes2 = document.querySelector('.notes2')
window.addEventListener('scroll', function(){

    let value = window.scrollY;
    notes2.style.top = value * 0.8 + 'px';

})


// REGISTER LOGİN AÇMA

const profilButton = document.getElementById('profilButton')


profilButton.addEventListener('click', ()=>{
    window.location.href = "./registerlogin.html";
})














