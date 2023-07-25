//======================= 21.06 dars =========================

//=======callBack funktion
// function foo(){
//     console.log('salom dunyo');
// }
// function foo1(ketmon,value){
//     if(value){
//         ketmon()
//     }
// }
// foo1(foo,true)


//============arrni sortlash
// const arr=[2,5,4,1,6,33]
// const sortArr=arr.sort(callBack)
// function callBack(a,b){
//     return a-b
// }
// console.log(arr);

//===========================================
//misol. toq yoki juft qiymatlarni filterlab chiqarishni callBack funktion orqali
// const arr=[1,2,3,4,5,6,0]
// const filterArr=arr.filter(function(value,index,arr){
//     return value%2==0
// })
// console.log(filterArr);


//================================================
// const contacts = [
//     {
//       name: 'Ravshan kursdosh',
//       phoneNumber: '910718903',
//       avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
//       lastActive: '10:24',
//       userName: '@ kotta_bola',
//       bio: "San o'qigan kitobni man yozganman sakrama, auf",
//       isHidePhoneNumber: false,
//       isBlocked: false,
//     },
//     {
//       name: 'shbduhakim bratishka',
//       phoneNumber: '997570788',
//       avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
//       lastActive: 'Yaqinda online edi',
//       userName: '@ vorzakon',
//       bio: '2008 larni sindirish bandasiga emas',
//       isHidePhoneNumber: true,
//       isBlocked: true,
//     },
//     {
//       name: 'O`ktam googler',
//       phoneNumber: '930425848',
//       avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
//       lastActive: '10:56',
//       userName: '@ oktam_vines',
//       bio: 'Dasturlashni o`rgansang hayotni tushunib yeta olasan',
//       isHidePhoneNumber: false,
//       isBlocked: true,
//     },
//   ]

//   const newarr=contacts.filter(function(value,index,arr){
//     return value.isBlocked==false
//   })
//   const newarr1=contacts.filter(function(value,index,arr){
//     return value.lastActive[index]-value.lastActive[index+1]
//   })

//   const  newArr2=[...contacts].sort((a,b) => a.name.localeCompare(b.name))

// //   console.log(newarr);
//   console.log(newarr1);
// //   console.log(newArr2);



///======================
// const students=[
//     {
//         name:'Anvarbek',isTaskFinsh:true,price:20
//     },
//     {
//         name:'Abror',isTaskFinsh:false,price:30
//     }
// ]
// const bugunDarsB=students.every((item)=>item.isTaskFinsh)
// const bugunDarsB1=students.some((item)=>item.isTaskFinsh)
// const newPrice=students.map((value,index,arr)=>{return{...arr , price:arr.price+20}})
// console.log(bugunDarsB,bugunDarsB1);
// console.log(newPrice);



//=====================================
// const students=[
//     {name:'Ravshan',age:19},
//     {name:'Asqar',age:20}
// ]
// const student=students.find((item)=>item.name=='Ravshan')
// console.log(student);

// //indexsini topish
// const studentIndex=students.findIndex((item)=>item.name=="Ravshan")
// console.log(studentIndex);


///=============== uyga vazifa ======================

// const contacts = [
//     {
//         id: 1,
//         name: 'Ravshan',
//         phoneNumber: '910718903',
//         avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
//         lastActive: '10:24',
//         userName: '@ kotta_bola',
//         bio: "San o'qigan kitobni man yozganman sakrama, auf",
//         balance: 100,
//         tasks: [
//             {
//                 data: '12',
//                 isFinite: true
//             },
//             {
//                 data: '13',
//                 isFinite: true
//             },
//             {
//                 data: '14',
//                 isFinite: true
//             },
//             {
//                 data: '15',
//                 isFinite: true
//             },
//             {
//                 data: '16',
//                 isFinite: false
//             },
//             {
//                 data: '17',
//                 isFinite: true
//             },
//             {
//                 data: '18',
//                 isFinite: true
//             },
//             {
//                 data: '19',
//                 isFinite: false
//             },
//             {
//                 data: '20',
//                 isFinite: true
//             }
//         ],
//     },
//     {
//         id: 2,
//         name: 'Abduhakim',
//         phoneNumber: '997570788',
//         avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
//         lastActive: 'Yaqinda online edi',
//         userName: '@ vorzakon',
//         bio: '2008 larni sindirish bandasiga emas',
//         balance: 200,
//         tasks: [
//             {
//                 data: '12',
//                 isFinite: true
//             },
//             {
//                 data: '13',
//                 isFinite: true
//             },
//             {
//                 data: '14',
//                 isFinite: true
//             },
//             {
//                 data: '15',
//                 isFinite: true
//             },
//             {
//                 data: '16',
//                 isFinite: true
//             },
//             {
//                 data: '17',
//                 isFinite: true
//             },
//             {
//                 data: '18',
//                 isFinite: false
//             },
//             {
//                 data: '19',
//                 isFinite: true
//             },
//             {
//                 data: '20',
//                 isFinite: true
//             }
//         ]

//     },
//     {
//         id: 3,
//         name: 'O`ktam',
//         phoneNumber: '930425848',
//         avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
//         lastActive: '10:56',
//         userName: '@ oktam_vines',
//         bio: 'Dasturlashni o`rgansang hayotni tushunib yeta olasan',
//         balance: 0,
//         tasks: [
//             {
//                 data: '12',
//                 isFinite: true
//             },
//             {
//                 data: '13',
//                 isFinite: true
//             },
//             {
//                 data: '14',
//                 isFinite: true
//             },
//             {
//                 data: '15',
//                 isFinite: true
//             },
//             {
//                 data: '16',
//                 isFinite: false
//             },
//             {
//                 data: '17',
//                 isFinite: true
//             },
//             {
//                 data: '18',
//                 isFinite: false
//             },
//             {
//                 data: '19',
//                 isFinite: true
//             },
//             {
//                 data: '20',
//                 isFinite: false
//             }
//         ]
//     },
// ]

/////////////////chopilganlar ruyhati//////////////////
//   function chopish(arr){
//     let new1={}
//     let son=0
//     for (const a of arr){
//      for(let b of a.tasks){
//         for(let c of Object.values(b)){
//              if(c[1]==false){
//                 son+=1
//             }
//         }
//         new1[a.name]=son
//      }
//      let son1=Object.values(new1)
//     for(let d of son1){
//      if(d==3){
//         console.log(`Chopilgan ${a}`);
//     } 
// }
//   }
// }
//   console.log(chopish(contacts));

////////////////// balansi = 0 ////////////////////////++

// function balance1(arr){
//     let obj={}
//     for (const a of arr) {
//         if(a.balance==0){
//             obj[a.balance]=a
//         }else{
//             obj[a.balance]=a
//         }
//     }
//     return obj
// } 
// console.log(balance1(contacts));


//////////// ismlar buyicha qidirish///////////////////++
// let obj={}
//    obj=contacts.find((item)=>item.name='Ravshan') 
// console.log(obj);


/////////// chetlatilgan uquvchilar //////////////////++
// obj={}
//    obj=contacts.find((item)=>item.balance='0') 
//    console.log(`Iltimos hisobni toldirib qoying`);
// console.log(obj);


/////////////id sini berib yuborsa objni chiqarish /////////////////////++
// let obj,Id=1
//   obj=contacts.find((item)=>item.id=Id) 
//  console.log(obj);


/////////////// userni ism familyasi va balansini chiqazish ///////////////
// let obj={}
// for(let a of contacts){
//     obj[`${a.id} name`]=a.name
//     obj[`${a.id} userName`]=a.userName
//     obj[`${a.id} balance`]=a.balance
// }
// console.log(obj);



///////////================ 22.06 =========================////////////////
// const person={
//     name:'Anvarbek',
//     age:19,
//     lastActive:{
//         data:12,
//         task:'vazifa'
//     }
// }
// const {name,age,lastActive:{data,task},}=person
// console.log(name,age,data,task);



// const str='llll'
// const date=new Date();
// switch (str) {
//     case 'LT':
//         console.log(date.getHours()+':'+(date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())+' '+'PM')
//         break;

//     case 'LTS':
//         console.log(date.getHours()+':'+((date.getMinutes()<10?('0'+date.getMinutes()):date.getMinutes()))+':'+date.getSeconds()+' '+'PM');
//         break;
//     case 'L':
//             console.log(date.getDate()<10?'0'+date.getDate():date.getDate()+'/'+date.getMonth()+1+'/'+date.getFullYear());
//             break;
//     case 'l':
//         console.log(date.getDate()+'/'+date.getMonth()+1+'/'+date.getFullYear());
//              break;
//     case 'LL':
//         const oy=['Yanv','Febr','March','Aprl','May','iyun','iyul','Agst','Sent','Oktb','Noyb','Dekb']
//         console.log(oy[date.getMonth()+1]+' '+date.getDate()<10?'0'+date.getDate():date.getDate()+', '+date.getFullYear());
//             break;
//     case 'll':
//         const oy1=['Yan','Feb','Mar','Apr','May','iyn','iyl','Ags','Sen','Okt','Noy','Dek']
//         console.log(oy1[date.getMonth()+1]+' '+date.getDate()<10?'0'+date.getDate():date.getDate()+', '+date.getFullYear());
//             break; 
//     case 'LLL':
//         const oy2=['Yanv','Febr','March','Aprl','May','iyun','iyul','Agst','Sent','Oktb','Noyb','Dekb']
//         console.log(oy2[date.getMonth()]+' '+date.getDate()<10?'0'+date.getDate():date.getDate()+', '+date.getFullYear()+' '+date.getHours()+':'+(date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())+' '+'PM');
//             break;
//     case 'lll':
//         const oy3=['Yan','Feb','Mar','Apr','May','iyn','iyl','Ags','Sen','Okt','Noy','Dek']
//         console.log(oy3[date.getMonth()+1],' ', date.getDate()<10?'0'+date.getDate():date.getDate()+', '+date.getFullYear()+' '+date.getHours()+':'+(date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())+' '+'PM');
//             break;
//      case 'LLLL':
//          const oy4=['Yanv','Febr','March','Aprl','May','iyun','iyul','Agst','Sent','Oktb','Noyb','Dekb']
//          const weekday=['Dushanba','Seshanba','Chorshanba','Payshanba','Juma','shanba','Yakshanba']
//          console.log(weekday[date.getDay()-1],' '+oy4[date.getMonth()+1],(' '+date.getDate()<10?'0'+date.getDate():date.getDate()+', '+date.getFullYear()+' '+date.getHours()+':'+(date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())+' '+'PM'));
//              break;
//     case 'llll':
//         const oy5=['Yan','Feb','Mar','Apr','May','iyn','iyl','Ags','Sen','Okt','Noy','Dek']
//        const weekday1=['Dush','Sesh','Chor','Pay','Juma','shan','Yak']
//        console.log(weekday1[date.getDay()-1],' ',oy5[date.getMonth()+1],' '+date.getDate()<10?'0'+date.getDate():date.getDate()+', '+date.getFullYear()+' '+date.getHours()+':'+(date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())+' '+'PM');
//            break;                                                                             
// }





//======================= uyga vazifa ===============

//1.oydagi kunlar sonini olish
// function oyKuni(month, year) {
//     return new Date(year, month, 0).getDate();
//   }

//   console.log(oyKuni(6, 2023)); 
//   console.log(oyKuni(7, 2023)); 
//   console.log(oyKuni(1, 2012));



//2.kattaroq datani topish
// const date1='11/14/2013 00:00'
// const date2='11/14/2013 00:01'
// function foo(date1, date2) {
//     if (new Date(date1) > new Date(date2)) {
//       return "Date1 > Date2";
//     } else if (new Date(date1) < new Date(date2)) {
//       return "Date2 > Date1";
//     } else {
//       return "Date1 = Date2";
//     }
//   }
//   console.log(foo(date1,date2));


//3.dam olish kunini topish
// function DamOlish(value) {
//     const kun = new Date(value).getDay();
//     if(kun === 6 || kun === 0) {
//       return "weekend";
//     } else {
//       return undefined;
//     }
//   }
// console.log(DamOlish('Nov 15, 2014'));
// console.log(DamOlish('Nov 16, 2015'));
// console.log(DamOlish('Nov 17, 2023'));


//4. Ikki sana orasidagi farqni kunlarda olish uchun JavaScript funksiyasini yozing.
// function days(valu1,valu2){
//     let day1=new Date(valu1)
//     let day2=new Date(valu2)
//     return (day1-day2)/1000/60/60/24
// }
// console.log(days('04/02/2014', '11/04/2014'));
// console.log(days('12/02/2014', '11/04/2014'));


//5. Sanalar arrayidan maksimal sanani olish uchun JavaScript funksiyasini yozing.

// function maksimal_date(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         let day1 = new Date(arr[i])
//         let day2 = new Date(arr[i - 1])
//         var new1 = Math.max(day1, day2)
    // }
    //     return new Date(new1).getFullYear()+'/'+new Date(new1).getDate()+'/'+(new Date(new1).getMonth()+1)
// }
// console.log(maksimal_date(['2015/02/01', '2015/02/02', '2015/01/03']));


//6.Yoshni hisoblash uchun JavaScript dasturini yozing.
// function calculateAge(value){
//     let day=new Date(value)
//     return parseInt((new Date()-day)/1000/60/60/24/30/12)+' yosh';
// }
// console.log(calculateAge(('1982, 11, 4')));



//===================== 23.06 ==========================


//bu set funksiyani jsda yaratilishi. bu birxillarni o'chirib tashlanadi
// function set (arr){
//     const res={}
//     for(let i=0;i<arr.length;i++){
//          res[arr[i]]=arr[i]
//     }
//     return Object.keys(res)
// }
// console.log(['apple','apple','banana']);






// const str='salom sdunyo'
// const obj={}
// function foo(str){
//     let arr=str.split('')
//     let new1=0
//     for(let i of arr){
//         for(let a in arr){
//             if(arr[a]==i){
//                 new1+=1
//             }
//         }
//         obj[i]=new1
//         new1=0
//     }
//     const map= new Map(Object.entries(obj))
//   return map
// }
// console.log(foo(str));



// const str = 'JavaScript'
// const map= new Map()
// let new1=''
// for(let i=0;i<str.length;i++){
//     map.set(str[i],str[i])
//     new1+=map.get(map.values())
// }
// console.log(new1);


let index=0
function onclickBtn(){
    let colors=['red','green','blue','yellow']
    document.getElementsByTagName('body')[0].style.background=colors[index++]
    if(index>colors.length-1) index=0
}