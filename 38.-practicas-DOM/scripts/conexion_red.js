export default function conexionARed() {
    const isOnLine = () =>{
        const $div = document.createElement('div');
        if (navigator.onLine) {
            $div.textContent = `Conexión reestablecida`;
            $div.classList.add('online');
            $div.classList.remove('offline');
        }else{
            $div.textContent = `Conexión perdida`;
            $div.classList.remove('online');
            $div.classList.add('offline');
        }
        document.body.insertAdjacentElement("afterbegin", $div);
        setTimeout(() => {
            document.body.removeChild($div)
        }, 2000);
    }
    window.addEventListener('online',(evt) =>{
        isOnLine();
    });
    window.addEventListener('offline',(evt) =>{
        isOnLine();
    });
}