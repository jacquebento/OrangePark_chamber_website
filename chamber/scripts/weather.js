// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption');
const temp1 = document.querySelector('#day1-temp');
const weatherIcon1 = document.querySelector('#day1-icon');
const captionDesc1 = document.querySelector('#day1-caption');
const temp2 = document.querySelector('#day2-temp');
const weatherIcon2 = document.querySelector('#day2-icon');
const captionDesc2 = document.querySelector('#day2-caption');
const temp3 = document.querySelector('#day3-temp');
const weatherIcon3 = document.querySelector('#day3-icon');
const captionDesc3 = document.querySelector('#day3-caption');

const townName = "Orange Park";
const myKey = "de5f1660d9f3688e5be36daf091ea9db"

const myURL = `//api.openweathermap.org/data/2.5/forecast?q=${townName}&appid=${myKey}&units=imperial`;

fetch(myURL)
    .then((response) => response.json())
    .then((data) => displayData(data));

    function displayData(data){
        console.log(data);
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;22
        weatherIcon.alt = data.list[0].weather[0].main;
        captionDesc.innerHTML = data.list[0].weather[0].description;
        var temp = Math.trunc(data.list[0].main.temp)
        currentTemp.innerHTML = `${temp}&deg;F`;
        // day1
        weatherIcon1.src = `http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`;
        weatherIcon1.alt = data.list[1].weather[0].main;
        captionDesc1.innerHTML = data.list[1].weather[0].description;
        var temp = Math.trunc(data.list[1].main.temp)
        temp1.innerHTML = `${temp}&deg;F`;
        // day2
        weatherIcon2.src = `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`;
        weatherIcon2.alt = data.list[2].weather[0].main;
        captionDesc2.innerHTML = data.list[2].weather[0].description;
        var temp = Math.trunc(data.list[2].main.temp)
        temp2.innerHTML = `${temp}&deg;F`;
        // day3
        weatherIcon3.src = `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png`;
        weatherIcon3.alt = data.list[3].weather[0].main;
        captionDesc3.innerHTML = data.list[3].weather[0].description;
        var temp = Math.trunc(data.list[3].main.temp)
        temp3.innerHTML = `${temp}&deg;F`;
    }