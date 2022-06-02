export default function videoCamara(video) {
    let $video = document.querySelector(video);
    let camara = navigator.mediaDevices.getUserMedia({ audio: false, video: {width : 700, height : 400} });
    
    camara.then((mediaStream) =>{
        $video.srcObject = mediaStream;
        $video.onloadedmetadata = function (evt) {
            $video.play();
        }
    })
    .catch((error)=>{
        $video.insertAdjacentHTML('beforebegin',`<p>Sucedio el siguiente error : ${error}</p>`);
    })
}