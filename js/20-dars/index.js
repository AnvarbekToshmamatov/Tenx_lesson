// const arr=['salom','kak','tut']
// let obj={},res=''
// for(let a of arr){
//     for(let i=a.length-1;i>0;i++){
//         // res+=a[i]
//     }
//     obj[a]=res
// }
// // console.log(obj);


// const arr = [
//      [0, 3, "div"],
//      [4, 6, "p"],
//      [7, 8, "span"],
//     ];
    
// let str = "hello world";
// let res='',res1=''
// for(let a of arr){
//     for (let i = a[0]; i <= a[1]; i++){
//       res=res+str[i]  
//     }
//     console.log('<'+a[2]+'>'+res+'</'+a[2]+'>');
//     res=''
// }
// for(let i=arr[arr.length-1][1]+1;i<str.length;i++){
//     res1+=str[i]
// }
// console.log(res1);

// let course=0
// function foo(){
//     course++
//     if(course==10){
//         clearInterval(b)
//     }
//     console.log(new Date().getMilliseconds());
// }
// // setTimeout(a,5000)

// // setTimeout(()=>{
// //     clearInterval(a)
// // },6000)

// const b=setInterval(foo,1000)




// const minute=document.getElementById('minute')
// const second=document.getElementById('second')
// const audio=document.getElementById('aud')
// let min=2
// let seconds=59
// const interval=setInterval(()=>{
//     minute.innerHTML=`0${min}`
//     seconds-=1
//     second.innerHTML=seconds>9?seconds:`0${seconds}`
//     if(seconds==0 && min-1>=0){
//         min=min-1
//         seconds=59
//     }
//     if(seconds==0 && min==0){
//         // audio.play()
//         clearInterval(interval)
//         return 
//     }
// },100)





// const s='daabcbaabcbcc'
// const party='abc'
// let res=''
// res=s.replaceAll(party,'')
// for(let i=0;i<s.length/party.length;i++){
//     console.log(i);
//    res=res.replaceAll(party,'')
// }
// console.log(res);







// const str='a1b1c1'
// const obj={}




// class Kompyuter{
//     def__init__(self, marka, model, ram){
//         self.marka = marka
//         self.model = model
//         self.ram = ram
//     }
// }
// // # 3 ta obyekt yaratish
// const kompyuter1 = new Kompyuter("Lenovo", "ThinkPad", 16)
// // kompyuter2 = Kompyuter("Lenovo", "ThinkPad", 16)
// // kompyuter3 = Kompyuter("Dell", "XPS", 32)
// console.log(
//     kompyuter1
// );





//==============1-masala==========
// class A{
//     field='wwwwwww'
//     firstMethod(){
//         console.log('do something');
//     }
// }
// A1=new A()
// console.log(A1.firstMethod());


///==========3masala=========
// class Kompyuter{
//     constructor(marka,model,ram){
//         this.marka=marka
//         this.model=model
//         this.ram=ram
//     }
// }
// const kompyuter1 =new Kompyuter('hp','i5','8')

// kompyuter2 =new Kompyuter("Lenovo", "ThinkPad", 16)
// kompyuter3 =new Kompyuter("Dell", "XPS", 32)

// console.log(kompyuter1,'\n',
//     kompyuter2,'\n',
//     kompyuter3);




// class Technical {
//     constructor(title, price,  color, memory, ram) {
//       this.title = title
//       this.price = price
//       this.color = color
//       this.memory = memory
//       this.ram = ram
//     }
//     showInfo() {
//       console.log(`
//   Modeli: ${this.title}
//   Narxi: ${this.price}
//   Rangi: ${this.color}
//   Xotira: ${this.memory}
//   RAM: ${this.ram}
//       `)
//     }
//   }
//   class Telephon extends Technical{
//     constructor(title, price,  color, memory, ram,isType){
  
//     super(title, price,  color, memory, ram)
//     this.isTypeC=isType
//   }
//   }
  
//   class Computer extends Technical{
//     constructor(title, price,  color, memory, ram){
//       super(title, price,  color, memory, ram)
//     }
//   }

//   const Technical1=new Technical()
//   const Computer1=new Computer('Kompyuter','500$','red','512','8')
//   const Telephon1= new Telephon('Teliphon','300$','black','64','4','samsung')
//   console.log(Computer1);
//   console.log(Telephon1);
  


//masala: funksiyani nichamarta chaqirsak ham barchasidan kelyotganlari yigindisi
// const foo=(a)=>(b)=> b?foo(a+b):a
// console.log(foo(2)(4)());


// class Students{
//     name=''
//     #ball=[]
//     #subjeckt=[]
//     #ispass=true
//     course=1
//     constructor(name,ball,subjeckt,ispass,course){
//         this.#ball=ball
//         this.#ispass=ispass
//         this.#subjeckt.subjeckt
//         this.course=course
//         this.name=name
//     }
// }

// const MuhammadAliy=new Students('MuhammadAliy',[4,5,6],['tarix','ingiliz tili'],2)
// console.log(MuhammadAliy);



// class Student {
//     #contact = [{name:'john',phoneNumber: '9999999',id: 198767888888765}]
//     name = ''
//     #phoneNumber = ''
//     constructor(name,phoneNumber){
//         this.name = name
//         this.#phoneNumber = phoneNumber 
//     }

//     set addContact(newContact){
//         if(this.#contact.length < 10){
//             newContact.id = Math.random() * 10000
//             this.#contact.push(newContact)
//         }else{
//             throw Error('contactlar toldi!!!!!!')
//         }
//     }

//     get getAllContacts(){
//         return this.#contact
//     }

//     set edit({id,phoneNumber,name}){
//         const newContacts = this.#contact.filter((item) => item.id !== id)
//         const editContact = this.#contact.find((contact) => contact.id === id)
//         editContact.phoneNumber = phoneNumber
//         editContact.name = name
//         this.#contact = [...newContacts,editContact]
//     }
// }

// const user1 = new Student('Suhrob','988888994567')

// user1.addContact = {
//     name: 'john1',
//     phoneNumber: '+99892-123-45'
// }

// user1.addContact = {
//     name: 'jane1',
//     phoneNumber: '+99892-222-77'
// }

// user1.edit = {
//     id:198767888888765,
//     phoneNumber:'1111',
//     name: 'Doe'
// }
// console.log(user1.getAllContacts);







// let nt=new Date(1687997622109)
// console.log();

// //==================kutubxona========================

// class Student {
//     #contact = [{name:'john',phoneNumber: '9999999',bookName:["O'tkan kunlar",'Xamsa'],dataBooksTaken:new Date(1687997622109),amountDue:Math.floor((new Date()-nt)/1000/60/60/24),bookmony:Math.floor((new Date()-nt)/1000/60/60/24)*5000,id: 198767888888765}]
//     name = ''
//     #phoneNumber = ''
//     bookName=[]
//     dataBooksTaken=''
//     amountDue=''
//     constructor(name,phoneNumber,bookName,dataBooksTaken,amountDue){
//         this.name = name
//         this.#phoneNumber = phoneNumber 
//         this.bookName=bookName
//         this.dataBooksTaken=dataBooksTaken
//         this.amountDue=amountDue
//     }

//     set addContact(newContact){
//         if(this.#contact.length < 10){
//             newContact.id = Math.random() * 10000
//             this.#contact.push(newContact)
//         }else{
//             throw Error('contactlar toldi!!!!!!')
//         }
//     }

//     get getAllContacts(){
//         return this.#contact
//     }

//     set edit({id,phoneNumber,name,bookName,dataBooksTaken,amountDue}){
//         const newContacts = this.#contact.filter((item) => item.id !== id)
//         const editContact = this.#contact.find((contact) => contact.id === id)
//         editContact.phoneNumber = phoneNumber
//         editContact.name = name
//         editContact.bookName=bookName
//         editContact.dataBooksTaken=dataBooksTaken
//         editContact.amountDue=amountDue
//         this.#contact = [...newContacts,editContact]
//     }
// }

// const Student1=new Student({name:'john',phoneNumber: '9999999',bookName:["O'tkan kunlar",'Xamsa'],dataBooksTaken:new Date(1687997622109),amountDue:new Date(),bookmony:Math.floor((new Date()-nt)/1000/60/60/24)*5000,id: 198767888888765})


// Student1.addContact = {
//     name: 'john1',
//     phoneNumber: '+99892-123-45',
//     bookName:['Saodat asri qissalari','Yalangayog` bolaligim'],
//     dataBooksTaken:new Date(1687687622109),
//     amountDue:new Date(),
//     bookmony:Math.floor((new Date()-new Date(1687687622109))/1000/60/60/24)*5000
// }

// Student1.addContact = {
//     name: 'jane1',
//     phoneNumber: '+99892-222-77',
//     bookName:'Boburnoma',
//     dataBooksTaken:new Date(1687677622109),
//     amountDue:new Date(),
//     bookmony:Math.floor((new Date()-new Date(1687677622109))/1000/60/60/24)*5000    
// }

// Student1.edit = {
//     id:198767888888765,
//     phoneNumber:'1111',
//     name: 'Doe',
//     bookName:'temur tuziklari',
//     dataBooksTaken:new Date(1687877622109),
//     amountDue:new Date(),
//     bookmony:Math.floor((new Date()-new Date(1687877622109))/1000/60/60/24)*5000
// }
// console.log(Student1.getAllContacts);
