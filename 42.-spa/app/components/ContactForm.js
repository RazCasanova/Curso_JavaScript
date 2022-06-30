export function ContactForm() {
    const $form = document.createElement('form'),
        $styles = document.getElementById('dynamic-styles');
        $styles.innerHTML = `
        html{
            font-family: sans-serif;
            font-size: 16px;
            box-sizing: border-box;
        }
        
        body{
            margin: 0;
            overflow-x: hidden;
        }
        
        *,
        *::after,
        *::before{
            box-sizing: inherit;
        }
        
        .container{
            width: 70%;
            margin: 0 auto;
            text-align: center;
        }
        
        .valid{
            border: 1px solid #42db2e;
        }
        
        .invalid{
            border: 1px solid #db2e2e;
        }
        
        .formulario_contacto{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width:80%;
            margin:auto auto;
        }
        
        .formulario_contacto input,
        .formulario_contacto textarea{
            font-size: 1rem;
            margin-top: .5rem;
            padding: .5rem;
            resize: none;
        }
        
        .formulario_contacto input:focus{
            border-style: none;
        }
        
        .formulario_contacto button{
            width: 50%;
            font-size: 1rem;
            padding: .5rem;
            margin-top: .5rem;
            margin-left: auto;
            margin-right: auto;
            cursor: pointer;
        }
        
        .formulario_contacto span{
            background-color: #db2e2e;
            color: #fff;
            padding: .5rem;
        }

        .loader-form{
            width: 5vw;
            height: 5vw;
            border: 5px solid #222;
            border-radius: 50%;
            border-left: 5px solid#f7df1c;
            animation: spinner 1s ease-out infinite;
            margin: 0 auto;
        }

        @keyframes spinner {
            0%{transform: rotate(0deg);}
            100%{transform: rotate(360deg);}
        }

        .none{
            display: none;
        }
        
        `;
     $form.classList.add('formulario_contacto');
    
     $form.innerHTML = `
    <input type="text" name="nombre" id="nombre" placeholder="Escribe tu nombre" pattern="^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$" title="Nombre invalido" required />
    <input type="email" name="email" id="email" placeholder="Escribe tu email" pattern="[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})" title="Email invalido" required />
    <input type="text" name="asunto" id="asunto" placeholder="Escribe el asunto" title="Asunto invalido" required />
    <textarea name="comentarios" id="comentarios" cols="30" rows="10" data-pattern="^.{1,255}$" title="Comentario con 0 o con más de 255 caracteres" required ></textarea>
    <button type="submit">Enviar</button>
    <h2 class="respuesta none">Los datos han sido enviados</h2>
    <div class="loader-form none"></div>
    `;


    function validarFormulario() {
        const $inputs = document.querySelectorAll(
          "#formulario_contacto [required]"
        );

        $inputs.forEach((element) => {
          const $span = document.createElement("span");
          $span.id = element.name;
          $span.textContent = `${element.title}`;
          $span.classList.add("none");
          element.insertAdjacentElement("afterend", $span);

        });

        document.addEventListener("keyup", (evt) => {
          if (evt.target.matches("#formulario_contacto [required]")) {
            let $input = evt.target;
            let pattern = $input.pattern || $input.dataset.pattern;

            if (pattern && $input.value !== "") {
              let regex = new RegExp(pattern);
              if (regex.exec($input.value)) {
                document
                  .getElementById($input.name)
                  .classList.remove("invalid");
                document.getElementById($input.name).classList.add("valid");
                document
                  .querySelector(`span#${$input.name}`)
                  .classList.add("none");

                document
                  .querySelector("#formulario_contacto button[type=submit]")
                  .removeAttribute("disabled");
              } else {
                document.getElementById($input.name).classList.remove("valid");
                document.getElementById($input.name).classList.add("invalid");
                document
                  .querySelector(`span#${$input.name}`)
                  .classList.remove("none");

                document
                  .querySelector("#formulario_contacto button[type=submit]")
                  .setAttribute("disabled", "");
              }
            } else {
              document.getElementById($input.name).classList.remove("valid");
              document.getElementById($input.name).classList.add("invalid");
              document
                .querySelector(`span#${$input.name}`)
                .classList.remove("none");
            }

            if (!pattern) {
              if ($input.value !== "") {
                document
                  .getElementById($input.name)
                  .classList.remove("invalid");
                document.getElementById($input.name).classList.add("valid");
                document
                  .querySelector(`span#${$input.name}`)
                  .classList.add("none");
                document
                  .querySelector("#formulario_contacto button[type=submit]")
                  .removeAttribute("disabled");
              } else {
                document.getElementById($input.name).classList.remove("valid");
                document.getElementById($input.name).classList.add("invalid");
                document
                  .querySelector("#formulario_contacto button[type=submit]")
                  .setAttribute("disabled", "");
              }
            }
          }
        });
        document.addEventListener('submit',(evt)=>{
            evt.preventDefault();
            const $loader = document.querySelector('.loader-form');
            const $respuesta = document.querySelector('.respuesta');
    
            $loader.classList.remove('none');
    
            fetch("https://formsubmit.co/ajax/f4casanovarosasraziel@gmail.com",{
                method : "POST",
                body : new FormData(evt.target)
            })
            .then((res)=> res.ok ? res.json() : Promise.reject(res))
            .then((json)=>{
                console.log(json);
                $loader.classList.add('none');
                $respuesta.classList.remove('none');
            })
            .catch((error)=>{
                console.log(error);
                let message = error.statusText || "Ocurrio un error al enviar el formulario";
                $respuesta.innerHTML = `Error ${error.status} : ${message}`;
                $respuesta.classList.remove('none');
                // console.error(error);
            })
            .finally(()=>{
                setTimeout(() => {
                    $loader.classList.add('none')
                    $respuesta.classList.add('none');
                    evt.target.reset();
                }, 3000);
            });
    
          });
      }

      validarFormulario();

    return $form;
}