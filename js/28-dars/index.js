const container = document.querySelector('#container')
const content = document.querySelector('#content')

const characters=[['<<','>>','C','<='],
['(',')','%','/']
,['7','8','9','x']
    ,['4','5','6','-']
,['1','2','3','+']
,['+/-','0','.','=']
]

characters.forEach((item)=>{
    const row =document.createElement('div')
    row.classList.add('row')

    item.forEach((char)=>{
        const span=document.createElement('button')
        span.addEventListener('click',()=>{
            handleSpanClick(char)
            // ============================================
            if(span.textContent==='='){
                let res=0
                for(let i=0;i<content.textContent.length;i++){
                    let con_t=content.textContent
                    if( (con_t[i]==='x'&&con_t[i+1]!='x' )||(con_t[i]==='+'&&con_t[i+1]!='+')||(con_t[i]==='-'&&con_t[i+1]!='-')||(con_t[i]==='/'&&con_t[i+1]!='/')||(con_t[i]==='%'&&con_t[i+1]!='%') ){
                        res=i
                    }else if((con_t[i]==='x'&&con_t[i+1]=='x' )||(con_t[i]==='+'&&con_t[i+1]=='+')||(con_t[i]==='-'&&con_t[i+1]=='-')||(con_t[i]==='/'&&con_t[i+1]=='/')||(con_t[i]==='%'&&con_t[i+1]=='%')){
                        content.textContent='Ammallar natog`ri bajarildi'
                    }
                }
                console.log(content.textContent.slice(0,res));

                switch(content.textContent[res]){
                    case 'x':
                        content.textContent=content.textContent.slice(0,res)*content.textContent.slice(res+1,-1)
                        break
                    case '-':
                        content.textContent=content.textContent.slice(0,res)-content.textContent.slice(res+1,-1)  
                        break
                    case '+':
                        content.textContent=content.textContent.slice(0,res)/1+content.textContent.slice(res+1,-1)/1
                        break
                    case '/':
                        content.textContent=content.textContent.slice(0,res)/content.textContent.slice(res+1,-1) 
                        break 
                    case '%':
                        content.textContent=content.textContent.slice(0,res)%content.textContent.slice(res+1,-1) 
                        break         
                }
            }
            // =========================================
            if(span.textContent==='C'){
               content.textContent=''
            }
            // ======================================
            if(span.textContent==='<='){
                content.textContent=content.textContent.slice(0,content.textContent.length-3)
             }
            //  ===========================================
        })
        span.textContent=char
        span.setAttribute('key',char)
        row.appendChild(span)
    })
    container.appendChild(row)
})

function toggleActive(e,event){

    switch(e){
        case 'Backspace':content.textContent=content.textContent.slice(0,-1)
        break
        
        default:
            const el=document.querySelector(`[key='${e}']`)
            el.classList.toggle('active')
            setTimeout(()=>{
                el.classList.remove('active')
            },500)
            // content.textContent=''
            content.textContent+=e
            return el            
    }

    
}


document.addEventListener('keydown',(e)=>{
    toggleActive(e.key,e)
})

function handleSpanClick(param){
    toggleActive(param)
}


