const alertapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5014130&appid=390e2c7ae7f11da066639b14a77939e5&units=imperial";
fetch(alertapiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        const walert = jsonObject['alerts'];
        const container = document.querySelector('div.weatheralert');
        if(walert === undefined || walert.length == 0) {
        container.style.display = 'none';          
        }

        else {
            container.style.display = 'none';
            container.style.display = 'block';
            document.getElementById('sender').textContent = jsonObject.alerts.sender_name;
            document.getElementById('weatherevent').textContent = jsonObject.alerts.event;
            document.getElementById('description').textContent = jsonObject.alerts.description;
            
        }
    });