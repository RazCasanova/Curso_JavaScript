import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import wp_api from './wp_api.js';

export async function InfiniteScroll() {

    let query = localStorage.getItem('wpSearch'),
        apiURL,
        Component;
        
    window.addEventListener('scroll',async (evt)=>{
        let {scrollTop, clientHeight, scrollHeight} = document.documentElement;
        let {hash} = window.location;

        if (scrollTop + clientHeight >= scrollHeight) {
            wp_api.page++;  

            if (!hash || hash === '#/') {
                apiURL = `${wp_api.POSTS}&page=${wp_api.page}`;
                Component = PostCard;
            }else if (!hash || hash === '#/search') {
                apiURL = `${wp_api.SEARCH}${query}&page=${wp_api.page}`;
                Component = SearchCard;
            }else{
                return false;
            }

            document.querySelector('.loader').style.display = 'block';

            await ajax({
                url : apiURL,
                method : "GET",
                success : (posts)=>{
                    let html = '';
                    posts.forEach(post => html += Component(post));
                    document.getElementById('main').insertAdjacentHTML('beforeend',html);
                }
            });
            document.querySelector('.loader').style.display = 'none';
        }
    });
}