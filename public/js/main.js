
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer')


const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal == " ") {
        city_name.innerText = ` Plz... write the name before search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c7ad3cb7f0f49aafbcb1a181c2c71a64`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`
            temp_real_val.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;
            if (tempMood == 'Clear') {
                temp_status.innerText = "😎";
            } else if (tempMood === 'Clouds') {
                temp_status.innerText = "🌩️";
            }
            else if (tempMood === 'Rain') {
                temp_status.innerText = "⛈️";
            }
            else {
                temp_status.innerText = "☁️";
            }

            datahide.classList.remove('data_hide');



        } catch (error) {
            city_name.innerText = ` Plz... write the name before search`;
            datahide.classList.add('data_hide');

        }
    }


}

submitBtn.addEventListener('click', getInfo);



