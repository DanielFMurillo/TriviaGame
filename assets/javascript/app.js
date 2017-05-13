//Timer
function countDown(secs,elem){
	var element = document.getElementById(elem);
	element.innerHTML = "You have " + secs + " seconds left to complete the quiz";
	if(secs < 1){
		clearTimeout(timer);
		element.innerHTML = '<h2>Coutdown Complete!</h2>'
		// element.innerHTML = 

	}
	secs--;

	var timer = setTimeout('countDown('+secs+',"'+elem+'")',1000);


}

countDown(30,"timer");