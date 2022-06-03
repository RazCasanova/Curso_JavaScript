export default function geolocalizacion(datosGeo) {
    const $contenedor = document.querySelector(datosGeo);


    const success = (geo) =>{
        let latitud = geo.coords.latitude, 
            longitud = geo.coords.longitude, 
            presicion = geo.coords.accuracy;
        $contenedor.innerHTML += `
        <h3>La posición actual es:</h3>
        <p>Latitud : ${latitud}</p>
        <p>Longitud: ${longitud}</p>
        <p>Presición: ${presicion} metros</p>

        <a href="https://www.google.com.mx/maps/@${latitud},${longitud},15z" target="_blank">Ver en el mapa</a>
        `;
    }

    const error = (error) =>{
        $contenedor.innerHTML = `<p>Error: ${error.message}</p>`;
    }
    navigator.geolocation.getCurrentPosition(success,error,{enableHighAccuracy : true, timeout : 5000, maximumAge : 0});
}