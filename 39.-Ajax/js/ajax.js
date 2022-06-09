(()=>{
    /*
        XMLHTTPRequest

    Paso 1 - Crear una nueva instancia del tipo XMLHttpRequest
    Paso 2 - Asignar los eventos que se vayan a manipular de la petición
    Paso 3 - Abrir la petición asignandole un metodo (GET, POST, HEAD, etc) y la dirección URL o endpoint que se va a acceder
    Paso 4 - Enviar la petición con el método send (con o sin datos, dependiendo de las necesidades)
    */
    const xhr = new XMLHttpRequest();
    const $xhr = document.getElementById('xhr');
    const $fragment = document.createDocumentFragment();

    xhr.addEventListener('readystatechange',(evt)=>{
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("Exito");
            // console.log(xhr.responseText);
            let json = JSON.parse(xhr.responseText);
            json.forEach(element => {
                const $li = document.createElement('li');
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
        }else{
            console.log("Error");
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status} : ${message}`;
        }
    });
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/user');
    xhr.send();

})();


(()=>{
    const $fetch = document.getElementById('fetch');
    const $fragmentFetch = document.createDocumentFragment();
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((respuesta)=> respuesta.ok ? respuesta.json() : Promise.reject(respuesta))
    .then((json=>{
        json.forEach(element => {
            const $li = document.createElement('li');
            $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
            $fragmentFetch.appendChild($li);
        });
        $fetch.appendChild($fragmentFetch);
    }))
    .catch((error=>{
        console.log("Error: " ,error.status);
        let message = error.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${error.status} : ${message}`;
    }))
})();

/* Fetch + Async - Await */

(()=>{
    const $fetchAsync = document.getElementById('fetch-async');
    const $fragment = document.createDocumentFragment();
    async function getData() {
        try {
            let respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
            let json = await respuesta.json();

            if (!respuesta.ok) {
                throw {status : respuesta.status, statusText : respuesta.statusText};
            }

            json.forEach(element => {
                const $li = document.createElement('li');
                    $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                    $fragment.appendChild($li); 
            });

            $fetchAsync.appendChild($fragment);
            
        } catch (error) {
            console.log(error);
            let message = error.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${error.status} : ${message}`;
        }    
    }
    getData();
})();

/* Axios */
(()=>{
    const $axios = document.getElementById('axios');
    const $fragment = document.createDocumentFragment();

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((respuesta)=>{
        let json = respuesta.data;
        json.forEach(element => {
            const $li = document.createElement('li');
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li); 
        });
        $axios.appendChild($fragment);

    })
    .catch((error)=>{
        console.log(error);
        let message = error.response.statusText || "Ocurrio un error";
        $axios.innerHTML = `Error ${error.response.status} : ${message}`;
    });
})();

/* Axios + Async - Await */
(()=>{
    const $axiosAsync = document.getElementById('axios-async');
    const $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
            let json = await respuesta.data;
            
            json.forEach(element=>{
                const $li = document.createElement('li');
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            $axiosAsync.appendChild($fragment);

        } catch (error) {
            console.log(error);
            let message = error.response.statusText || "Ocurrio un error";
            $axios.innerHTML = `Error ${error.response.status} : ${message}`;
        }
    }

    getData();
})();