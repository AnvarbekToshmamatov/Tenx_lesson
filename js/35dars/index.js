// const errorBoundary=document.querySelector('#err')

// class MyFirst extends HTMLElement{
//     constructor(){
//         super()
//         this.attachShadow({mode:'open'})
//     }
//     connectedCallback(){
//         const userId=this.getAttribute('userId');
//         if(!navigator.onLine){
//             errorBoundary.innerHTML='Interneting Yuq'
//             return
//         }else{
//             errorBoundary.innerHTML=''
//         }
//         (async ()=>{
//             this.shadowRoot.innerHTML=`<style>

//             .container{
//                 display: flex;
//             }
//             .loader {
//                 margin-top: 50px;
//                 margin-left: 50px;
//                 width: 48px;
//                 height: 48px;
//                 border: 3px solid #FFF;
//                 border-radius: 50%;
//                 display: inline-block;
//                 position: relative;
//                 box-sizing: border-box;
//                 animation: rotation 1s linear infinite;
//               }
//               .loader::after {
//                 content: '';  
//                 box-sizing: border-box;
//                 position: absolute;
//                 left: 50%;
//                 top: 50%;
//                 transform: translate(-50%, -50%);
//                 width: 56px;
//                 height: 56px;
//                 border-radius: 50%;
//                 border: 3px solid;
//                 border-color: #FF3D00 transparent;
//               }

//               @keyframes rotation {
//                 0% {
//                   transform: rotate(0deg);
//                 }
//                 100% {
//                   transform: rotate(360deg);
//                 }
//               } </style>
//               <span class="loader"></span>
// `

//               const reponse= await fetch('https://jsonplaceholder.typicode.com/photos/'+userId)
//               const data= await reponse.json()
//               this.shadowRoot.innerHTML=`<div class="container"><img src="${data.thumbnailUrl}" alt="${data.title}" /></div>`
//         })()
//     }
// }

// customElements.define('user-card',MyFirst)

// for(let i=1;i<100;i++){
//     const el=document.createElement('user-card')
//     el.setAttribute('userId',i)
//     setTimeout(()=>{
//         document.body.appendChild(el)
//     },i*1000)
// }

//===========================================================================================================






      