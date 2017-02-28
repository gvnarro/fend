


onmessage = (e: MessageEvent)=>{
    callToServer(e.data. url_api_assistance);
};



function callToServer(uriAssistance: string){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", uriAssistance);
    xhr.onload = function () {
        (<any>self.postMessage)(xhr.responseText);   
    };
    xhr.send();
    setTimeout("callToServer('"+uriAssistance+"')",1000*10);  
};