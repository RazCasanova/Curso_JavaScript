export function SearchForm() {
    const $form = document.createElement('form');
    const $input = document.createElement('input');
    $input.name = "search";
    $input.type = "search";
    $input.placeholder = 'Buscar...';
    $form.classList.add('search-form');
    $form.appendChild($input);
    return $form;
}