
// const arr=[1]
// function foo(arr,value){
//     for(let i=arr.length-1;i>=0;i--){
//         arr[i+1]=arr[i]       
//     }
//     arr[0]=value 
//     return arr
// }
// console.log(foo(arr,4));
// console.log(foo(arr,5));


// const arr1=['Anvarbek', 'Asadbek', 'Ravshan', 'Samandar']
// const arr2=[60,80,90,65]
// let obj={}
// for(let a in arr1){
//     obj[arr1[a]]=arr2[a]
// }
// console.log(Math.max(Object.values(obj)));
// console.table(obj);


//1-masala
// const F=34
// let C=29
// const obj={
//     farengeyt:`${C} gradus teng ${((9*C)/5)+32} farengeytga`,
//     Selsiy:`${F} farengeyt ${(5/9)*(F-32) } selsiyga teng`
// } 
// console.log(obj);

//2-masala
// const arr=['salom',19,null,'dunyo']
// function foo(arr, value){
//     let new1=0
//     for(let i in arr){
//         if(arr[i]==value){
//             new1+=1
//         }
//     }
//     if(new1>=1){
//         return true
//     }else{
//         return false
//     }
    
// }
// console.log(foo(arr,19));


//3-masala
// const arr=[6,4,6]
// function foo(arr){
//         if(arr[arr.length-1]==6||arr[0]==6){
//             return true
//         }else{
//             return false
//         }
//     }
// console.log(foo(arr));


//4-masala
// const arr=[1,2,3,1]
// if(arr.length>1&&(arr[0]==arr[arr.length-1])){
//     console.log(true);
// }else{
//     console.log(false);
// }


//5-masala

// const marks=[80,80,90]
// let new1=0,new0=0
// for(let a of marks){
//     new0+=a
// }
// new1=new0/(marks.length)
// console.log((new1>=1||new1<=59)?'F':(new1>=60||new1<=69)?'D':(new1>=70||new1<=79)?'C':(new1>=80||new1<=89)?'B':(new1>=90||new1<=100)?'A':false);


//6-masala
// let library=[
//     {
//         author:'Bell Gates',
//         title:'The Road Ahead',
//         readingStatus:true
//     },
//     {
//         author:'Stive Jobs',
//         title:'Walter Isaacson',
//         readingStatus:true
//     },
//     {
//         author:'Suzanne Collins',
//         title:'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus:false
//     }
// ]
// for(let a of library){
//     console.table(a);
// }



//7-masala
// const arr =[1,4,5,7,9]
// const obj={}
// let new1=0
// for(let i in arr){
//     obj[arr[i]]=arr[i]
// }
// function foo(arr, values){
//     for(let i=arr.length-1;i>=arr.length-values;i--){
//         new1=arr[i]
//     }
//     return new1
// }
// console.log(foo(Object.values(obj),3))



// function foo(firstName,lastName,){
//     this.firstName=firstName
//     this.lastName=lastName
//     this.showInfo=function () {
//         console.log(`ismi ${this.firstName}; familyasi ${this.lastName}`);
//     }

// }
// const person=new foo('Sherbek','Movlonov')
// person.showInfo()
// console.log(person);



//======================== uyga vazifa===========================19.06=========

// 1-masala
// const str=['salom','salom dunyo', 'lorem epsum sdkd fgjhgf','assalomu alaykum']






//2-masala

// const arr='arsasrdf'
// let new1=''
// function foo(arr){
//     for(let a=0;a<arr.length;a++){
//         for(let i=0;i<arr.length;i++){
//             if(arr[a]!=arr[i]){
//                 new1+=arr[a]
//             }
//         }
        
//     }
//     return new1
// }
// console.log(foo(arr));

 //3-masala

//  let str1='2eeer43wgs56'
//  for(let i=0;i<str1.length;i++){
//     if((typeof str1[i])==Number){
//         str1[i]='$'
//     }
//  }
//  str1[0]='$'
//  console.log(str1);


//===================== 19.06 dars =============================

// const str='ahmoq salom odam ahmoq tentak dunyo jinni'
// const haqorat=['ahmoq','tentak','jinni']
// let new1=''
// let arr=str.split(' ')
// for (let j = 0; j < arr.length; j++) {
//     for (const a of haqorat) {
        
//     if(arr[j].includes(a)){
//         for(let i=0;i<a.length;i++){
//             new1+='*'
//         }
//         if(arr[j]==a){
//             arr[j]=new1
//         }
//         new1=''
//     }
// }
// }
// let new2=''
// for(let i=0;i<arr.length;i++){
//     new2+=arr[i]+' '
// }
// console.log(new2);


// const text='salom dunyo @kun.uz https//t.meBMATS'
// let arr=text.split(' ')
// let new1=''
// for(let i in arr){
//     if(arr[i].includes('@')||arr[i].includes('https//www')||arr[i].includes('https//t.me')){
//         new1='Reklama tarqatmang!';
//     }
// }
// if(new1=='Reklama tarqatmang!'){
//     console.log('Reklama tarqatmang!');
// }else{
//     console.log(text);
// }


//===================== 20.06 uyga vazifa ================================

//1-masala

// const str='Robin Singh from USA salom'
// let strArr=str.split(' ')
// let new1=strArr[0]
// for(let i=1;i<strArr.length;i++){
//     new1+='-'+strArr[i]
// }
// console.log(new1);

//2-masala
// const str1='Js string mashqlar salom'
// let str1Arr=str1.split(' ')
// let new2=''
// for(let a of str1Arr){
//     new2+=a[0].toUpperCase()+a.slice(1)+' '
// }
// console.log(new2);


//3-masala
// const arr={}
// function foo(str){
//     let new1=''
//     for (let i = 0; i<str.length; i++){
//            if(str[i]!=str[i].toUpperCase()){
//                 arr[i]=str[i].toUpperCase()
//            }else {
//             arr[i]=str[i].toLowerCase()
//            }
//         } 
//         for(let a of Object.values(arr)){
//             new1+=a
//         }
//         return new1
//     }
// console.log(foo('AsdFg'));


//4-masala
// const str='w3hgdtgtdsrr'
// function foo(str,value){
//    if(str.length>value){
//     let new1={},new2=''
//     for(let i=0;i<str.length;i++){
//         for(let j=0+i;j<value+i;j++){
//             str[j+1] ? new2+=str[j] : new2+=''
//         }
//         new2+=' ',new1[new2]=new2, new2='',i+=value-1
//     }
//     return Object.values(new1)
//    }else{
//     return str
//    }
// }
// console.log(foo(str,3));


//5-masala
// let str='?????? PHP-MySQL ?????'
// let obj={
//     suroq:'?',undov:'!',foiz:'%',rishotka:'#',
// }
// function foo(str,obj){
//     let new1=''
//     let arr=str.split('')
//     for(let i=0;i<str.length;i++){
//         for(let a of Object.values(obj)){
//             if(arr[i]==a){
//                arr[i]=''
//             }
//         }
//     }
//     for(let a of arr){
//         new1+=a
//     }
//     return new1.trim()
// }
// console.log(foo(str,obj));



//6-masala
// const str='<p><strong><em>Jonga tegdi shu JavaScript ham</em></stron></p>'
// function foo(str){
//    return `${<html> ${str}</html>}`
// }
// console.log(foo(str));



var myDiv 
myDiv.innerHTML = "<h1>Hello World!</h1>";
document.body.appendChild(myDiv)

console.log(myDiv);