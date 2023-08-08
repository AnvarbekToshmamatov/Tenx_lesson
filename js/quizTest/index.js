
const quizApp = document.querySelector('#quizApp')
const arr = [`<p>Quiz App</p>
<span>O'zbekistondagi janubiy veloyat</span>
<div class="box">
    <button onclick="btn(); btn1();" class='btn1'>Toshkent</button>
    <button onclick="btn(); btn2();" class='btn2'>Samarqand</button>
    <button onclick="btn(); btn3();" class='btn3'>Surxondaryo</button>
    <button onclick="btn(); btn4();" class='btn4'>Namangan</button>
</div>
<b class="vaqt">60</b>`, ['Toshkent', 'Samarqand', 'Surxondaryo', 'Namangan'], `<p>Quiz App</p>
<span>Yer yuzidagi eng katta okean</span>
<div class="box">
    <button onclick="btn(); btn1();" class='btn1'>Tinch okeani</button>
    <button onclick="btn(); btn2();" class='btn2'>Atlantika okeani</button>
    <button onclick="btn(); btn3();" class='btn3'>Hind okeani</button>
    <button onclick="btn(); btn4();" class='btn4'>Shimoliy muz okeani</button>
</div>
<b class="vaqt">60</b>`, ['Tinch okeani', 'Atlantika okeani', 'Hind okeani', 'Shimoliy muz okeani'], `<p>Quiz App</p>
<span>Yer maydoni eng katta davlat</span>
<div class="box">
    <button onclick="btn(); btn1();" class='btn1'>Xitoy</button>
    <button onclick="btn(); btn2();" class='btn2'>Rossiya</button>
    <button onclick="btn(); btn3();" class='btn3'>Canada</button>
    <button onclick="btn(); btn4();" class='btn4'>Uzbekiston</button>
</div>
<b class="vaqt">60</b>,`, ['Xitoy', 'Rossiya', 'Canada', 'Uzbekiston'], `<p>Quiz App</p>
<span>Testimiz sezga yoqdimi</span>
<div class="box">
    <button onclick="btn(); btn1();" class='btn1'>Ha</button>
    <button onclick="btn(); btn2();" class='btn2'>Ha😄</button> 
    <b class="vaqt">60</b>`]

let i = 0, btn11 = 0, btn21 = 0, btn31 = 0, btn41 = 0
let arr1 = []
let a = 1, b = 0
function btn1() {
    arr1.push(arr[a][0])
    a = a + 2
}
function btn2() {
    arr1.push(arr[a][1])
    a = a + 2
}
function btn3() {
    arr1.push(arr[a][2])
    a = a + 2
}
function btn4() {
    arr1.push(arr[a][3])
    a = a + 2
}

console.log();

function btn() {
    quizApp.setAttribute('id', 'quizApp1')
    const quiz = document.querySelector('#quizApp1')
    if (i <= 6) {
        quiz.innerHTML =
            arr[i]
    } else {
        for (let a of arr1) {
            b = (a == 'Surxondaryo' || a == 'Tinch okeani' || a == 'Rossiya') ? b += 1 : b
        }
        quiz.innerHTML = `
        <p class='vaqt'>1</p>
        <p class='nat'>to'g'ri javoblar soni: ${b}</p>
        <p class='nat'>Sermaxsullik:${(100 / 3) * b}%</p>
        <button onclick='rst()'>Restart</button>`

    }

    const vaqt = document.querySelector('.vaqt')


    if (i <= 6) {
        const x = setInterval(() => {
            if (vaqt.textContent == 0) {
                clearInterval(x)
                arr1.push('null')
                if (i < 6) {
                    btn()
                }
            }
            vaqt.textContent = +vaqt.textContent - 1
        }, 1000)
    }
    i = i + 2

}

function rst() {
    quizApp.setAttribute('id', 'quizApp')
    quizApp.innerHTML = `<p>Quiz App</p>
    <button onclick="btn()">Start quiz</button>`
}

