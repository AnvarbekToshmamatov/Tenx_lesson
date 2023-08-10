

const game = document.querySelector('#game')
let son = 0
let b = 1
function start() {
    game.setAttribute('id', 'game1')
    son = Math.floor(Math.random() * 100)
    console.log(son);
    game.innerHTML = `<p class='p'>Yashirin sonni topishga harakat qiling. Sonni kriting, son 0 dan 100 gacha oralig'da</p><div class='box'><input type="number" id="taskName" />
    <button id="addTask" onclick="add()">Add</button></div>
    <div id="app"></div>
    <span>Bosqich:${b}</span>`
    b += 1
}
let a = 0, c = 2

function add() {
    const input = document.querySelector('#taskName')
    const res = document.querySelector('#app')
    if (input.value == son) {
        game.innerHTML = `<div id="app"></div>
            <button onclick='kk()'>Keyingi tur: ${c}</button>`
        a = 0
        const res1 = document.querySelector('#app')
        res1.textContent = "Siz IQ darajangiz juda yuqori siz juda zo'r fikirladingiz. 👍🥳"
        input.value = ''
        c += 1
    } else if (a == 10) {
        res.textContent = `Bratan sez boshqa uyinni o'ynab koring bu sezgamas ekan 😭 Sen ${b - 1} turdayoq yiqilding`
        input.value = ''
    } else if (input.value <= son + 5 && input.value >= son - 5) {
        res.textContent = `Yaxshi urunishni amalga oshirdingiz, uynashda davom eting. 🤓 Yashirin son sezni kiritgan ${input.value} raqamidan 5 birilik sonlar ichida`
        input.value = ''
        a += 2
    } else if (input.value <= son + 10 && input.value >= son - 10) {
        res.textContent = `Yaxshi urunishni amalga oshirdingiz, uynashda davom eting. 🧐 Yashirin son sezni kiritgan ${input.value} raqamidan 10 birilik sonlar ichida`
        input.value = ''
        a += 2
    }
    else if (input.value <= son + 20 && input.value >= son - 20) {
        res.textContent = `Exxx azgina uzoqlashib kettingiz. Yana davom eting 😐 Yashirin son sezni kiritgan ${input.value} raqamidan 20 birilik sonlar ichida`
        input.value = ''
        a += 2
    } else if (input.value <= son + 30 && input.value >= son - 30) {
        res.textContent = `Exx natija yaxshimas bratan. ☹️ Yashirin son sezni kiritgan ${input.value} raqamidan 30 birilik sonlar ichida`
        input.value = ''
        a += 1
    } else {
        res.textContent = `Davom eting, ancha uzoqlashdiz Yashirin son sezni kiritgan ${input.value} raqamidan 90 birilik sonlar ichida `
        input.value = ''
        a += 1
    }
}

function kk() {
    start()
}

