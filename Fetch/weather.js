document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const ciudad = document.querySelector("#ciudad").value;
    if (!ciudad) {
        alert("Introduce una ciudad");
        location.reload();
    }
    const url = `http://api.weatherapi.com/v1/current.json?key=d4a32557eacb4f72afe90501250801&q=${ciudad}&aqi=no`;
    const res = document.querySelector("#res");

    async function weatherReport() {
        await fetch(url)
            .then(response => {
                if (!response.ok) {
                    return response.json().then(res => {
                        throw new Error(response.status + ": " + res.error.message);
                    });
                }
                return response.json();
            })
            .then(data => {
                console.log(data);

                let img = data.current.condition.icon;
                let nombre = data.location.name;
                let temp = data.current.temp_c;
                let hum = data.current.humidity;
                let region = data.location.region;

                res.classList.remove("text-danger");
                res.innerHTML = `<img src="${img}"> <span class="fw-bold">${nombre}</span>, ${region}<br>  ${temp}ºC y ${hum}% de humedad`;
            })
            .catch(error => {
                res.classList.add("text-danger");
                // res.innerHTML = "No es una ciudad válida";
                res.innerHTML = error;
            })
    }
    weatherReport();
})		
