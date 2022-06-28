export async function ajax(props) {
    let {url, method, success} = props;

    await fetch(url,{method})
    .then(respuesta => respuesta.ok ? respuesta.json() : Promise.reject(respuesta))
    .then(json => success(json))
    .catch(error => {
        let message = error.statusText || "Ocurrio un error";
        document.getElementById('main').innerHTML =`
        <div class="error">
            <p>Error ${error.status} : ${message}</p>
        </div>
        `;
        document.querySelector('.loader').style.display = 'none';
    })

}