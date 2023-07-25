

//==============1ta qatnashgan sonni topish
//1-usul
// const arr=[1,2,3,3,3,1,1]
// let new1=0
// const obj={}
// for(let a of arr){
//   for(let b of arr){
//     a===b ? new1+=1:1
//   }
//   obj[new1]=a
//   new1=0
// }
// console.log(obj[1]);

//================2-usul
// const newArr=arr.sort((a,b)=>a-b)
// for(let a in newArr){
//    if((newArr[a]!==newArr[a+1])&&(newArr[a]!==newArr[a-1])){
//     console.log(newArr[a])
// }
// }

//==============3-usul
// const map1 = new Map()
// for(const num of arr){
//     map1.set(num,map1.get(num)+1||1)
// }
//  map1.forEach((value,key) => {
//     if(value===1){
//        console.log(key);
//     }
// });





///=====2-masala berilgan arr da target bolsa index aks holatda uni joylashtirish mumkin bolgan indexni qaytarish.raqamlar usish tartibida joylashtiriladi
// const arr=[1,3,5,6]
// const target=2
// function foo(arr,target) {
//     for(let i in arr){
//         if(target==arr[i]){
//              return i;
//         }else if(target<arr[i]){
//             return i
//         }else if(arr[arr.length-1]<target){
//             return arr.length
//         }
//     }
// }
// console.log(foo(arr,target));




//================tarjimon lotindan rusga
// const str='salom ###js dunyo dunyo'
// const alifbo = {
//                   'a': 'а', 'b': 'б', 'd': 'д', 'e': 'э', 'f': 'ф', 'g': 'г', 'h': 'ҳ',
//                   'i': 'и', 'j': 'ж', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о',
//                   'p': 'п', 'q': 'қ', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'v': 'в',
//                   'x': 'х', 'y': 'й', 'z': 'з', 'sh': 'ш', 'ch': 'ч', 'ng': 'нг', 'o\'': 'ў',
//                   'g\'': 'ғ', 'yu': 'ю', 'ya': 'я',' ':' ','#':'#'
//         };
//   const arr=str.split('')
//   let res =''   
// const arr1=str.split(' ')
// for(let a of arr1){
//    res+= a[0]+a[1]+a[2]=='###'?a+' ':foo(a)
// }
// function foo(a){
//     for(let i=0;i<a.length;i++){
//         res+=alifbo[a[i]]
//     }
//     return res+' '
// }
// const arr2=res.split(' ')
// let new1=''
// for(let i=arr1.length+1;i>0;i--){
//     new1+=arr2[arr2.length-i]+' ';
// }
// console.log(new1);




//===so'zlarni raqamlar boyicha tartiblash
// let now=performance.now()
// const str='is2 sentence4 This1 a3'
// const arr=str.split(' ')
// const obj={}
// for(let a of arr){
//     for(let i=0;i<a.length;i++){
//         a[i]/1? obj[a[i]]=a:obj[a[i]]={}
//     }
// }
// let res=''
// for(let i=1;i<=arr.length;i++){
//     let str1=''
//     for(let j in obj[i]){
//         obj[i][j]/1?str1+='':str1+=obj[i][j]
//     }
//     res+=str1+' '
// }
// console.log(res);
// console.log(performance.now()-now);



//=============funksiyaga obj berilsa bo'sh bolsa true:false
// function foo(obj){
//    return Object.keys(obj).length?true:false
// }
// console.log(foo({age:19}));



//arr qilish rekursiv orqali
// const arr = [1,2,3,[3,4,[5,[7]]]]
// function foo(arr){
//     let obj={};
//     if(arr=='') return ''
//     for(let i in arr){
//         arr[i]/1 ? (obj[arr[i]]=arr[i]) && foo(arr[i+1]) : foo(arr[i])
//     }
//   return obj
// }
// console.log(foo(arr));


// const arr=['salom','alik','is','the','is','salom']
// let res =0,obj={}
// for(let a of arr){
//    for(let b of arr){
//      if(a==b){
//         res+=1
//      }
//    }
//    obj[a]=res
//    res=0
// }
// console.log(obj);
// let arr1=Object.values(obj)
// let arr2=Object.keys(obj)
// let sor=arr1.sort((a,b)=>{a-b})
// console.log(sor);




//yandix taxi
// const summa=233.456
// let nat=parseInt(summa*1000)%1000>444?`siz tolaydigan somma ${parseInt(summa)+1}`:`siz tolaydigan summa ${parseInt(summa)}`
// console.log(nat);

//sardor akani turish vaqti
//  let S=4
//  let M=46
//  M>45?console.log(S+':'+(M-45)):console.log(S-1+':'+(60-M));;

// console.log(console.log(2)||console.log(4)||console.log(5));





//====== execution context=======

// let ozgaruvchi=13
// console.log(ozgaruvchi);
// let person=30
// function foo(person){
//     // person = 40
//     console.log('Assalomu alaykum '+person);
// }

// const qiymat=foo(person)

// console.log(qiymat);

// console.log(str);
// var str='salom'
// console.log(str);
// //let va const da 


// /=================7.08

// const arr=[3,5,6]
// let obj={}
// let b=0
//  for(let i=arr[0];i<arr.length+1;i++ ){
//      obj[b]=i
//      b+=1
// }
// console.log(obj);
// function foo(arr,obj){
//     let res=0
//     for(let a of Object.values(obj)){
//         if(arr[a]!=a) {
//          return a
//      }else{
//         res+=1
//      }
//      }
//      if(res==arr.length) return arr[arr.length-1]+1
// }
// console.log(foo(arr,obj));





// Output: [[1,2,10],[4,5,7,8]],ummuman mag'lub bumaganlar va eng kam mag'lub bo'lganlar
// const matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
// let obj={},res1=0
// let obj1={}, obj3={},arr=[]
// for(let a of matches){
//     obj[a[0]]=a[0]
//     obj1[a[1]]=a[1]
// }
// let obj2={}, res=0
// for(let a of Object.values(obj)){
//     for(let b of Object.values(obj1)){
//        a!=b ?res+=1:res
//     }
//     if(res!==Object.values(obj1).length){delete(obj[a])}
//     res=0
// }
// console.log(Object.values(obj));

// for(let i=0 ;i<matches.length;i++){
//    arr[i]=matches[i][1]
// }
// for(let a of arr){
//     for(let b of arr){
//         if(a==b){res1+=1}
//     }
//     if(res1==1) obj3[a]=a
//     res1=0
// }
// console.log(Object.values(obj3));


//2-usul
// const matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
// function foo(matches){
//     const first={}
//     const second={}

//     for(const i of matches){
//         first[i[0]]=first[i[0]]+1||1
//         second[i[1]]=second[i[1]]+1||1
//     }
//     const arr1=Object.keys(first).filter((item)=>!second[item])
//     const arr2=Object.keys(second).filter((item)=>second[item]===1)
//     return [arr1,arr2]
// }
// console.log(foo(matches));


let str=4.56
