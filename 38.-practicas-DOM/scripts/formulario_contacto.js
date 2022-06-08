export default function validarFormulario() {

    const $formulario = document.getElementById('#formulario_contacto');
    const $inputs = document.querySelectorAll('#formulario_contacto [required]');


    $inputs.forEach(element => {
        const $span = document.createElement('span');
        $span.id = element.name;
        $span.textContent = `${element.title}`;
        $span.classList.add('none');
        element.insertAdjacentElement('afterend', $span);
    });

    document.addEventListener('keyup',(evt)=>{
        if (evt.target.matches('#formulario_contacto [required]')) {
            let $input = evt.target;
            let pattern = $input.pattern || $input.dataset.pattern;

            if (pattern && $input.value !== '') {
                let regex = new RegExp(pattern);
                if (regex.exec($input.value)) {
                    document.getElementById($input.name).classList.remove('invalid');
                    document.getElementById($input.name).classList.add('valid');
                    document.querySelector(`span#${$input.name}`).classList.add('none');
                    
                    document.querySelector('#formulario_contacto button[type=submit]').removeAttribute('disabled');
                }else{
                    document.getElementById($input.name).classList.remove('valid');
                    document.getElementById($input.name).classList.add('invalid');
                    document.querySelector(`span#${$input.name}`).classList.remove('none');

                    document.querySelector('#formulario_contacto button[type=submit]').setAttribute('disabled','');

                }
            }else{
                document.getElementById($input.name).classList.remove('valid');
                document.getElementById($input.name).classList.add('invalid');
                document.querySelector(`span#${$input.name}`).classList.remove('none');
            }
            
            if (!pattern) {
                if ($input.value !== '') {
                    document.getElementById($input.name).classList.remove('invalid');
                    document.getElementById($input.name).classList.add('valid');
                    document.querySelector(`span#${$input.name}`).classList.add('none');
                    document.querySelector('#formulario_contacto button[type=submit]').removeAttribute('disabled');
                }else{
                    document.getElementById($input.name).classList.remove('valid');
                    document.getElementById($input.name).classList.add('invalid');
                    document.querySelector('#formulario_contacto button[type=submit]').setAttribute('disabled','');
                }
            }
        }
    });
}