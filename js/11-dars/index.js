
//1-masala.Matndagi takrorlanmagan so’zlarni chiqarish

// const str='salom assalom book salom'
// let arr=str.split(' ')
// function foo(arr){
//     let obj={}
//     for(let a of arr){
//         for(let i in arr){
//             if(a==arr[i]){
//                 obj[i]=''
//             }else{
//                 obj[i]=arr[i]
//             }
//         }
//     }
//     return Object.values(obj);
// }
// console.log(foo(arr));


//2-masala.Matndagi so’zlarni alfavit shaklida tartiblab bitta mmatn qilib chiqarish
// const str = 'salom assalom book'
// let arrStr=str.split(' ')
// let obj={}
// for(let a of arrStr){
//     obj[a[0].charCodeAt()]=a
// }
// console.table(obj);


//3-masala.So’zlarning palindromligini topish, eng uzunini topish
// const str = 'kattak cooc salom assaassa'
// let arr=str.split(' ')
// let obj={}
// for(let a of arr){
//     let new1=''
//     let str1=a.slice(0,parseInt((a.length)/2))
//     let str2=a.slice(parseInt((a.length)/2))
//     for(let i=str2.length-1;i>0;i--){
//         new1+=str2[i]
//     }
//     let arr1=str2.split('')
//     let arr2=str1.split('')
//     for(let j=0;j<arr1.length;j++){
//         if(arr2[j]==arr1.reverse()[j])  obj[a.length]=a
//     }
// }
// let arr4=[]
// for(let i=0;i<Object.values(obj).length;i++){
//     arr4[i]=Object.values(obj)[i]
// }
// console.table(arr4[arr4.length-1]);

//4-masala 

// const str='was you saw he'
// let arr=str.split(' ')
// for(let a of arr){
//     let new1=''
//    let arr1= a.split('')
//    new1=arr1.reverse
//    let arr2=a.split('')
//    for(let b in new1){
//     if(arr2[b]==new1[b]){
//         console.log(a); 
//     }
//    }
// }


// let num = 1000000
// let text = num.toLocaleString('en-US',{style: 'currency', currency: 'EUR'})
// console.log(text);

//===========xatoni oldini olish========
// function foo(str){
//     try{
//         return str.substr(0,7)
//     }catch(err){
//         console.log(err);
//         return 'xato'
//     }
// }
// console.log(foo(5));
// console.log('adfsfdsfsdfsdgfdgf');


//================ agar funksiyani chaqiryotganimizda o'rni almashib ketsa togirlab chiqarish
// function foo(obj){
//     const {firstName,lastName,age}=obj
//     console.log(`ismi: ${firstName} familyasi: ${lastName} yoshi: ${age}`);
// }
// foo({
//     firstName:'John',lastName:'Doe',age:19
// })



// function foo(firstName,lastName){
//     return {firstName,lastName}
// }
// const {firstName,lastName}=foo('John','Doe')
// console.log(lastName, firstName);




// let set2=[1,2,3]
// let set1=[1,2,3]
// let set3=[1,2,3]
// // const obj={
// loop1:
//     for (var i in set1) {
// loop2:
//         for (var j in set2) {
//             console.log(j);
// loop3:
//             for (var k in set3) {
//                 break loop2;  // breaks out of loop3 and loop2
//             }
//         }
//     }
// // }



// console.log(parseInt((Math.random()+0.1)*100000));
// console.log(parseInt(Math.random()*100000));



