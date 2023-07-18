// const btn = document.getElementById('btn')
// // debugger
// // btn.removeAttribute('class')

// let currentTheme = 'light'
// function changeTheme() {
//   if (currentTheme === 'light') {
//     btn.setAttribute('class', 'btn-dark')
//     currentTheme = 'dark'
//   } else {
//     btn.setAttribute('class', 'btn-light')
//     currentTheme = 'light'
//   }
// }

const aside = document.getElementsByTagName('aside')
let isOpenMenu = false

function handleMenu() {
  if (isOpenMenu) {
    aside[0].removeAttribute('class')
    isOpenMenu = false
  } else {
    aside[0].setAttribute('class', 'active')
    isOpenMenu = true
  }
}

const image=document.getElementById('img')
const oppsty=document.getElementById('section1')


function changeImg(){
    if( (image.getAttribute('id')==='img')){
        image.setAttribute('src',"img/close-svgrepo-com.svg")
        image.setAttribute('id','img1')
        oppsty.removeAttribute('class')
        oppsty.setAttribute('class','kkk')
    }else{
       image.setAttribute('src',"img/align-justify-svgrepo-com.svg")
       image.setAttribute('id','img')
       oppsty.setAttribute('class','section')
    }   
}

const image1=document.getElementById('btn22')

function changeImg1(){
   if(image1.getAttribute('id')==='btn22'){
    image1.setAttribute('src','img/slayder2.webp')
    image1.removeAttribute('id')
    image1.setAttribute('id','btn221')
    return ''
   }
//    if(image1.getAttribute('id')==='btn221'){
//     image1.setAttribute('src','img/slayder3.jpg')
//     image1.removeAttribute('id')
//     image1.setAttribute('id','btn222')
//     return ''
//    }
   if(image1.getAttribute('id')==='btn221'){
    image1.setAttribute('src','img/jsrasm.webp')
    image1.removeAttribute('id')
    image1.setAttribute('id','btn222')
    return ''
   }
   if(image1.getAttribute('id')==='btn222'){
    image1.setAttribute('src','img/slayder1.webp')
    image1.removeAttribute('id')
    image1.setAttribute('id','btn22')
    return ''
   }
}

function btn(){
    handleMenu()
    changeImg()
}

function btn1(){
    changeImg1()
}