// const a = true

// const foo = () => {
//     return new Promise((resolve, reject) => {
//         if (a) {
//             resolve(1)
//         } else {
//             reject('error')
//         }
//     })
// }

// foo().then((data) => {
//     return data + 2
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })



// fetch('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
//     return data.json()
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })


// //async await usuli
// const foo1=async ()=>{
//     try {
//         const response = await fetch('https://jsonplaceholde.typicode.com/photos')
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// foo1()


//====1-usul
// Array.prototype.ozgartir = function(id,age) {
//     let arr1=[]
//     for(let a of this){
//         if(a.id==id){
//             a.age=age
//         }
//     }
//      console.log(this);
// }
// const arr2=[{id:1,name:'john',age:30},{id:2,name:'Samad',age:45},{id:4,age:30,name:'Saman'}]

// arr2.ozgartir(1,30);

//==2-usul
// const arr=[{id:1,name:'john',age:30},{id:2,name:'Samad',age:45},{id:4,age:30,name:'Saman'}]
// 
// for(let a of arr){
//     if(a.id!==2){
//         arr1.push(a)
//     }
// }
// console.log(arr1);