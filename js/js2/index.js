
// const firstName='Anvarbek '
// const lastName='Toshmamatov'
// console.log(firstName,lastName , typeof firstName)

// const a=10
// const b=4
// console.log(a,b, typeof a)

// const bool1=true
// console.log(!bool1,bool1 ,typeof bool1)

// const null1=null
// console.log(null1,!null1, typeof null1)

// const unde1=undefined
// let unde2
// console.log(unde1,!unde1 ,typeof unde1)


//1-masala

let a=3, b=5, c=4
let S1=a**2+b**2==c**2
let S2=a**2+c**2==b**2
let S3=c**2+b**2==a**2
console.log('~~Pefogor sonligini aniqlash: ')
console.log(S1+S2+S3==1)


//2-masala

let son=123141
let bir=parseInt(son/100000)
let ikki=parseInt(son/10000%10)
let uch=parseInt(son/1000%10)
let tort=parseInt(son/100%10)
let besh=parseInt(son/10%10)
let olti=parseInt(son%10)
let n=((bir==1)+(ikki==1)+(uch==1)+(tort==1)+(besh==1)+(olti==1))
console.log('~~birdan tashqari raqmlar yigindisi: ')
console.log((bir+ikki+uch+tort+besh+olti)-n)


//3-masala

let soz='catgcatcht'
let birinchi=soz[0]+soz[1]+soz[2]=='cat'
let ikkinchi=soz[1]+soz[2]+soz[3]=='cat'
let uchunchi=soz[2]+soz[3]+soz[4]=='cat'
let tortinchi=soz[3]+soz[4]+soz[5]=='cat'
let beshinchi=soz[4]+soz[5]+soz[6]=='cat'
let oltinchi=soz[5]+soz[6]+soz[7]=='cat'
let yettinchi=soz[6]+soz[7]+soz[8]=='cat'
let sakkizinchi=soz[7]+soz[8]+soz[9]=='cat'
console.log('~~cat sozini sonini aniqlash: ')
console.log(birinchi+ikkinchi+uchunchi+tortinchi+beshinchi+oltinchi+yettinchi+sakkizinchi)

//4-masala

let sons=12334567
let nols=parseInt(sons/1000000)
let birs=parseInt(son/100000%10)
let ikkis=parseInt(son/10000%10)
let uchs=parseInt(son/1000%10)
let torts=parseInt(son/100%10)
let beshs=parseInt(son/10%10)
let oltis=parseInt(son%10)
console.log("~~Birning o'rniga uchni qoyib orta arifmitigini topish: ")
let ns=((nols)+(birs==1)+(ikkis==1)+(uchs==1)+(torts==1)+(beshs==1)+(oltis==1))
console.log(((nols+birs+ikkis+uchs+torts+beshs+oltis)-ns+ns*3)/7)