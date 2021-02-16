const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
	return fetch(url, {
		method: method,
		body: JSON.stringify(data),
		headers: data ? {'Content-Type':'application/json'} : {}
	}).then(response => {
		return response.json();
	});
};

const getData = () => {
	sendHttpRequest('GET', 'https://reqres.in/api/users')
	.then(responseData => {
		console.log(responseData);
	});
};
const sendData = () => {
	sendHttpRequest('POST', 'https://reqres.in/api/register', {
    email: "eve.holt@reqres.in",
    password: "pisatol"
}).then(responseData => {
		console.log(responseData);
	})
	.catch(err => {
		console.log(err)
	});
};
getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);