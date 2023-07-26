const box = document.querySelector('#box')
const selict = document.querySelector('#typing1')
const selict2 = document.querySelector('#typing2')
const p = document.querySelector('p')
const span = document.querySelector('span')
const container = document.querySelector('#containe')
const content = document.querySelector('#span1')
const conten = document.querySelector('#conten')

selict2.addEventListener('change', (e) => {
    filter(e.target.value)
})




function typingText() {
    box.setAttribute('class', 'box2')
    p.textContent = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'

    span.innerHTML = ''
}





let con = 0, n = 1, a = 0
let str = '`1234567890-=^'
let str2 = 'qwertyuiop[]|'
let str3 = `asdfghjkl;'`
let str4 = `shift z x c v b n m , . / tab`

const characters = [[...str.split('')],
[...str2.split('')]
    , [...str3.split('')]
    , [...str4.split(' ')]
]


function filter(value) {
    p.setAttribute('class', value)
}

filter(value)




function btn() {




    typingText()
    container.setAttribute('id', 'container')

    conten.textContent = '0 xato'


    characters.forEach((item) => {
        const row = document.createElement('div')
        row.classList.add('row')
        item.forEach((char) => {
            const span = document.createElement('button')
            span.addEventListener('click', () => {
                handleSpanClick(char)


                if (span.textContent == 'tab' || span.textContent == ' ') {
                    content.textContent += ' '
                    console.log(span.textContent);
                    n = n + 1
                }

                // // ======================================
                if (span.textContent === '^') {
                    content.textContent = content.textContent.slice(0, content.textContent.length - 2)
                }
                //  ===========================================
            })
            span.textContent = char
            span.setAttribute('key', char)
            row.appendChild(span)
        })
        container.appendChild(row)
    })


    function toggleActive(e, event) {
        switch (e) {
            case 'Backspace': content.textContent = content.textContent.slice(0, -1)
                break

            default:
                const el = document.querySelector(`[key='${e}']`)
                el.classList.toggle('active')
                setTimeout(() => {
                    el.classList.remove('active')
                }, 500)
                // content.textContent=''


                if (p.textContent[content.textContent.length] == e) {
                    content.textContent += e
                } else {
                    con = con + 1 - n
                    conten.textContent = con + ' xato'
                    n = 0
                }

                if (content.textContent.length === p.textContent.length) {
                    conten.textContent = `Natija: ${Math.floor(100 - (100 / p.textContent.length) * con)}%`
                    return ''
                }

        }
        // return el            
    }



    document.addEventListener('keydown', (e) => {
        toggleActive(e.key, e)
    })

    function handleSpanClick(param) {
        toggleActive(param)
    }

}