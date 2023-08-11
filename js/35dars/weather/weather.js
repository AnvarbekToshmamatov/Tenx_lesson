


function search() {
    const input = document.querySelector('#input')
    const shahar = document.querySelector('.Shahar')
    const obhv = document.querySelector('.obhv');
    const shamol = document.querySelector('.shamol');
    (async () => {
        const reponse = await fetch(`
        https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=96b947a45d33d7dc1c49af3203966408
        `)
        const data = await reponse.json();
        shahar.innerHTML = `<span class='shaharName'>${input.value}</span>`
        obhv.innerHTML = `<span class='temp'>Temp: ${data.main.temp > 30 ? data.main.temp + ' ☀️' : data.main.temp < 0 ? data.main.temp + ' ❄️' : data.main.temp < 10 ? data.main.temp + ' 🌧' : data.main.temp + ' ⛅️'} </span>`
        shamol.innerHTML = `<span class='shml'>Shamol tezligi: ${data.wind.speed} m/s</span>`
        console.log(data);
    })()
}