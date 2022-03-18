function kepCsere() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function (data) {
        const adatok = data.target.response;
        const sor = JSON.parse(adatok);
        const ujKep = sor.file
        document.getElementById('kep').src = ujKep
    };
    xhttp.open("GET", "https://aws.random.cat/meow");
    xhttp.send();
}

window.onload = kepCsere()
 