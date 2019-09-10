function getObject(){
	fetch('http://ide.blank-42.de:3000/get')
    .then(response => response.json())
    .then(data => {
    	console.log(data);
        document.getElementById("output").innerHTML = "<img src='"+ data["picture"] +"' class='img-fluid'></img>";
        document.getElementById("describe").innerHTML = data["text"];
    });
}