// settings = {
//   method: 'GET',
//   url: 'http://...',
//   data: 'some info',
//   timeout: 3000,
//   success: function on success,
//   error: function on error
// }


const ajax = (function() {

  function send(settings) {

    const xhr = new XMLHttpRequest();
    
    xhr.addEventListener('error', function(e) {
      settings.error({
        errorText: xhr.responseText,
        code: xhr.status
      });
    });

    

    xhr.addEventListener('load', function(e) {
      settings.success(xhr.responseText);
    });

    xhr.addEventListener('timeout', function(e) {
      // some action on timeout
    })

    xhr.open(settings.method, settings.url);

    if (settings.headers) {
      for (let headerName in settings.headers) {
        xhr.setRequestHeader(headerName, settings.headers[headerName]);
      }
    }
    
    xhr.timeout = settings.timeout || 3000;
    xhr.send(settings.data);

  }

  return {
    send: send
  }

})();