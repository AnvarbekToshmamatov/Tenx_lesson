


(async ()=>{
    const country=document.querySelector('#country')
    const box=document.querySelector('#container')
    const respons=await fetch(`http://46.101.247.236:8080/viloyat`)
    const data=await respons.json()
    console.log(data);
    data.data.forEach(el => {
        const option1=document.createElement('option')
        option1.value=el.cityHref
        option1.textContent=el.cityName
        country.appendChild(option1)
    });
    
    
})()

const country=document.querySelector('#country')
country.addEventListener('change',(e)=>{
    (async ()=>{
        const city=document.querySelector('#city')
        city.innerHTML='<option selected disabled>Shaharni tanlang</option>'
        const respons1=await fetch(`http://46.101.247.236:8080/viloyat/${e.target.value}`)
        const data=await respons1.json()
        
    data.data.forEach(el => {
        const option1=document.createElement('option')
        option1.value=el.cityHref
        option1.textContent=el.cityName
        
        city.appendChild(option1)
    });

   })()
})

const city=document.querySelector('#city')

city.addEventListener('change',(e)=>{
    
    (async ()=>{
        
        const box=document.querySelector('#box')
        box.innerHTML=''
        box.innerHTML=
        `<style>
        body{
            opacity: 0.4;
        }
        .loader {
                            margin-top: 50px;
                            margin-left: 50px;
                            width: 128px;
                            height: 128px;
                            border: 3px solid #FFF;
                            border-radius: 50%;
                            display: inline-block;
                            position: relative;
                            box-sizing: border-box;
                            animation: rotation 1s linear infinite;
                          }
                          .loader::after {
                            content: '';  
                            box-sizing: border-box;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            width: 86px;
                            height: 86px;
                            border-radius: 50%;
                            border: 3px solid;
                            border-color: #FF3D00 transparent;
                          }
            
                          @keyframes rotation {
                            0% {
                              transform: rotate(0deg);
                            }
                            100% {
                              transform: rotate(360deg);
                            }
                          } </style>
                          <span class="loader"></span>`
        const respons1=await fetch(`http://46.101.247.236:8080/shahar/${e.target.value}`)
        const data=await respons1.json()
        
        box.innerHTML=''
        data.forEach(el => {
            const box1=document.createElement('div')
            box1.setAttribute('id','box1')
            const p=document.createElement('p')
            p.textContent=el.prayTime
            const span=document.createElement('h2')
            span.setAttribute('id','span')
            span.textContent=el.prayName
           
            box1.appendChild(p)
            box1.appendChild(span)
            box.appendChild(box1)
        });
      
       })()
})


