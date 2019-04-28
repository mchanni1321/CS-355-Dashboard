function myFunction() {
	if (document.getElementsByName('addressType')[0].checked) {
		document.getElementById('ip6').disabled = true;
		document.getElementById('option1').disabled = false;
		document.getElementById('option2').disabled = false;
		document.getElementById('option3').disabled = false;
		document.getElementById('option4').disabled = false;
		document.getElementById('option5').disabled = false;
		document.getElementById('option6').disabled = false;
	}
	else {
		document.getElementById('option1').disabled = true;
		document.getElementById('option2').disabled = true;
		document.getElementById('option3').disabled = true;
		document.getElementById('option4').disabled = true;
		document.getElementById('option5').disabled = true;
		document.getElementById('option6').disabled = true;
		document.getElementById('ip6').disabled = false;
	}
}

function assignAddress(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function assignHEX() {
  	var text = "";
  	var possible = "ABCDEF0123456789";

  	for (var i = 0; i < 4; i++)
    	text += possible.charAt(Math.floor(Math.random() * possible.length));

  	return text;
	console.log(makeid());
}


function generateAddress() {
	var txt = "";
	if (document.getElementsByName('addressType')[0].checked) {
		if (document.getElementsByName('classType')[4].checked) {
			txt += "<p> RESERVED </p>";
			document.getElementById('result').innerHTML = txt;
		}
		else if (document.getElementsByName('classType')[0].checked) {
			var num = parseInt(document.getElementById('addressCount').value, 10);
			txt += "<p>" + assignAddress(255, 0) + "." + assignAddress(255, 0) + "." + assignAddress(255, 0) + "." + assignAddress(255, 0) + "</p>";
			document.getElementById('result').innerHTML = txt;
		}
		else if (document.getElementsByName('classType')[1].checked) {
			txt += "<p>" + assignAddress(255, 0) + "." + assignAddress(255, 0) + "." + assignAddress(255, 0) + "." + assignAddress(255, 0) + "</p>";
			document.getElementById('result').innerHTML = txt;
		}
		else if (document.getElementsByName('classType')[2].checked) {
			txt += "<p>" + assignAddress(255, 0) + "." + assignAddress(255, 0) + "." + assignAddress(255, 0) + "." + assignAddress(255, 0) + "</p>";
			document.getElementById('result').innerHTML = txt;
		}
		else if (document.getElementsByName('classType')[3].checked) {
			txt += "<p>" + assignAddress(255, 0) + "." + assignAddress(255, 0) + "." + assignAddress(255, 0) + "." + assignAddress(255, 0) + "</p>";
			document.getElementById('result').innerHTML = txt;
		}
		else if (document.getElementsByName('classType')[5].checked) {
			txt += "<p>" + assignAddress(255, 0) + "." + assignAddress(255, 0) + "." + assignAddress(255, 0) + "." + assignAddress(255, 0) + "</p>";
			document.getElementById('result').innerHTML = txt;
		}
	}
	if (document.getElementsByName('addressType')[1].checked) {
		txt += "<p>" + assignHEX() +  ":" + assignHEX() + ":" + assignHEX() + ":" + assignHEX() + ":" + assignHEX() + ":" + assignHEX() + ":" + assignHEX() + ":" + assignHEX() + "</p>";
		document.getElementById('result').innerHTML = txt;
	}
}




