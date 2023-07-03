// const arr = [1,2,3,4]
// function ayrish(value){
//     return value-2
// }
// function qoshish(value){
//     return value+2
// }
// function foo(array,calbackFunction){
//     let res=[]
//     for(let a of array){
//         res.push(calbackFunction(a))
//     }
//     return res
// }
// console.log(foo(arr,ayrish),foo(arr,qoshish));




//== arr[1,2]=> false. arr[1,1,1,2,2,3]=>true
//1-usul================================
// const arr = [1, 2, 3, 3, 3, 2]
// function foo(arr) {
//     let res = 0, res1 = 0
//     const obj = {}
//     for (let a of arr) {
//         for (let b of arr) {
//             a==b?res+=1:res
//         }
//         obj[a] = res
//         res = 0
//     }
//     for (let a of Object.values(obj)) {
//         for (let b of Object.values(obj)) {
//             a == b ? res1+=1:res
//         }
//     }
//     return res1 > 3 ? false:true
// }
// console.log(foo(arr));

//2-usul ====================================== 
// const arr = [1, 2, 3, 3, 3, 2,2]
// const obj={}

// for(let element of arr){
//     obj[element]=obj[element]+1||1
// }
// let res={}
// for(let element of Object.values(obj)){ //====================xato qism
//     res[element]=Object.values(obj)[element]? false:true; 
//     console.log(res);
// }
// console.log(res);

//3-usul ===========================================
//  const arr = [1, 2, 3, 3, 3, 2,2,2]
//  const map=new Map()
//  for (const el of arr) {
//     map.set(el,map.get(el)+1||1)
//  }
//  const unic=new Set(map.values())
//  console.log(unic.size===map.size);


///===============filter arr===============
//j==uft sonlarini aniqlash
// const arr=[1,2,3,4,5]
// function foo(value)  {return value%2==0}
// const arr1=arr.filter(foo)
// console.log(arr1);

//=============== regester
//==arrni sonlar yigindisi
// const arr=[1,2,3,4,5]
// const sum=arr.reduce(function(aklumator,currentValue){
//     aklumator+=currentValue
//     return aklumator
// },5)
// console.log(sum);


//==stringning harflar soni
// let text='Assalomu alaykum'
// function foo(acc,curr){
//     acc[curr]=acc[curr]+1||1
//     return acc
// }
// let res=text.split('').reduce(foo,{})
// console.log(res)


//berilganlarni ichida armiyaga boraloladiganlarni chiqazish
// const users=[
//     {
//         lastName:'John',
//         firstName:'Doe'
//         ,age:20
//     },
//     {
//         lastName:'John',
//         firstName:'Doe'
//         ,age:21
//     },
//     {
//         lastName:'John',
//         firstName:'Doe'
//         ,age:48
//     },
//     {
//         lastName:'John',
//         firstName:'Doe'
//         ,age:11
//     }
// ]
// function foo(value){
//     return (value.age>=18)&&(value.age<=27)
// }
// const arr1=users.filter(foo)
// console.log(arr1);