
const btn=document.querySelector('.container')

const user=['salom','hello','call','button']

function render(user){
    btn.innerHTML=''

    //1-usul
//    for(let a of user){
//      btn.innerHTML+=`<button>${a}</button>`
//    }
   

//2-usul
   for(let a of user){
    
   const btn1=document.createElement('button')
   btn1.textContent=a
   btn.appendChild(btn1)
   }


}
let isSorted=false
function filter(){
    user.sort((a,b)=>{
        if(isSorted){
            return b.localeCompare(a)
        }else{
            return a.localeCompare(b)
        }
    })
    isSorted=!isSorted
    render(user)
}

function search(value){
    const newUser=user.filter((user)=>user.includes(value))
    render(value?newUser:user)
}

filter()