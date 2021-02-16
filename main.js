// https://www.youtube.com/watch?v=4K33w-0-p2c
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://reqres.in/api/users');
	xhr.onload = function(){
		console.log(xhr.response);
	};
	xhr.send();
	
};

const sendData = () => {};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
