export default function vidIntelligent(video) {
    const $videos = document.querySelectorAll('video[data-video]');

    
    const callback = (entries) =>{
        entries.forEach(element => {
            if (element.isIntersecting && document.visibilityState === 'visible') {
                element.target.play();
            }else{
                element.target.pause();
            }

            document.addEventListener('visibilitychange',(evt)=>{
                (evt.target.visibilityState === 'visible') 
                ? element.target.play()
                : element.target.pause(); 
            })
        });
    }
    const options = {
        threshold : [0.75]
    }
    const observer = new IntersectionObserver(callback,options);
    
    $videos.forEach(element=>{
        observer.observe(element);
    })

        

}