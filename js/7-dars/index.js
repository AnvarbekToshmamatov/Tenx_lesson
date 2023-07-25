


// //arr ni ichida valyu bolsa arrni nichinchi indexsida turganini qaytarish
// let arr=[1,4,3,4,5]
// function foo(array,valyu){
//     let new1=0
//     for(let i=0;i<array.length;i++){
//         if(array[i]==valyu){
//             return i
//         }else{
//             new1+=1
//         }
//     }
//       if(new1>0){
//           return -1}
// }
// console.log(foo(arr,4))



// const arr=[[1,2,3,4],[2,3,4,5],[3,4,5,6],[4,5,6,7]]

// let arr1=[[],[],[],[]],new1=0,new2
// function foo(arr){
//     for(let i=0;i<arr.length;i++){
    
//         for(let j=0;j<arr.length;j++){
//             arr1[i][j] = arr[j][i]
//         }
//     }
//     // console.log(arr1)

//     for(let k=0;k<arr1.length;k++){
//         for(let l=0;l<arr1.length;l++){
//         }
        
//     }
//     return arr1

// }
// console.log(foo(arr));




// const operations=["x++","x--","++x"]
// let x=0
// for(let i=0;i<operations.length;i++){
//    return operations[i]
// }




// const numbers=[123,4,3,8,3,7,3,3]
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]===3){
//         numbers.splice(i,1)
//         i--
//     }
// }
// console.log(numbers);




// const numbers=[123,4,3,8,3,7,3,3]
// for(let a of numbers){}//bu valyu buyicha oladi

//     for(let i in numbers){ // bu index buyicha oladi
//     if(numbers[i]===3){
//          numbers.splice(i,1)
//          i--
//        }}
// console.log(numbers);



// if(!!!true){
//     console.log('s');
// }else{

// }


// console.log(NaN===NaN);\

const arr=[1,2,3,4]
const arr1=[5,6,7,8]
const arr3=[...arr,...arr1]
let new1=0, new2=1
for(let a in arr3){
    if(arr3[a]%2==0){
        new1+=arr3[a]
    }else{
        new2*=arr3[a]
    }
}
console.log(('yigindi: '+new1+"   "+'kopaytma: '+new2));

arr.concat(arr1)

for(let a of )