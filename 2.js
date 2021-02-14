var t = document.querySelector('#target');
t.addEventListener('change', function(event){
	document.querySelector('#result').innerHTML = event.target.value;
});