var rightLink= "";
var wrongLink= "";

function getObject() {
	fetch('http://ide.blank-42.de:3000/get')
    .then(response => response.json())
    .then(data => {
    	console.log(data);
    	rightLink = data["picture"];
    	wrongLink = data["pictureWrong"]
        console.log(rightLink);
        document.getElementById("output").innerHTML = "<img onClick='check(rightLink)' src='"+ data["picture"] +"' class='img-fluid'></img>";
        document.getElementById("output").innerHTML += "<img onClick='check(wrongLink)' src='"+ data["pictureWrong"] +"' class='img-fluid'></img>";
        document.getElementById("describe").innerHTML = data["text"];

    });
}

function check(link) {
	if(link == rightLink){alert("Juhuu");}
	else {alert("buhh");}

}