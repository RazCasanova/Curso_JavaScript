import  api  from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";

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
        let query = localStorage.getItem('wpSearch');
        if (!query) {
            document.querySelector('.loader').style.display = 'none'; 
            return false; 
        }
        await ajax({
            url : `${api.SEARCH}${query}`,
            method : "GET",
            success : (search) =>{
                let html = '';
                if (search.length === 0) {
                    html = `
                        <p class="error">No existe el resultado de la busqueda: <b>${query}</b></p>
                    `;
                }else{
                    search.forEach(post=>{html += SearchCard(post)});
                }
                $main.innerHTML = html;
            }
        })   
    }else if (hash === '#/contact') {
        $main.appendChild(ContactForm());      
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