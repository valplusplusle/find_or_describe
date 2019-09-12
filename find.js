var rightLink= "";
var wrongLink= "";
var Linklist = [];

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function getObject() {
	fetch('http://ide.blank-42.de:3000/get')
    .then(response => response.json())
    .then(data => {
    	console.log(data);
    	rightLink = data["picture"];
    	wrongLink = data["pictureWrong"]
    	Linklist = [rightLink, wrongLink];
		shuffle(Linklist);
        document.getElementById("describe").innerHTML = "";
        document.getElementById("output").innerHTML = "<div class='alert alert-primary d-flex justify-content-center' role='alert'><h3>''"+data["text"]+"''</h3></div>";
        document.getElementById("output").innerHTML += "<img onClick='check(Linklist[0])' src='"+ Linklist[0] +"' class='picture--max img-fluid rounded img-thumbnail mx-auto d-block'></img>";
        document.getElementById("output").innerHTML += "<img onClick='check(Linklist[1])' src='"+ Linklist[1] +"' class='picture--max img-fluid rounded img-thumbnail mx-auto d-block'></img>";
    });
}

function check(link) {
	if(link == rightLink){alert("Juhuu");}
	else {alert("buhh");}

}