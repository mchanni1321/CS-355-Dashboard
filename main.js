var txt = "";
var txt1 = "";
var txt2 = "";

function myFunction() {
	var  x = document.getElementById("myTopnav");
		if(x.className === "topnav"){
			x.className += " responsive";
		}
		else {
			x.className = "topnav";
		}
}

function dropDown() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
	if (!e.target.matches('.dropbtn')){
		var myDropdown = document.getElementById("myDropdown");
			if(myDropdown.classList.contains('show')){
				myDropdown.classList.remove('show');
			}
	}
}

/*retrieve information regarding the navigator*/

txt += "<p><strong>Browser CodeName:</strong> " + navigator.appCodeName + "</p>";
txt += "<p><strong>Browser Name:</strong> " + navigator.appName + "</p>";
txt += "<p><strong>Browser Version:</strong> " + navigator.appVersion + "</p>";
txt += "<p><strong>Cookies Enabled:</strong> " + navigator.cookieEnabled + "</p>";
txt += "<p><strong>Browser Language:</strong> " + navigator.language + "</p>";
txt += "<p><strong>Browser Online:</strong> " + navigator.onLine + "</p>";
txt += "<p><strong>Platform:</strong> " + navigator.platform + "</p>";
txt += "<p><strong>User-agent header:</strong> " + navigator.userAgent + "</p>";
document.getElementById("navigator").innerHTML = txt;

/*retrieve information regarding the screen*/

txt1 += "<p><strong>Total width/height:</strong> " + screen.width + " " + "*" + " " + screen.height + "</p>";
txt1 += "<p><strong>Available width/height:</strong> " + screen.availWidth + " " + "*" + " " + screen.availHeight + "</p>";
txt1 += "<p><strong>Color depth:</strong> " + screen.colorDepth + "</p>";
txt1 += "<p><strong>Color resolution:</strong> " + screen.pixelDepth + "</p>";
document.getElementById("screen").innerHTML = txt1;

/*retrieve information regarding the window*/

txt2 += "<p><strong>Inner Width:</strong> " + window.innerWidth + "</p>";
txt2 += "<p><strong>Inner Height:</strong> " + window.innerHeight + "</p>";
txt2 += "<p><strong>Outer Width:</strong> " + window.outerWidth + "</p>";
txt2 += "<p><strong>Outer Height:</strong> " + window.outerHeight + "</p>";
document.getElementById("window").innerHTML = txt2;













