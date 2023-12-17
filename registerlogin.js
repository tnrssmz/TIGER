const registerName = document.getElementById('registerName')
const registerPass = document.getElementById('registerPass')
const registerBtn = document.getElementById('registerBtn')

const loginName = document.getElementById('loginName')
const loginPass = document.getElementById('loginPass')
const loginBtn = document.getElementById('loginBtn')



const frontrl = document.querySelector('.frontrl')
const backrl = document.querySelector('.backrl')




function ilkcalisacak(){
    let kayitlilar = JSON.parse(localStorage.getItem('kayit'))
    if(!kayitlilar){
        localStorage.setItem('kayit','[]')
    }
}
ilkcalisacak()

registerBtn.onclick = kayit
function kayit (){
    if(registerName.value.trim() != '' && registerPass.value.trim() != '' && registerMail.value.trim() != ''){
        let kayitlilar = JSON.parse(localStorage.getItem('kayit'))
        let kullanici = {
            username:registerName.value,
            pass:registerPass.value
        }
        kayitlilar.push(kullanici)
        localStorage.setItem('kayit',JSON.stringify(kayitlilar))
        
        
        function showPopup() {
            let popup2 = document.getElementById("popup2");
            popup2.style.display = "block";  
            setTimeout(function () {
                popup2.style.display = "none";
            }, 3000);      
        }
        showPopup()
        
    }else{
        function showPopup() {
            let popup = document.getElementById("popup");
            popup.style.display = "block"; 
            setTimeout(function () {
                popup.style.display = "none";
            }, 3000);   
        }
        showPopup()
        
    }
}


// LOGIN POPUPLAR
function giris () {
    let kayitlilar = JSON.parse(localStorage.getItem('kayit'))

    let eslesme = kayitlilar.filter(uye => uye.username == loginName.value && uye.pass == loginPass.value)
    let eksik = loginName.value.trim() == '' || loginPass.value.trim() == ''
    if(eslesme.length != 0){
        function showPopup() {
            let popup5 = document.getElementById("popup5");
            popup5.style.display = "block"; 
            setTimeout(function () {
                popup5.style.display = "none";
            }, 3000);   
        }
        showPopup()

        window.location.href = "./index.html";
    }
    
    else if(eksik){
        function showPopup() {
            let popup4 = document.getElementById("popup4");
            popup4.style.display = "block"; 
            setTimeout(function () {
                popup4.style.display = "none";
            }, 3000);   
        }
        showPopup()
    }
    
    else{
        
        function showPopup() {
            let popup3 = document.getElementById("popup3");
            popup3.style.display = "block"; 
            setTimeout(function () {
                popup3.style.display = "none";
            }, 3000);   
        }
        showPopup()
    }
}



