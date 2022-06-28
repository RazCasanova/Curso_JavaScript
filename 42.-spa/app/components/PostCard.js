export function PostCard(props) {
    let {title, date, id, slug, _embedded} = props;
    let dateFormat = new Date(date).toLocaleString(),
        urlPoster = _embedded['wp:featuredmedia'] 
                    ? _embedded['wp:featuredmedia'][0].source_url 
                    : "app/assets/favicon.png";
    document.addEventListener('click',(evt)=>{
        if (!evt.target.matches('.post-card a')) { return false; }
        localStorage.setItem('wpPostId', evt.target.dataset.id);
    });
    return `
        <article class="post-card">
            <img src="${urlPoster}" alt="">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}" data-id="${id}">Ver publicación</a>
            </p>
        </article>
    `;
}