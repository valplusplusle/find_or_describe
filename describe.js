var pictureLink;

function randomNumber(maxNumber) {
	return Math.floor(Math.random() * maxNumber) + 1;
}

function describe() {
	fetch('https://pixabay.com/api/?key=7701663-a26ee9d1fce25b3e9eafcdea9&per_page=200&image_type=photo')
    .then(response => response.json())
    .then(data => {
    	$pictureLink = data["hits"][randomNumber(200)]["webformatURL"];
    	$wrongPictureLink = data["hits"][randomNumber(200)]["webformatURL"];
        document.getElementById("output").innerHTML = "<img src='"+ $pictureLink +"' class='img-fluid rounded mx-auto d-block'></img>";
        send()
    });
}

function send() {
	document.getElementById("describe").innerHTML = '<form onSubmit="sendToServer()" class="d-flex justify-content-center"> <label for="name">Describe:</label> <input type="text" id="text" maxlength="10" name="text" /> <input type="submit" value="GO!" onClick="describe()"/> <form>';
}

function sendToServer(){
	console.log("test");

	fetch('http://ide.blank-42.de:3000/get', {
		headers: { "Content-Type": "application/json; charset=utf-8" },
		method: 'POST',
		body: JSON.stringify({
			text: Textinputfeldvaluehere,
			picture: picutreLink,
			pictureWrong: wrongPictureLink
		})
	})

}