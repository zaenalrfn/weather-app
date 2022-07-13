let apiKey = "8b9dce9f4fd6a1aa2ac627a5ab6ece6f",
	input = document.getElementById("nameCity"),
	name = document.getElementById("name"),
	tempWeather = document.getElementById('tempWeather'),
	iconWeather = document.getElementById("iconWeather"),
	titleCloud = document.getElementById("persen_cloud"),
	titleHumidity = document.getElementById("persen_humidity"),
	titleWind = document.getElementById("km_wind"),
	titleFeelsLike = document.getElementById("persen_feelsLike"),
	deskripsi = document.getElementById("deskripsi"),
	container = document.querySelector(".container"),
	tempMinMax = document.getElementById("tempMinMax");

const formWeather = document.getElementById('formWeather');
formWeather.addEventListener('submit', function(e) {
	let nameCity = input.value
	e.preventDefault()
	formWeather.reset()
	requestApiWeather(nameCity);

})

function requestApiWeather(nc) {
	const nameCity = nc
	let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${apiKey}&units=metric`;
		fetchApiWeather(urlApi);
}

function fetchApiWeather(a) {
	const urlApi = a
	fetch(urlApi)
	.then(response => response.json())
	.then(data => {
		tampilan(data)
	});
}


function tampilan(d) {

	const { temp_min, temp_max, temp, humidity, feels_like } = d.main;
	const { id, description } = d.weather[0];


	if (id >= 200 && id <= 232) {
		iconWeather.src = "./assets/images/Weathericon - 2-34.svg";
		container.style.background = "url('./assets/images/Thunderstrom.jpeg') no-repeat";
		container.style.backgroundSize = "cover";
		container.style.objectFit = "cover";
		container.classList.add("activeOpacity");
		setTimeout(function() {
			container.classList.remove("activeOpacity");
		},500)
	} else if (id >= 300 && id <= 321) {
		iconWeather.src = "./assets/images/Weathericon - 2-38.svg";
		container.style.background = "url('./assets/images/Shower_rain.jpeg') no-repeat";
		container.style.backgroundSize = "cover";
		container.style.objectFit = "cover";
		container.classList.add("activeOpacity");
		setTimeout(function() {
			container.classList.remove("activeOpacity");
		},500)
	} else if (id >= 500 && id <= 511) {
		iconWeather.src = "./assets/images/Weathericon - 2-50.svg";
		container.style.background = "url('./assets/images/Rain.jpeg') no-repeat";
		container.style.backgroundSize = "cover";
		container.style.objectFit = "cover";
		container.classList.add("activeOpacity");
		setTimeout(function() {
			container.classList.remove("activeOpacity");
		},500)
	} else if (id >= 600 && id <= 622) {
		iconWeather.src = "./assets/images/Weathericon - 1-19.svg";
		container.style.background = "url('./assets/images/Snow.jpeg') no-repeat";
		container.style.backgroundSize = "cover";
		container.style.objectFit = "cover";
		container.classList.add("activeOpacity");
		setTimeout(function() {
			container.classList.remove("activeOpacity");
		},500)
	} else if (id >= 701 && id <= 781) {
		iconWeather.src = "./assets/images/Weathericon - 2-27.svg";
		container.style.background = "url('./assets/images/Mist.jpeg') no-repeat";
		container.style.backgroundSize = "cover";
		container.style.objectFit = "cover";
		container.classList.add("activeOpacity");
		setTimeout(function() {
			container.classList.remove("activeOpacity");
		},500)
	} else if (id == 800) {
		iconWeather.src = "./assets/images/Weathericon - 2-22.svg";
		container.style.background = "url('./assets/images/Clear sky.jpeg') no-repeat";
		container.style.backgroundSize = "cover";
		container.style.objectFit = "cover";
		container.classList.add("activeOpacity");
		setTimeout(function() {
			container.classList.remove("activeOpacity");
		},500)
	} else if (id >= 801 && id <= 804) {
		iconWeather.src = "./assets/images/Weathericon - 2-32.svg";
		container.style.background = "url('./assets/images/Broken clouds.jpeg') no-repeat";
		container.style.backgroundSize = "cover";
		container.style.objectFit = "cover";
		container.classList.add("activeOpacity");
		setTimeout(function() {
			container.classList.remove("activeOpacity");
		},500)
	}

	name.innerText = d.name
	tempWeather.innerHTML = Math.floor(temp) + `<span>&deg;</span>`;
	titleHumidity.innerText = humidity + "%";
	titleWind.innerText = Math.floor(d.wind.speed) + "km/h";
	titleFeelsLike.innerHTML = Math.floor(feels_like) + "<span>&deg;</span>";
	titleCloud.innerText = d.clouds.all + "%";
	deskripsi.innerText = description;
	tempMinMax.innerHTML = Math.floor(temp_min) + "<span>&deg;</span>" + "/" + Math.floor(temp_max) + "<img src='./assets/images/Weathericon - 1-1.svg'>";
}

/* 

yang harus ada di aplikasi cuaca saya

1. bisa menampilkan nama kota
2. harus bisa menampilkan suhu cuaca
3. ada deskripsinya cuacanya
4. ada kelembaban
5. ada feel like
6. ada suhu minimum dan ada suhu maksimum


refrensi  icon
https://gist.github.com/tbranyen/62d974681dea8ee0caa1

*/