// const person={
//     name:"Anvarbek",
//     lastName:'Toshmamatov',
//     age:19,
//     location:"Termiz",
//     hobies:['futbol','kitob oqish'],
//     isMarrid:false,
// }
// console.log(person['name']);



// const obj={}
// const names=['Anvarbek','Kamron','Kamron','Anvarbek']
// for(let a in names){
//    obj[names[a]]=names[a]
// }
// console.log(Object.keys(obj));





// const mevalar={
//     olma:'olma',
//     shaftoli:'shaftoli',
//     banan:'banan',
//     anor:'anor'
// }
// const {olma,shaftoli,banan,anor}=mevalar
// console.log(olma,shaftoli,banan,anor);




// const maxsulotlar={
//     polizMaxsulot:['tarvuz','qovun','sabzi']
//     ,mevalar:['olma','anor','banan']
// }
// const {polizMaxsulot,mevalar}=maxsulotlar
// console.log(`Poliz Maxsulotlari: ${polizMaxsulot},\n Mevalar: ${mevalar}`);




// const users=[
//     {
//     name:'Anvarbek',
//     userName:"BMATS",
//     phoneNumber:'999586940'
// },
// {
//     name:'Asadbek',
//     userName:"NaruTo",
//     phoneNumber:'998458609'
// },
// {
//     name:'Samandar',
//     userName:"ewrf",
//     phoneNumber:'98885486050'
// }
// ]
// for(let a in users){
//     // console.log(users[a].name+' '+users[a].userName+' '+users[a].phoneNumber+' =>');
//     const {name,userName,phoneNumber}=users[a]
//     console.log(name,userName,phoneNumber);
// }

// console.table(users)
// console.warn('xato')




// //har bir sonni nicha marttadan qatnashganini topish
// //1-usul
// const obj={}
// let new1=0
// const numbers=['Anvarbek',2,'Anvarbek',3,4,5,6,7,'Jasur',3,4]
// for (let a in numbers){
//    for(let b in numbers){
//     if(numbers[a]==numbers[b]){
//         new1+=1
//     }
//    }
//  obj[numbers[a]]=new1;
//  new1=0
// }
// // console.log(obj);
// console.table(obj)



// //2-usul
// for(let a in numbers){
//     //ternave
//     obj[numbers[a]]?obj[numbers[a]]=obj[numbers[a]]:obj[numbers[a]]=obj[numbers[a]]-1

//     //if else
//     // if(obj[numbers[a]]){
//     //     obj[numbers[a]]=obj[numbers[a]]+1
//     // }else{
//     //     obj[numbers[a]]=1
//     // }

// }
// console.table(obj);








// const news=[
//     {
//         id:1,
//         title:'Yngi haftada uzbda 30 gradus tempratura boladi',
//         date:'12/06/2023',
//         description:'Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis '
//     },
//     {
//         id:1,
//         title:'Yngi haftada uzbda 30 gradus tempratura boladi',
//         date:'13/06/2023',
//         description:'Lorem ipsum dolor sit amet consectetur.  felis ligula aliquam venenatis '
//     },
//     {
//         id:3,
//         title:'Yngi haftada uzbda 30 gradus tempratura boladi',
//         date:'12/06/2023',
//         description:'Lorem ipsum . Imperdiet convallis blandit felis ligula aliquam venenatis '
//     },
//     {
//         id:4,
//         title:'Yngi haftada uzbda 30 gradus tempratura boladi',
//         date:'13/06/2023',
//         description:'Lorem ipsum dolor sit amet consectetur. aliquam venenatis '
//     }
// ]
// let arr={}
// for(let a in news){
//     for(let b in news){
//       if(news[a].date==news[b].date){
//             arr[news[a].date]=Object(news[a])+Object(news[b])
            
//       }
// }}
// console.table(arr);



//========================================= Uyga Vazifa ============================================

//1-masala
//[1,2,3,4] kabi arrayni [1,3,6,10] kabi qaytarish,[1,1+2,1+2+3,1+2+3+4]

// const numbers=[1,2,3,4,5]
// const obj={}
// let new1=0
// for(let i of numbers){
//     new1+=i
//     obj[i]=new1
// }
// console.log(Object.values(obj));



//2-masala
//Gaplardan eborat array berilgan. shu gaplardan eng ko'p soz qatnashganini so'zlari sonini topish

// const str=['salom dunyo','assalomu alaykum va rohmatululohu barakotux','hello','fdd dfcg']
// const obj={}
// let son=1,new1=0
// for(let i in str){
//     for(let j in str[i]){
//     if(str[i][j]==' '){
//         son+=1
//           obj[str[i]]=son
//     }else{
//         son
//         obj[str[i]]=son
//     }
// }
// son=1
// }
// // console.log(Object.values(obj));
// for(let k=Object.values(obj).length-1;k>=0;k--){
//     if(Math.max(Object.values(obj)[k],Object.values(obj)[k-1])){
//         new1=Math.max(Object.values(obj)[k],Object.values(obj)[k-1])
//     k=k
// }}
// console.log(new1);


//3-masala

// const str='Hello how are you Contestant'
// let new1=0
// function foo(str,valyue){
//     if(str.length-1>valyue){
//         for(let i=0;i<str.length;i++){
//             if(str[i]==' '){
//                 new1+=1
//             }
//             if(new1==valyue){
//                 return str.slice(0,i)
//             }else {
//                 // return str
//             }
//         }
//   if(new1<valyue){
//     return str
//   }
// }}

// console.log(foo(str,5));




// const arr=[
//     {
//     name:'John',
//     age:19,
// },
// {
//     name:'Johns',
//     age:10,  
// }
// ]
// console.log(arr[0]);