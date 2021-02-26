i = 1;
y = "hi" + "no";
var str = "";
for(i = 1; i< 7;i++){
	x = "<h" + i.toString() + ">hello</h" + i.toString() + ">";
	str += x;
}
// for(i=0;i<k.length; i++){
// 	document.querySelector('#script').innerHTML = k[i];
// }
document.querySelector('#script').innerHTML = str;