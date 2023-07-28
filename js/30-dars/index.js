

const taymer = document.querySelector('#taymer')
const input = document.querySelector('#input')
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const chiz = document.querySelector('#chiz1')


const btn1 = function () {

    input.addEventListener('keypress', (e) => {

        input1.addEventListener('keypress', (e1) => {

            input2.addEventListener('input', (e2) => {
                btn(e.target.value, e1.target.value, e2.target.value)

            })
        })
    })
}

function btn(e, e1, e2) {
    chiz.setAttribute('id', 'chiz2')





    taymer.innerHTML = ''

    e < 10 ? taymer.textContent += '0' + e + ':' : taymer.textContent += e + ':'
    e1 < 10 ? taymer.textContent += '0' + e1 + ':' : taymer.textContent += e1 + ':'
    e2 < 10 ? taymer.textContent += '0' + e2 : taymer.textContent += e2


    let soat = e * 60 * 60 * 1000 + e1 * 60 * 1000 + e2 * 1000

    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;
    addCSS(`#chiz2{transition: ${soat / 100}s;}`)



    v = new Date().getTime() + soat

    const intv = setInterval(() => {

        let v1 = v - new Date().getTime()

        if (e === 0 && e1 === 0 && e2 == 0) {
            clearInterval(intv)
            return
        }

        e = Math.floor(v1 / 1000 / 60 / 60)
        e1 = Math.floor((v1 - e * 1000 * 60 * 60) / 1000 / 60)
        e2 = Math.floor((v1 - e * 1000 * 60 * 60 - e1 * 60 * 1000) / 1000)
        taymer.innerHTML = ''

        e < 10 ? taymer.textContent += '0' + e + ':' : taymer.textContent += e + ':'
        e1 < 10 ? taymer.textContent += '0' + e1 + ':' : taymer.textContent += e1 + ':'
        e2 < 10 ? taymer.textContent += '0' + e2 : taymer.textContent += e2
    }, 1000)
}


btn1()
