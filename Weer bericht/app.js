let stadInput = document.getElementById("stadInput");
let knop = document.getElementById("weerKnop");
let resultaat = document.getElementById("resultaat");

// api van de weather website
let apiKey = "74a8c75e65275c9874d1b750dbd0404d";

knop.onclick = async function () {

    let stad = stadInput.value;

    if (stad === "") {
        resultaat.innerHTML = "❌ Vul een stad in";
        return;
    }

    let url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        stad +
        "&units=metric&lang=nl&appid=" +
        apiKey;

    try {
        let response = await fetch(url);

        let data = await response.json();

        if (data.cod !== 200) {
            resultaat.innerHTML = "❌ Stad niet gevonden";
            return;
        }

        resultaat.innerHTML =
            "🌡️ Temperatuur: " + data.main.temp + " °C<br>" +
            "💧 Luchtvochtigheid: " + data.main.humidity + "%<br>" +
            "☁️ Weer: " + data.weather[0].description;

    } catch (fout) {
        resultaat.innerHTML = "❌ Er ging iets mis";
    }
};
