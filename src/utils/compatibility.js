export default function(){
    if(navigator.mediaDevices == undefined || navigator.mediaDevices.enumerateDevices == undefined || navigator.mediaDevices.getUserMedia == undefined){
        return false;
    }

    return true
}