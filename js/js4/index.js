'use strict';

// console.log('salom' ||'xayr')




// let n='sentabr'
// switch(n){
//     case 'yanvar'||'fevral'|| 'dekabr':
//     console.log('qish')
//     break
//     case 'mart'||'aprel'||'may':
//         console.log('Bahor')
//         break
//      case 'iyun'||'iyul'||'Avgust':
//             console.log('Yoz')
//             break
//      case 'sentabr'||'oktabr'||'noyabr':
//       console.log('kuz')
//      break        
// }




// let a=10
// let b ='10'
// console.log(a+b)



//nulllish => null va undefined ni false qi;ib olib ketadi
// console.log(NaN??'Salom')
// console.log(undefined??'Salom')
// console.log(null??'Salom')
// console.log(''??'Salom')
// console.log(0 ??'Salom')




let str1 = "men o'zbekistonni sevaman"
let str2 = "sevaman"
let newtex
for(let i=0; i<str1.lenght ; i++){
    for(let j=0; j<str2.length;j++){
        if(str2[j]===str1[i]){
            console.log(str1[i].toUpperCase())
        }
    }
newtex+=str1[i]
}
console.log(newtex)



//4  larni o'chirish
// let newtex=""
// const son='114 342 342 45312 123432'
// for(let i=0;i<son.length;i++){
//     if(son[i]=='4'){
//         continue;
//     }else{
//     newtex+=son[i]
// }
// }
//     console.log(newtex)




// //yolg'iz 4 larni o'chirish
// const son='124 1244 12434 2344'
// let newtex=""
// for(let i=0;i<son.length;i++){
//     if(son[i]=='4' && son[i+1]!='4' && son[i-1]!='4'){
//         continue;
//     }else{
//     newtex+=son[i]
// }
// }
//     console.log(newtex)