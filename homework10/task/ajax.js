const ajax = ({ method, url, success, error }) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
    
    xhr.addEventListener('load', () => {
        const data = JSON.parse(xhr.responseText)
        success(data);
    })

    xhr.addEventListener('error', () => {
        error({
            errorText: xhr.responseText,
            code: xhr.status,
        });
    })
}