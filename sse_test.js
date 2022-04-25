// if (typeof(EventSource) !== "undefined") {
//     var source = new EventSource("https://udao.chinmaykabi.com/events");
//     source.onmessage = function(event) {
//         const obj = JSON.parse(event.data);
//         if (obj['data'] != null)
//             document.getElementById("sse-data").innerHTML = obj['data'] + ' | ' + +obj['live_clients'] + ' flying';
//     };
// } else {
//     document.getElementById("sse-data").innerHTML = "Sorry, your browser does not support server-sent events...";
// }

if (typeof(EventSource) !== "undefined") {
    var source = new EventSource("https://udao.chinmaykabi.com/emojis?event=pakalupapito");
    source.onmessage = function(event) {
        const obj = JSON.parse(event.data);
        if (obj['data'] != null)
            document.getElementById("sse-emoji").innerHTML = emoji[obj['data']] + ' | ' + obj['live_clients'] + ' being emoted';
    };
} else {
    document.getElementById("sse-data").innerHTML = "Sorry, your browser does not support server-sent events...";
}

var emoji = ['🌽', '🍇', '🍌', '🍒', '🍕', '🍷', '🍭', '💖', '💩', '🐷', '🐸', '🐳', '🎃', '🎾', '🌈', '🍦', '💁', '🔥', '😁', '😱', '🌴', '👏', '💃'];