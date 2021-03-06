const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5014130&appid=390e2c7ae7f11da066639b14a77939e5&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('condition').textContent = jsObject.weather[0].description;
        document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        
    });

    const fapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5014130&appid=390e2c7ae7f11da066639b14a77939e5&units=imperial";
    fetch(fapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const time = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(time);
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let day = 0;
        time.forEach(forecast => {
            if (day > 2)
            return;
            let thedate = new Date(forecast.dt_txt);
            const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
            const desc = forecast.weather[0].description;
            document.querySelector(`#weekday${day+1}`).textContent = weekdays[thedate.getDay()];
            document.querySelector(`#ftemp${day+1}`).textContent = forecast.main.temp.toFixed(0) + "°F";
            document.querySelector(`#icon${day+1}`).setAttribute('src', imagesrc);
            document.querySelector(`#icon${day+1}`).setAttribute('alt', desc);
            day++;
        });
    });