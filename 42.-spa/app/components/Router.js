import  api  from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";

export async function Router() {
    const $main = document.getElementById('main');
    let {hash} = location;

    $main.innerHTML = null;
    if (!hash || hash === '#/') {
        await ajax({
            url : api.POSTS,
            method : "GET",
            success : (posts) => {
                let html = '';
                posts.forEach(element => html += PostCard(element));
                    $main.innerHTML = html;
            }
        });
    }else if (hash.includes('#/search')) {
        $main.innerHTML = `<h2>Sección del buscador</h2>`;   
    }else if (hash === '#contact') {
        $main.innerHTML = `<h2>Sección de contacto</h2>`;      
    }else{
        await ajax({
            url :`${api.POST}/${localStorage.getItem('wpPostId')}`,
            method : "GET",
            success : (post) => {
                $main.innerHTML = Post(post);
            }
        });      
    }
    document.querySelector('.loader').style.display = "none";
}