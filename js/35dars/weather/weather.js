


function search() {
    const input = document.querySelector('#input')
    const shahar = document.querySelector('.Shahar')
    const obhv = document.querySelector('.obhv')
    const shamol = document.querySelector('.shamol');
    (async () => {
        const style1 = `<style>

            .container{
                display: flex;
            }
            .loader {
                margin-top: 20px;
                margin-left: 50px;
                width: 48px;
                height: 48px;
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
                width: 56px;
                height: 56px;
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
              <span class="loader"></span>
`
        shahar.innerHTML = style1
        obhv.innerHTML = style1
        shamol.innerHTML = style1
        const reponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=96b947a45d33d7dc1c49af3203966408`)
        const data = await reponse.json();
        console.log(data);
        shahar.innerHTML = `<span class='shaharName'>${input.value}</span>`
        obhv.innerHTML = `<span class='temp'>Temp: ${data.main.temp > 30 ? data.main.temp + ' ☀️' : data.main.temp < 0 ? data.main.temp + ' ❄️' : data.main.temp < 10 ? data.main.temp + ' 🌧' : data.main.temp + ' ⛅️'} </span>`
        shamol.innerHTML = `<span class='shml'>Shamol tezligi: ${data.wind.speed} m/s</span>`
    })()
}