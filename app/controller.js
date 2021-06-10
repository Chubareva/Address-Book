
export default class Controller {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }
    makeRequest(method, url, param,) {
        let xhr = new XMLHttpRequest();
        return new Promise((resolve, reject) =>{      
            xhr.onreadystatechange = () => {
                if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    resolve(xhr.response);
                };
            };
            xhr.open(method,this.baseUrl + url, true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.responseType = "json";
            xhr.onerror=  () => {
                reject(new Error("network error"));
            }
            xhr.send(param);
        });
    };
}
