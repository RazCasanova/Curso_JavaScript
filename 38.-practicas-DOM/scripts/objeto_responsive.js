export default function responsiveMedia (id, mq, mobileContent, desktopContent) {
    let breakpoint = window.matchMedia(mq);
    const responsive = (evt) =>{
        if (evt.matches) {
            document.getElementById(id).innerHTML = desktopContent;
        }else{
            document.getElementById(id).innerHTML = mobileContent;
        }
    }
    breakpoint.addListener(responsive);
    responsive(breakpoint);
}