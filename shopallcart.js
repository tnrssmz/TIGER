const wrapper = document.querySelector('.wrapper')
const basket = document.querySelector('.basket')
const itemCount = document.getElementById('item-count')  // SEPET İÇİNDEKİ SAYIYI ÇAĞIRDIK
const emptyCart = document.querySelector('.emptyCart')

function startPage(){
    const sepet = JSON.parse(localStorage.getItem('sepet'))

    if(sepet){
        for(let i of sepet){
            sepeteEkle(i)
        }
    }else{
        localStorage.setItem('sepet', [])
    }
}

startPage()

function sepeteEkle(urun){
    
    const div = document.createElement('div')
    div.classList.add('cartParts', 'd-flex', 'align-items-center', 'justify-content-between' ,'p-2',`urun${urun.id}`)
    div.innerHTML=
    `
        <img src="${urun.resim}" width="100px" height="100px" alt="">
        <p class="m-0 productName" >${urun.isim}</p>
        <p class="m-0 fiyat">${urun.fiyat}</p>
        <div class='d-flex align-items-center gap-2 urunSayisi'>
            <button onclick=azalt(${urun.id}) class='btn btn-secondary' >-</button>
            <p class="m-0" ><span class="adet">${urun.adet}</span></p>
            <button onclick=arttir(${urun.id}) class='btn btn-secondary' >+</button>
        </div>
        
        <p class="m-0 silecek" onclick=sil(${urun.id}) ><i class='bx bx-trash'></i></p>
    `

    basket.append(div)
    itemCount.innerHTML++  // SEPET İÇİNDEKİ SAYIYI ÜRÜN EKLEDİKÇE ARTTIRDIK
   
    const sepet = JSON.parse(localStorage.getItem('sepet'));
    sepet.push(urun);



        // SEPET BOŞ YAZISI BOŞKEN YAZIYOR AMA SEPETTE ÜRÜNLERİN HEPSİNİ ÇIKARINCA OTOMATİK GELMİYOR.

        calcSum()
}



function arttir(id){
    const div = document.querySelector(`.urun${id}`)
    let fiyat = div.querySelector('.fiyat')
    let adet = div.querySelector('.adet')
    let birimFiyat =fiyat.textContent / adet.textContent
    

    let urunler = JSON.parse(localStorage.getItem('sepet'))
    let ilgiliUrun = urunler.find(i => i.id == id)
    console.log(ilgiliUrun)

    let art = adet.textContent
    
    art++
    adet.textContent = art
    fiyat.textContent = birimFiyat * art
    
    ilgiliUrun.fiyat = birimFiyat*art
    ilgiliUrun.adet = art
    
    localStorage.setItem('sepet',JSON.stringify(urunler))

    calcSum()
}

function azalt(id){
    
    const div = document.querySelector(`.urun${id}`)
    let fiyat = div.querySelector('.fiyat')
    let adet = div.querySelector('.adet')
    let birimFiyat =fiyat.textContent / adet.textContent
    

    let urunler = JSON.parse(localStorage.getItem('sepet'))
    let ilgiliUrun = urunler.find(i => i.id == id)
    console.log(ilgiliUrun)


    let azalt = adet.textContent
    if(azalt > 1){
        azalt--
        adet.textContent = azalt
        fiyat.textContent = birimFiyat * azalt
      
        ilgiliUrun.fiyat = birimFiyat*azalt
        ilgiliUrun.adet = azalt

        localStorage.setItem('sepet',JSON.stringify(urunler))

    }else{
        sil(id)
    }

    calcSum();
}

function sil(id){
    const div = document.querySelector(`.urun${id}`)
    let urunler = JSON.parse(localStorage.getItem('sepet'))
    let guncelHal = urunler.filter((urun )=> urun.id != id)
    
    localStorage.setItem('sepet',JSON.stringify(guncelHal))
    div.remove()
    itemCount.innerHTML--  // SEPET İÇİNDEKİ SAYIYI ÜRÜN SİLDİKÇE AZALTTIK
    
    calcSum()
}


function calcSum(){
    let urunler = JSON.parse(localStorage.getItem('sepet'))
    let sums = 0;

    for(let i = 0; i < urunler.length; i++){
        var urun = urunler[i];
        sums += parseInt(urun.fiyat);
    }

    
    const div = document.querySelector(`.cartButtons`)
    let fiyat = div.querySelector('.cartTotalSpan');
    fiyat.textContent = sums;

    if(urunler.length == 0){
        emptyCart.style.display ='block'
    }else{
        emptyCart.style.display ='none'
    }
}

let url = 'https://dummyjson.com/products'

fetch(url)
    .then(res => res.json())
    .then(data => dataYazdir(data))


function dataYazdir(bilgi){
    for( let i of bilgi.products){
        
        let yildizSayisi = Math.round(i.rating)
        
        const col = document.createElement('div')
        col.classList.add('col-lg-4','col-sm-6','col-12')
        let deneme = ''
        for(let i=1;i<yildizSayisi;i++){
            deneme +=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                     </svg>`  
        }
        col.innerHTML = 
        `
            <div class="card " id=${i.id}>
                <div class="card-header d-flex justify-content-between align-items-center">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item">${i.category}</li>
                        <li class=" breadcrumb-item" aria-current="page">${(i.title).slice(0,10)}...</li>
                        <span>
                        ${deneme}
                    </span>
                    </ol>
                    
                </div>
                <div class="card-body p-0">
                    <img src="${i.thumbnail}" class="w-100" style="height: 300px;" alt="">
                </div>
                <div class="card-footer">
                    <p class="isim" >${i.title}</p>
                    <p class='tasma'>${i.description}</p>
                    <p> $ <span class="fiyat" >${i.price}</span> </p>
                    <button onclick=satinAl(${i.id}) class="btn">Add to Card</button>
                </div>
            </div>
        `
        
        wrapper.append(col)      
    }
}

function satinAl(id){
    const card = document.getElementById(id)

    const isim = card.querySelector('.isim').textContent
    const fiyat = card.querySelector('.fiyat').textContent
    const resim = card.querySelector('img').src
    
    
    
    const urun = {
        'id':id,
        'isim':isim,
        'fiyat':fiyat,
        'resim':resim,
        'adet':1
    }
    
    let urunler = JSON.parse(localStorage.getItem('sepet') )
    let ilgiliUrun = urunler.find(i => i.id == urun.id)
    if(ilgiliUrun == undefined){
        urunler.push(urun)

    }else if(ilgiliUrun){
        ilgiliUrun.adet +=1
        let guncelFiyat = ilgiliUrun.adet * fiyat
        ilgiliUrun.fiyat = guncelFiyat
        
        
    }
    
    const sepettekiCard = basket.querySelector(`.urun${id}`)
    
    if(sepettekiCard != null){
        const adet = sepettekiCard.querySelector('.adet')
        const price = sepettekiCard.querySelector('.fiyat')
        
        let art = Number(adet.textContent)
        art++

        let guncelFiyat = fiyat * art
     
        adet.textContent = art
        price.textContent = guncelFiyat
        
    }else{
        sepeteEkle(urun)
    }
    
    localStorage.setItem('sepet',JSON.stringify(urunler))

}







const sepetButon = document.querySelector('#sepetButon')

sepetButon.addEventListener('click', () => {
    if (basket.style.display != 'block') {
        basket.style.display = 'block'
    } else {
        basket.style.display = 'none'
    }
})



const cartBack = document.querySelector('#cartBack')

cartBack.addEventListener('click', () => {
    window.location.href = "./shopall.html";
})