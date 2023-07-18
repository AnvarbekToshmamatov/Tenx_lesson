

const li = document.getElementsByTagName('li')

const navItems=document.getElementsByClassName('nav-item')
const getEyeIcon = document.getElementById('eye_icon')
const searchinput=document.getElementById('search_input')
const image=document.getElementsByClassName('img1')

// function foo{
//     const currentInputType=document.getElementById('search_input').getAttribute('type')

//     if(currentInputType==='password'){
//         document.getElementById('searcg_input').setAttribute('type','text')
//         getEyeIcon.setAttribute('class','fa-solid fa-eye')
//     }else{
//         document.getElementById('search_input').setAttribute('type','password')
//         getEyeIcon.setAttribute('class','fa-solid fa-eye-slah')
//     }
// }

function changeImg(){

    if(image.getAttribute('class')){
        image.setAttribute('src','https://kun.uz/news/2023/07/17/qrim-koprigida-yana-portlash-asosiy-malumotlar') 
    }else{
       image.setAttribute('src','https://kun.uz/news/2023/07/16/inauguratsiya-istefolar-va-jazo-muqarrarligining-yoqligi-hafta-dayjesti')
    }    
}