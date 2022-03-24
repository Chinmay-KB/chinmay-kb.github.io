if(typeof(EventSource) !== "undefined") {
  var source = new EventSource("http://128.199.24.73:3000/events");
  source.onmessage = function(event) {
    const obj = JSON.parse(event.data);
    document.getElementById("sse-data").innerHTML= obj['data']+'</br>'+'Clients Live-'+obj['live_clients'];
  };
} else {
  document.getElementById("sse-data").innerHTML = "Sorry, your browser does not support server-sent events...";
}