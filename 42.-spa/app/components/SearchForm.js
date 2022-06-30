export function SearchForm() {
    const $form = document.createElement('form');
    const $input = document.createElement('input');
    $input.name = "search";
    $input.type = "search";
    $input.placeholder = 'Buscar...';
    $form.classList.add('search-form');
    $form.appendChild($input);

    if (location.hash.includes('#/search')) {
        $input.value = localStorage.getItem('wpSearch');
    }

    document.addEventListener("search",(evt)=>{
        if (!evt.target.matches("input[type='search']")) {
            return false;
        }
        if (!evt.target.value) {
            localStorage.removeItem('wpSearch');
        }

    });

    document.addEventListener('submit',(evt)=>{
        if (!evt.target.matches('.search-form')) { return false; }
        evt.preventDefault();
        localStorage.setItem('wpSearch',$input.value);
        location.hash = `#/search?search=${$input.value}`;
    });

    return $form;
}