var result = document.getElementById("result");
var submit = document.getElementById("search");
var search = document.getElementById("text");
var form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    
    var sBar = search.value;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://api.giphy.com/v1/gifs/search?q="+sBar+"&api_key=7U7AGYOh9CHExWz0fNZxUHt3WryPSKP3&20");
    oReq.send();

    function reqListener () {
        var data = JSON.parse(this.responseText);
            for(var i = 0; i < data.data.length; i++){
                var image = document.createElement("img");
                console.log(data.data[i].images.original.url);
                image.src = data.data[i].images.original.url;
                result.appendChild(image)
            }
    }    
})