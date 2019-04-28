function myFunction() {
	var x = document.getElementById("myFile");
	x.disabled = true;
}


function onChange(event) {
	var protocols = [];
	var txt = "";
	var file = event.target.files[0];
	var fileReader = new FileReader();
	var fileDisplayArea = document.getElementById("urls");
	var parser = document.createElement('a');
	var counter = 0;

	fileReader.onload = function(event) {
		var fileContent = event.target.result.split('\n');
		/*console.log(fileContent);*/
		fileDisplayArea.innerText = fileReader.result;
		/*fileDisplayArea.innerText = fileReader.result;*/

		for (var i = 0; i < fileContent.length; i++) {
			const currentURLString = fileContent[i];
			parser.href = currentURLString;

			txt+="<table><tr><th>Scheme</th></tr>" + "<tr><td>" + parser.protocol + "</td></tr>" + "<tr><th>Username</th></tr>" + "<tr><td>" + parser.username + "</td></tr>"
			+ "<tr><th>Host</th></tr>" + "<tr><td>" + parser.hostname + "</td></tr>" + "<tr><th>Port</th></tr>" + "<tr><td>" + parser.port + "</td></tr>"
			+ "<tr><th>Path</th></tr>" + "<tr><td>" + parser.pathname + "</td></tr>" + "<tr><th>Query</th></tr>" + "<tr><td>" + parser.search + "</td></tr>"
			+ "<tr><th>Fragment</th></tr>" + "<tr><td>" + parser.hash + "</td></tr></table>";
			document.getElementById("info").innerHTML = txt;
		}		
	};

	fileReader.readAsText(file);
}